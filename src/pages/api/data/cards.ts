// pages/api/cards.ts

import { sql } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { rows } = await sql`SELECT * FROM cards`;
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching cards:", error);
    res.status(500).json({ error: "Failed to fetch cards" });
  }
}
