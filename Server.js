const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

// Helper functions hifandray amin'ny db.json
function readDB() {
  const data = fs.readFileSync('db.json');
  return JSON.parse(data);
}

function writeDB(db) {
  fs.writeFileSync('db.json', JSON.stringify(db, null, 2));
}

// GET balance
app.get('/balance', (req, res) => {
  const db = readDB();
  res.json({ balance: db.balance });
});

// POST deposit
app.post('/deposit', (req, res) => {
  const amount = parseFloat(req.body.amount);
  const db = readDB();
  db.balance = (parseFloat(db.balance) + amount).toFixed(2) + " ETH";
  db.transactions.push({ type: "deposit", amount });
  writeDB(db);
  res.json({ message: "Deposit successful", balance: db.balance });
});

// POST withdraw
app.post('/withdraw', (req, res) => {
  const amount = parseFloat(req.body.amount);
  const db = readDB();
  db.balance = (parseFloat(db.balance) - amount).toFixed(2) + " ETH";
  db.transactions.push({ type: "withdraw", amount });
  writeDB(db);
  res.json({ message: "Withdraw successful", balance: db.balance });
});

app.listen(3000, () => {
  console.log('Crypto-app backend running with database');
});
