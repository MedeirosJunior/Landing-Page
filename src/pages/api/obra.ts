import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const baseDir = path.join(process.cwd(), "public", "images");
  const obras: any[] = [];

  // Percorre os diretórios dentro de "public/images"
  const folders = fs.readdirSync(baseDir);

  folders.forEach((folder) => {
    const folderPath = path.join(baseDir, folder);

    // Verifica se é um diretório
    if (fs.lstatSync(folderPath).isDirectory()) {
      const images = fs.readdirSync(folderPath).map((file) => `/images/${folder}/${file}`);

      obras.push({
        slug: folder.toLowerCase().replace(/ /g, "-"),
        title: folder.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
        description: `${folder.replace(/-/g, " ")} description here.`,
        images,
      });
    }
  });

  res.status(200).json(obras);
}