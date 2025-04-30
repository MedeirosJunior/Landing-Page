import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const baseDir = path.join(process.cwd(), "public", "images");
  const obras = [];

  // Mapeamento de descrições para cada serviço
  const descriptions = {
    box: "Box de vidro para banheiros com design moderno.",
    portas: "Portas de vidro para ambientes internos e externos.",
    basculas: "Básculas de vidro para ventilação e iluminação.",
    muros: "Muros de vidro para segurança e estética.",
    guardaCorpo: "Guarda-corpo de vidro para segurança e elegância.",
    tetos: "Tetos de vidro para iluminação natural e design moderno.",
    cortinas: "Cortinas de vidro para ambientes internos e externos.",
    espelhos: "Espelhos de vidro para decoração e funcionalidade.",
    esquadrias: "Esquadrias de vidro para janelas e portas.",
    divisorias: "Divisórias de vidro para ambientes comerciais e residenciais.",
    janelas: "Janelas de vidro para eficiência energética e estética.",
  };

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
        description: descriptions[folder.toLowerCase()] || "Descrição não disponível.",
        images,
      });
    }
  });

  res.status(200).json(obras);
}