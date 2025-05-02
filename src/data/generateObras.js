const fs = require("fs");
const path = require("path");

// Caminho para o diretório de imagens
const baseDir = path.join(__dirname, "../public/images");

// Caminho para o arquivo JSON
const jsonFilePath = path.join(__dirname, "obras.json");

// Domínio do GitHub onde as imagens estão hospedadas
const githubBaseUrl = "https://raw.githubusercontent.com/MedeirosJunior/Landing-Page/main/public/images";

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

// Função para gerar o JSON
function generateObrasJson() {
  const obras = [];

  // Lê os diretórios dentro de 'public/images'
  const directories = fs.readdirSync(baseDir);

  directories.forEach((dir) => {
    const dirPath = path.join(baseDir, dir);
    if (fs.lstatSync(dirPath).isDirectory()) {
      const images = fs.readdirSync(dirPath).map((file) => `${githubBaseUrl}/${dir}/${file}`);
      obras.push({
        slug: dir,
        title: dir.charAt(0).toUpperCase() + dir.slice(1),
        description: descriptions[dir] || "Descrição não disponível.",
        images,
      });
    }
  });

  // Escreve os dados no arquivo JSON
  fs.writeFileSync(jsonFilePath, JSON.stringify(obras, null, 2), "utf-8");
  console.log("Arquivo obras.json atualizado com sucesso!");
}

// Executa a função
generateObrasJson();