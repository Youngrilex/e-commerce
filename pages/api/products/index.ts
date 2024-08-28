import { NextApiRequest, NextApiResponse } from 'next';
import { products } from '../../../db.json'; // Replace with actual data source

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Return all products
    res.status(200).json(products);
  } else if (req.method === 'POST') {
    // Add a new product
    const { name, description, price, category, image } = req.body;
    const newProduct = {
      id: products.length + 1,
      name,
      description,
      price,
      category,
      image,
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
