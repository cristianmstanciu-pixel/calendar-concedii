const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

let db;

async function connectDB() {
  try {
    const client = new MongoClient(MONGO_URI);
    await client.connect();
    db = client.db('calendar');
    console.log('Conectat la MongoDB!');
  } catch (e) {
    console.error('Eroare MongoDB:', e);
  }
}

app.get('/api/vacations', async (req, res) => {
  try {
    const doc = await db.collection('vacations').findOne({ _id: 'data' });
    res.json(doc ? doc.data : {});
  } catch (e) {
    res.json({});
  }
});

app.post('/api/vacations', async (req, res) => {
  try {
    await db.collection('vacations').updateOne(
      { _id: 'data' },
      { $set: { data: req.body } },
      { upsert: true }
    );
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: 'Eroare la salvare' });
  }
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server pornit pe portul ${PORT}`);
  });
});
