import { NextApiRequest, NextApiResponse } from 'next';
import { products } from '../../../db.json'; // Replace with actual data source

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const product = products.find((p) => p.id === parseInt(id as string));

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  if (req.method === 'GET') {
    res.status(200).json(product);
  } else if (req.method === 'PUT') {
    const { name, description, price, category, image } = req.body;
    product.name = name;
    product.description = description;
    product.price = price;
    product.category = category;
    product.image = image;
    res.status(200).json(product);
  } else if (req.method === 'DELETE') {
    const index = products.findIndex((p) => p.id === parseInt(id as string));
    products.splice(index, 1);
    res.status(204).end();
  } else {
    res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
