// import type { VercelRequest, VercelResponse } from '@vercel/node';
// import fs from 'fs';
// import path from 'path';

// export default async function handler(req: VercelRequest, res: VercelResponse) {
//   if (req.method !== 'POST') return res.status(405).send('Method not allowed');
  
//   const data = req.body;
  
//   // Save each sheet as a separate JSON file
//   const dataDir = path.join(process.cwd(), 'public/data');
//   if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

//   for (const sheet in data) {
//     fs.writeFileSync(path.join(dataDir, `${sheet}.json`), JSON.stringify(data[sheet], null, 2));
//   }

//   res.status(200).json({ success: true });
// }

// /api/updateRedis.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { key, data } = req.body;
  if (!key || !data) return res.status(400).json({ error: 'Missing key or data' });

  try {
    await redis.set(key, JSON.stringify(data));
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to save data to Redis' });
  }
}
