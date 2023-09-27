import { MongoClient } from 'mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res)
{
    const client = new MongoClient(process.env.MONGODB_URI);

    try
    {
        await client.connect();
        const params = req.query.params;
        const doer = params[0];
        const board = params[1];
        const name = params[2];

        const board_id = new ObjectId(board);
        const expandable_board = await client.db('ToDoListApp').collection('Boards').findOne({"_id": board_id});
        const caller = await client.db('ToDoListApp').collection('Users').findOne({ "nickname": doer });
        if (!caller.boards.includes(board)) return res.status(404).json({ message: 'Access not permitted' });

        const inserted_task = await client.db('ToDoListApp').collection('Tasks').insertOne({ "name": name, "state": "Сделать", "doer": doer });
        const added_to_board = await client.db('ToDoListApp').collection('Boards').updateOne({ "_id": board_id }, { $push: { "tasks": inserted_task.insertedId } })
        client.close();

        if (!inserted_task)
        {
            return res.status(404).json({ message: 'Task adding error' });
        }
        return res.status(200).json({ message: 'New task added' });
    }
    catch (error)
    {
        return res.status(500).json({ message: error.toString() });
    }
}