import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'db.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  res.status(200).json(JSON.parse(jsonData));
}
