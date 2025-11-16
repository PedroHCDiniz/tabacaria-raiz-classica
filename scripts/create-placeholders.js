import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Lista de produtos do arquivo produtos.tsx
const produtos = [
  "rape-imburana", "rape-cravo", "rape-real", "rape-7ervas", "rape-girassol",
  "rape-hortela", "rape-mentolado", "rape-super-vick", "rape-morango", "rape-cafe",
  "rape-super-mentolado", "rape-cacitral-branco", "rape-cacitral", "rape-eucalipto",
  "rape-chocolate", "rape-cravo-canela", "rape-canela", "rape-natural"
].map(nome => ({
  nome: nome.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
  arquivo: nome + '.svg'
}));

// Função para criar SVG placeholder
function createPlaceholderSVG(nome) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600">
  <rect width="100%" height="100%" fill="#f5e6d3"/>
  <text x="50%" y="50%" font-family="Arial, Helvetica, sans-serif" font-size="32" fill="#4a3426" dominant-baseline="middle" text-anchor="middle">${nome}</text>
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