import { MongoClient } from 'mongodb';

export default async function handler(req, res)
{
    const client = new MongoClient(process.env.MONGODB_URI);

    try
    {
        await client.connect();
        const { id } = req.query;
        const user = await client.db('ToDoListApp').collection('Users').findOne({ Nickname: id }); 
        client.close();

        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json(user);

    } catch (error)
    {
        return res.status(500).json({ message: error.toString() });
    }
}