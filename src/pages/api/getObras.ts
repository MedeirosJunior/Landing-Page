import path from "path";
import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";

interface Obra {
  slug: string;
  title: string;
  description: string;
  images: string[];
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const baseDir = path.join(process.cwd(), "public", "images");
  const obras: Obra[] = []; // Tipagem explícita para 'obras'

  // Mapeamento de descrições para cada serviço
  const descriptions: Record<string, string> = {
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

  // Lê os diretórios dentro de 'public/images'
  const directories = fs.readdirSync(baseDir);

  directories.forEach((dir) => {
    const dirPath = path.join(baseDir, dir);
    if (fs.lstatSync(dirPath).isDirectory()) {
      const images = fs.readdirSync(dirPath).map((file) => `/images/${dir}/${file}`);
      obras.push({
        slug: dir,
        title: dir.charAt(0).toUpperCase() + dir.slice(1),
        description: descriptions[dir] || "Descrição não disponível.",
        images,
      });
    }
  });

  res.status(200).json(obras);
}