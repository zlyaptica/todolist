import { MongoClient } from 'mongodb';

export default async function CheckUser(nickname, password)
{
    const client = new MongoClient(process.env.MONGODB_URI);
    try
    {
        await client.connect();
        const db = client.db(process.env.DATABASE_NAME);
        const collection = db.collection("Users");
        const result = await collection.findOne({"nickname": toString(nickname), "password": toString(password)});
    }
    catch (error)
    {
        return false;
    }
    finally
    {
        await client.close();
        return result;
    }
}

export default async function AddUser(name, nickname, password)
{
    const client = new MongoClient(process.env.MONGODB_URI);
    try
    {
        await client.connect();
        const db = client.db(process.env.DATABASE_NAME);
        const collection = db.collection("Users");
        const result = await collection.insertOne({"name": toString(name), "nickname": toString(nickname), "password": toString(password)});
    }
    catch (error)
    {
        return false;
    }
    finally
    {
        await client.close();
    }
}