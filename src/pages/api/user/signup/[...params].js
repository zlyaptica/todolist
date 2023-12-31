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
        const check_user = await client.db('ToDoListApp').collection('Users').findOne({ "nickname": nickname });
        if (check_user) return res.status(404).json({ message: 'This user already exists' });
        const inserted = await client.db('ToDoListApp').collection('Users').insertOne({ "name": name, "nickname": nickname, "password": password, "boards": []  });
        client.close();
        if (!inserted)
        {
          return res.status(404).json({ message: 'User has not been added' });
        }
        return res.status(200).json({ message: 'Successful sign up' });
            
    }
      catch (error)
    {
        return res.status(500).json({ message: error.toString() });
    }
}