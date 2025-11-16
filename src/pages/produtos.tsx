import { IProduto } from "@/types/interfaces";
import { ProductCard } from "@/components/ProductCard";

// Dados de exemplo para produtos
// Observações importantes para edição futura:
// - Cada produto é um objeto IProduto { id, nome, categoria, preco, imagem, descricao }
// - Se o produto for vendido por peso (ex: fumo de rolo), informe no campo descricao a unidade e o preço (ex: "Vendido por peso: 100g = R$20,00").
// - Se for vendido por comprimento (ex: fumo trançado), indique no descricao que 10cm = R$10,00 e que você aceita qualquer quantidade.
// - Para adicionar imagens: coloque os arquivos em /public/produtos/ e use o caminho "/produtos/nome-da-imagem.jpg" no campo imagem.
// - Canivetes foram adicionados com nomes genéricos (Canivete 01, Canivete 02) — você pode renomeá-los quando tiver os nomes reais.

const produtos: IProduto[] = [
  // 1..: Botinas
  {
    id: 1,
    nome: "Botina Texana",
    categoria: "Botinas",
    preco: 199.9,
  imagem: "/produtos/botina-texana.svg",
    descricao: "Botina em couro legítimo, solado em borracha antiderrapante. Conforto e durabilidade garantidos."
  },

  // Chapeus e Bonés
  {
    id: 2,
    nome: "Chapéu Country",
    categoria: "Chapeus e Bonés",
    preco: 89.9,
  imagem: "/produtos/chapeu-country.svg",
    descricao: "Chapéu em feltro com acabamento premium, aba larga para maior proteção."
  },

  // Charutos
  {
    id: 3,
    nome: "Charuto Axé",
    categoria: "Charutos",
    preco: 7.0,
  imagem: "/produtos/charuto-axe.svg",
    descricao: "Charuto nacional de excelente qualidade, sabor suave e construção perfeita."
  },

  // Cigarros de palha
  {
    id: 4,
    nome: "Cigarros de Palha Jequitibá",
    categoria: "Cigarros de palha",
    preco: 12.9,
  imagem: "/produtos/cigarro-palha.svg",
    descricao: "Cigarros de palha artesanais, produzidos com fumo de primeira qualidade."
  },

  // Dichavadores e sedinhas
  {
    id: 5,
    nome: "Dichavador Metal",
    categoria: "Dichavadores e sedinhas",
    preco: 45.0,
  imagem: "/produtos/dichavador.svg",
    descricao: "Dichavador em metal resistente com compartimento coletor."
  },

  // Erva-Mate
  {
    id: 6,
    nome: "Erva-Mate Tradicional",
    categoria: "Erva-Mate",
    preco: 25.9,
  imagem: "/produtos/erva-mate.svg",
    descricao: "Erva-mate premium para chimarrão, moagem tradicional e sabor marcante."
  },

  // Facas e Canivetes (nomes genéricos — substitua depois)
  {
    id: 7,
    nome: "Canivete 01",
    categoria: "Facas e Canivetes",
    preco: 79.9,
  imagem: "/produtos/canivete-01.svg",
    descricao: "Canivete genérico — troque o nome e a imagem quando tiver o produto real."
  },
  {
    id: 8,
    nome: "Canivete 02",
    categoria: "Facas e Canivetes",
    preco: 99.9,
  imagem: "/produtos/canivete-02.svg",
    descricao: "Canivete genérico — copie este objeto para adicionar mais canivetes."
  },

  // Fumos, palhas e papéis para enrolar
  // Fumo de rolo vendido por peso: 100g = R$20,00
  {
    id: 9,
    nome: "Fumo de Rolo Arapiraca Preto",
    categoria: "Fumos, palhas e papéis para enrolar",
    preco: 20.0,
  imagem: "/produtos/fumo-arapiraca-preto.svg",
    descricao: "Vendido por peso: 100g = R$20,00. Escolha a quantidade em gramas no pedido."
  },
  {
    id: 10,
    nome: "Fumo de Rolo 7 Cordas",
    categoria: "Fumos, palhas e papéis para enrolar",
    preco: 20.0,
  imagem: "/produtos/fumo-7cordas.svg",
    descricao: "Vendido por peso: 100g = R$20,00."
  },
  {
    id: 11,
    nome: "Fumo de Rolo Arapiraca Castanho",
    categoria: "Fumos, palhas e papéis para enrolar",
    preco: 20.0,
  imagem: "/produtos/fumo-arapiraca-castanho.svg",
    descricao: "Vendido por peso: 100g = R$20,00."
  },
  {
    id: 12,
    nome: "Fumo Tocantins",
    categoria: "Fumos, palhas e papéis para enrolar",
    preco: 20.0,
  imagem: "/produtos/fumo-tocantins.svg",
    descricao: "Vendido por peso: 100g = R$20,00."
  },
  {
    id: 13,
    nome: "Fumo Mineiro Forte",
    categoria: "Fumos, palhas e papéis para enrolar",
    preco: 20.0,
  imagem: "/produtos/fumo-mineiro-forte.svg",
    descricao: "Vendido por peso: 100g = R$20,00."
  },
  // Fumo trançado — vendido por comprimento: 10cm = R$10,00 (vende-se qualquer quantidade)
  {
    id: 14,
    nome: "Fumo Trançado Porto Faria",
    categoria: "Fumos, palhas e papéis para enrolar",
    preco: 10.0,
  imagem: "/produtos/fumo-trancado-porto-faria.svg",
    descricao: "Fumo trançado. Vendido por comprimento: 10cm = R$10,00. Vendemos qualquer quantidade."
  },
  {
    id: 15,
    nome: "Fumo Trançado Perdões",
    categoria: "Fumos, palhas e papéis para enrolar",
    preco: 10.0,
  imagem: "/produtos/fumo-trancado-perdoes.svg",
    descricao: "Fumo trançado. Vendido por comprimento: 10cm = R$10,00."
  },

  // Outros
  {
    id: 16,
    nome: "Isqueiro Zippo",
    categoria: "Outros",
    preco: 189.9,
  imagem: "/produtos/isqueiro.svg",
    descricao: "Isqueiro Zippo original, acabamento clássico, garantia vitalícia."
  },

  // Rapés — preço uniforme R$4,00 cada conforme solicitado
  // Lista completa de rapés fornecida pelo usuário
  {
    id: 17,
    nome: "Rapé Imburana",
    categoria: "Rapés",
    preco: 4.0,
  imagem: "/produtos/rape-imburana.svg",
    descricao: "Rapé Imburana — R$4,00."
  },
  {
    id: 18,
    nome: "Rapé Cravo",
    categoria: "Rapés",
    preco: 4.0,
  imagem: "/produtos/rape-cravo.svg",
    descricao: "Rapé Cravo — R$4,00."
  },
  {
    id: 19,
    nome: "Rapé Real",
    categoria: "Rapés",
    preco: 4.0,
  imagem: "/produtos/rape-real.svg",
    descricao: "Rapé Real — R$4,00."
  },
  {
    id: 20,
    nome: "Rapé 7 Ervas",
    categoria: "Rapés",
    preco: 4.0,
  imagem: "/produtos/rape-7ervas.svg",
    descricao: "Rapé 7 Ervas — R$4,00."
  },
  {
    id: 21,
    nome: "Rapé Girassol",
    categoria: "Rapés",
    preco: 4.0,
  imagem: "/produtos/rape-girassol.svg",
    descricao: "Rapé Girassol — R$4,00."
  },
  {
    id: 22,
    nome: "Rapé Hortelã",
    categoria: "Rapés",
    preco: 4.0,
  imagem: "/produtos/rape-hortela.svg",
    descricao: "Rapé Hortelã — R$4,00."
  },
  {
    id: 23,
    nome: "Rapé Mentolado",
    categoria: "Rapés",
    preco: 4.0,
  imagem: "/produtos/rape-mentolado.svg",
    descricao: "Rapé Mentolado — R$4,00."
  },
  {
    id: 24,
    nome: "Rapé Super Vick",
    categoria: "Rapés",
    preco: 4.0,
  imagem: "/produtos/rape-super-vick.svg",
    descricao: "Rapé Super Vick — R$4,00."
  },
  {
    id: 25,
    nome: "Rapé Morango",
    categoria: "Rapés",
    preco: 4.0,
  imagem: "/produtos/rape-morango.svg",
    descricao: "Rapé Morango — R$4,00."
  },
  {
    id: 26,
    nome: "Rapé Café",
    categoria: "Rapés",
    preco: 4.0,
  imagem: "/produtos/rape-cafe.svg",
    descricao: "Rapé Café — R$4,00."
  },
  {
    id: 27,
    nome: "Rapé Super Mentolado",
    categoria: "Rapés",
    preco: 4.0,
  imagem: "/produtos/rape-super-mentolado.svg",
    descricao: "Rapé Super Mentolado — R$4,00."
  },
  {
    id: 28,
    nome: "Rapé Cacitral Branco",
    categoria: "Rapés",
    preco: 4.0,
  imagem: "/produtos/rape-cacitral-branco.svg",
    descricao: "Rapé Cacitral Branco — R$4,00."
  },
  {
    id: 29,
    nome: "Rapé Cacitral",
    categoria: "Rapés",
    preco: 4.0,
  imagem: "/produtos/rape-cacitral.svg",
    descricao: "Rapé Cacitral — R$4,00."
  },
  {
    id: 30,
    nome: "Rapé Eucalipto",
    categoria: "Rapés",
    preco: 4.0,
  imagem: "/produtos/rape-eucalipto.svg",
    descricao: "Rapé Eucalipto — R$4,00."
  },
  {
    id: 31,
    nome: "Rapé Chocolate",
    categoria: "Rapés",
    preco: 4.0,
  imagem: "/produtos/rape-chocolate.svg",
    descricao: "Rapé Chocolate — R$4,00."
  },
  {
    id: 32,
    nome: "Rapé Cravo e Canela",
    categoria: "Rapés",
    preco: 4.0,
  imagem: "/produtos/rape-cravo-canela.svg",
    descricao: "Rapé Cravo e Canela — R$4,00."
  },
  {
    id: 33,
    nome: "Rapé Canela",
    categoria: "Rapés",
    preco: 4.0,
  imagem: "/produtos/rape-canela.svg",
    descricao: "Rapé Canela — R$4,00."
  },
  {
    id: 34,
    nome: "Rapé Natural",
    categoria: "Rapés",
    preco: 4.0,
  imagem: "/produtos/rape-natural.svg",
    descricao: "Rapé Natural — R$4,00."
  }
];

export default function ProdutosPage() {
  // Agrupar produtos por categoria
  const produtosPorCategoria = produtos.reduce((acc, produto) => {
    if (!acc[produto.categoria]) {
      acc[produto.categoria] = [];
    }
    acc[produto.categoria].push(produto);
    return acc;
  }, {} as Record<string, IProduto[]>);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-16">
          Nossos <span className="text-primary">Produtos</span>
        </h1>

        <div className="space-y-16">
          {Object.keys(produtosPorCategoria)
            .sort((a, b) => a.localeCompare(b, 'pt-BR')) // garantir ordem alfabética das categorias
            .map((categoria) => {
              const itens = produtosPorCategoria[categoria];
              return (
                <section key={categoria}>
                  <h2 className="text-2xl font-semibold mb-8 text-foreground/90">
                    {categoria}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {itens.map((produto) => (
                      <ProductCard key={produto.id} produto={produto} />
                    ))}
                  </div>
                </section>
              );
            })}
        </div>
      </div>
    </div>
  );
}