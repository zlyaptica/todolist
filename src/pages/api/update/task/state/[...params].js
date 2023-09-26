import {MongoClient} from 'mongodb';
import {ObjectId} from 'mongodb';

export default async function handler(req, res) {
    const client = new MongoClient(process.env.MONGODB_URI);

    try {
        await client.connect();
        const params = req.query.params;
        const board = params[0];
        const task = params[1];
        const state = params[2];

        const task_id = new ObjectId(task);
        const board_id = new ObjectId(board);

        const board_info = await client.db('ToDoListApp').collection('Boards').findOne({"_id": board_id});
        if (!board_info) return res.status(404).json({message: 'Invalid board'});
        //const state_index = parseInt(state);
        //if (!state_index) return res.status(404).json({ message: 'Invalid state index' });
        if (!board_info.states.includes(state)) return res.status(404).json({message: 'Invalid state index'});
        //const task_state = board_info.states[state_index];

        const inserted = await client.db('ToDoListApp').collection('Tasks').updateOne({"_id": task_id}, {$set: {"state": state}});
        client.close();

        if (!inserted) {
            return res.status(404).json({message: 'Task state update error'});
        }
        return res.status(200).json({message: 'Task has been updated successfully'});
    } catch (error) {
        return res.status(500).json({message: error.toString()});
    }
}