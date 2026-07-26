import express from 'express';
import cors from 'cors';
import { saveOrder, getOrder } from './db.js';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/orders', (req, res) => {
  const { customer, calculation, createdAt } = req.body;
  if (!customer?.name || !customer?.phone || !calculation) {
    return res.status(400).json({ error: 'Неверные данные заявки' });
  }

  const id = saveOrder({ customer, calculation, createdAt });
  res.json({ id });
});

app.get('/api/orders/:id', (req, res) => {
  const id = Number(req.params.id);
  const order = getOrder(id);
  if (!order) {
    return res.status(404).json({ error: 'Заказ не найден' });
  }

  res.json(order);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend запущен на http://localhost:${PORT}`);
});
