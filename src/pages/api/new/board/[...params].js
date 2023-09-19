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
    
        if (!inserted)
        {
          return res.status(503).json({ message: 'Board adding error' });
        }
        else
        {
            return res.status(201).json({ message: 'New board added' });
        } 
    }
      catch (error)
    {
        return res.status(500).json({ message: error.toString() });
    }
      finally
    {
        client.close();
    }
}