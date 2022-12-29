import type { NextApiRequest, NextApiResponse } from "next";
import { getGameById } from "../../server/helpers/getGameById";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const game = getGameById(req.body.id);
  if (game) {
    res.status(200).json(game);
  }
  res.status(404);
}
