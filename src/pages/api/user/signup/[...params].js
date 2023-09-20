import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
    const client = new MongoClient(process.env.MONGODB_URI);

    try
    {
        await client.connect();
        const params = req.query.params;
        const name = params[0];
        const nickname = params[1];
        const password = params[2];
        const inserted = await client.db('ToDoListApp').collection('Users').insertOne({ Name: name, Nickname: nickname, Password: password, Boards: {} });
    
        if (!inserted)
        {
          return res.status(503).json({ message: 'Oops! User has not been added!' });
        }
        else
        {
            return res.status(201).json({ message: 'Successful sign up' });
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