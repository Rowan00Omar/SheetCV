// api/fetchSheet.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const sheetName = req.query.sheetName as string;
  if (!sheetName) return res.status(400).json({ error: 'Missing sheetName' });

  try {
    // Fetch cached data from Redis
    const data = await redis.get(sheetName);

    if (!data) {
      return res.status(404).json({ error: 'Data not found in Redis' });
    }

    return res.status(200).json(JSON.parse(data));
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
