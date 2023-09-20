import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
    const client = new MongoClient(process.env.MONGODB_URI, { });

    try {
        await client.connect();

        const { id } = req.query;

        //// Поменять поля, если не совпадают с полями в монге:
        const user = await req.db.collection('users').findOne({ _id: ObjectId(id) }); 
    
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
    
        return res.status(200).json(user);
      } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
      }
}