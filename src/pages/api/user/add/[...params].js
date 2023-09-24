import { MongoClient } from 'mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res)
{
    const client = new MongoClient(process.env.MONGODB_URI);

    try
    {
        await client.connect();
        const params = req.query.params;
        const nickname = params[0];
        const board = params[1];

        const board_id = new ObjectId(board);
        const board_info = await client.db('ToDoListApp').collection('Boards').findOne({ "_id": board_id });
        if (board_info.doers.includes(nickname)) return res.status(404).json({ message: 'This user has already been doer' });

        const editable_board = await client.db('ToDoListApp').collection('Boards').updateOne({ "_id": board_id }, { $push: { "doers": nickname } });
        const new_doer = await client.db('ToDoListApp').collection('Users').updateOne({ "nickname": nickname }, { $push: { "boards": board } });
        client.close();

        if (!editable_board)
        {
          return res.status(404).json({ message: 'Updating error' });
        }
        return res.status(200).json({ message: 'User has been added' });
    }
      catch (error)
    {
        return res.status(500).json({ message: error.toString() });
    }
}