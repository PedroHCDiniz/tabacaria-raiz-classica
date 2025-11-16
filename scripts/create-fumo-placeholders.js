import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Lista de produtos de fumo
const produtos = [
  "fumo-desfiado-1kg", "fumo-desfiado-500g", "fumo-desfiado-250g",
  "fumo-corda-metro", "fumo-corda-meio-metro", "fumo-corda-25cm"
].map(nome => ({
  nome: nome.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
  arquivo: nome + '.svg'
}));

// Função para criar SVG placeholder
function createPlaceholderSVG(nome) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600">
  <rect width="100%" height="100%" fill="#8b4513"/>
  <text x="50%" y="50%" font-family="Arial, Helvetica, sans-serif" font-size="32" fill="#f5e6d3" dominant-baseline="middle" text-anchor="middle">${nome}</text>
</svg>`;
}

// Criar pasta produtos se não existir
const produtosDir = join(dirname(__dirname), 'public', 'produtos');
if (!existsSync(produtosDir)) {
  mkdirSync(produtosDir, { recursive: true });
}

// Criar SVGs para cada produto
produtos.forEach(({ nome, arquivo }) => {
  const svg = createPlaceholderSVG(nome);
  writeFileSync(join(produtosDir, arquivo), svg);
  console.log(`Criado: ${arquivo}`);
});