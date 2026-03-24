const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
// Connect to the database cluster
const client = new MongoClient(url);
const db = client.db('startup');
const scoreCollection = db.collection('scores');

async function connectDb() {
    await client.connect();
    await db.command({ ping: 1 });
    console.log(`MongoDB connected (${config.hostname})`);
}

async function addScore(username) {
    await scoreCollection.updateOne(
        { username },
        { $inc: { wins: 1 }, $setOnInsert: { username } },
        { upsert: true }
    );
}

async function getHighScores() {
    const query = { wins: { $gt: 0, $lt: 900 } };
    const options = {
        sort: { wins: -1 },
        limit: 5,
    };
    const cursor = scoreCollection.find(query, options);
    const docs = await cursor.toArray();
    return docs.map(({ username, wins }) => ({ username, wins }));
}

module.exports = {
    connectDb,
    scoreCollection,
    addScore,
    getHighScores,
};