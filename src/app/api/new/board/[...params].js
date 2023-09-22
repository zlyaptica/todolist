import { MongoClient } from 'mongodb';

export default async function handler(req, res)
{
    const client = new MongoClient(process.env.MONGODB_URI);

    try
    {
        await client.connect();
        const params = req.query.params;
        const doer = params[0];
        const name = params[1];
        const inserted = await client.db('ToDoListApp').collection('Boards').insertOne({ Name: name, Tasks: {}, States: {}, Doers: {doer} });
        client.close();

        if (!inserted)
        {
          return res.status(404).json({ message: 'Board adding error' });
        }
        return res.status(200).json({ message: 'New board added' });

    }
      catch (error)
    {
        return res.status(500).json({ message: error.toString() });
    }
}