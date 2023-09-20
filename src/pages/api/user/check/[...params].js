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
        const user_info = await client.db('ToDoListApp').collection('Users').findOne({ Nickname: nickname, Password: password });
    
        if (!user_info)
        {
          return res.status(401).json({ message: 'There is no such user here' });
        }
        else
        {
            return res.status(302).json({ message: 'This user found' });
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