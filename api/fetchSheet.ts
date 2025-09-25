import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { sheetName } = req.query;
  if (!sheetName || typeof sheetName !== "string") return res.status(400).json({ error: "Missing sheetName" });

  try {
    const data = await redis.get(sheetName);
    return res.status(200).json(JSON.parse(data || "[]"));
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to fetch data from Redis" });
  }
}
