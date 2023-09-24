import { MongoClient } from 'mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res)
{
    const client = new MongoClient(process.env.MONGODB_URI);

    try
    {
        await client.connect();
        const params = req.query.params;
        const user = params[0];
        const board = params[1];
        const task = params[2];

        const task_id = new ObjectId(task);

        const caller = await client.db('ToDoListApp').collection('Users').findOne({ "nickname": user });
        if (!caller.boards.includes(board)) return res.status(404).json({ message: 'Access not permitted' });

        const task_info = await client.db('ToDoListApp').collection('Tasks').findOne({ "_id": task_id  });
        client.close();

        if (!task_info)
        {
          return res.status(404).json({ message: 'Task not found' });
        }
        return res.status(200).json(task_info);
    }
      catch (error)
    {
        return res.status(500).json({ message: error.toString() });
    }
}