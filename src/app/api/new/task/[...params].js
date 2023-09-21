import { MongoClient } from 'mongodb';

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
        const inserted = await client.db('ToDoListApp').collection('Tasks').insertOne({ Name: name, State: "", Doer: doer });
        client.close();

        if (!inserted)
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