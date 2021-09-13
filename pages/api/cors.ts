// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next';
import Cors from "cors";
import initMiddleware from "../../lib/init-middleware";
import { NextApiResponse, NextApiRequest } from "next";

// Initializing the cors middleware
const cors = initMiddleware(
  Cors({
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"]
  })
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Run cors
  await cors(req, res);

  // Rest of the API logic
  res.json({ message: "Hello Everyone!" });
}
