import { MongoClient } from 'mongodb';

export default async function handler(req, res)
{
    const client = new MongoClient(process.env.MONGODB_URI);

    try
    {
        await client.connect();
        const params = req.query.params;
        const nickname = params[0];
        const password = params[1];
        const user_info = await client.db('ToDoListApp').collection('Users').findOne({ nickname: nickname, password: password });
        client.close();
        if (!user_info)
        {
          return res.status(404).json({ message: 'There is no such user here' });
        }
        return res.status(200).json({ message: 'This user found' });
    }
      catch (error)
    {
        return res.status(500).json({ message: error.toString() });
    }
}