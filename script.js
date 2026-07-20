document.getElementById('depositForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const amount = e.target.amount.value;
  const res = await fetch('/deposit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount })
  });
  const data = await res.json();
  alert(data.message);
});

document.getElementById('withdrawForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const amount = e.target.amount.value;
  const res = await fetch('/withdraw', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount })
  });
  const data = await res.json();
  alert(data.message);
});

async function getBalance() {
  const res = await fetch('/balance');
  const data = await res.json();
  document.getElementById('balance').innerText = "Balance: " + data.balance;
}
getBalance();
