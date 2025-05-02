import { NextApiRequest, NextApiResponse } from "next";
import obras from "@/data/obras.json"; // Importa os dados do arquivo JSON

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(obras); // Retorna os dados diretamente do JSON
}