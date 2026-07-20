const express = require('express');
const app = express();

app.use(express.json());

// GET balance
app.get('/balance', (req, res) => {
  res.json({ balance: "0.00 ETH" });
});

// POST deposit
app.post('/deposit', (req, res) => {
  const amount = req.body.amount;
  res.json({ message: "Deposit successful", amount });
});

// POST withdraw
app.post('/withdraw', (req, res) => {
  const amount = req.body.amount;
  res.json({ message: "Withdraw successful", amount });
});

app.listen(3000, () => {
  console.log('Crypto-app backend running on port 3000');
});
