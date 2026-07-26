const orders = new Map();
let nextId = 1;

export function saveOrder(data) {
  const id = nextId++;
  orders.set(id, {
    id,
    status: 'Принято',
    createdAt: data.createdAt || new Date().toISOString(),
    ...data,
  });
  return id;
}

export function getOrder(id) {
  return orders.get(id);
}
