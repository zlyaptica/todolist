import { MongoClient } from 'mongodb';

export default async function handler(req, res)
{
    const client = new MongoClient(process.env.MONGODB_URI);

    try
    {
        await client.connect();
        const body = JSON.parse(req.body)
        const doer = body.doer
        const name = body.name;
        const inserted = await client.db('ToDoListApp').collection('Boards').insertOne({ "name": name, "tasks": [], "states": ["To do", "In progress", "Done"], "doers": [doer] });
        const updated = await client.db('ToDoListApp').collection('Users').updateOne({ "nickname": doer }, { $push: { "boards": inserted.insertedId.toString() } });
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