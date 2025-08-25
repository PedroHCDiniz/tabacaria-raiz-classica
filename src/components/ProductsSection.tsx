import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import charutosImage from "@/assets/charutos.jpg";
import cachimbosImage from "@/assets/cachimbos.jpg";
import acessoriosImage from "@/assets/acessorios.jpg";

/**
 * SEÇÃO DE PRODUTOS - Showcase dos principais produtos
 * 
 * Esta seção apresenta as principais categorias de produtos da tabacaria.
 * Ela serve para:
 * - Mostrar a variedade de produtos oferecidos
 * - Criar interesse nos produtos específicos
 * - Guiar o cliente para conhecer mais sobre cada categoria
 * 
 * ESTRUTURA ATUAL:
 * - Grid responsivo com 3 categorias principais
 * - Cards com imagem, título, descrição e botão
 * - Design elegante com hover effects
 * 
 * POSSÍVEIS MELHORIAS QUE VOCÊ PODE ADICIONAR:
 * - Mais categorias de produtos
 * - Preços ou faixas de preço
 * - Sistema de filtros
 * - Carrossel de produtos em destaque
 * - Badges (Ex: "Mais vendido", "Novidade", "Importado")
 * - Links para páginas específicas de cada categoria
 * - Modal com mais detalhes ao clicar
 * - Sistema de favoritos
 * - Avaliações/reviews dos produtos
 */

// Array com os dados dos produtos - você pode mover isso para um arquivo separado
// ou conectar com uma API/banco de dados
const produtos = [
  { 
    id: 1,
    titulo: "Charutos Premium",
    descricao: "Seleção exclusiva de charutos cubanos e dominicanos, envelhecidos em nossos humidores climatizados.",
    imagem: charutosImage,
    destaque: "Cubanos Autênticos",
    // Você pode adicionar mais campos:
    // preco: "R$ 80 - R$ 500",
    // categoria: "charutos",
    // estoque: 45,
    // novidade: false
  },
  {
    id: 2,
    titulo: "Cachimbos Artesanais",
    descricao: "Cachimbos únicos feitos à mão por mestres artesãos, combinando tradição e sofisticação.",
    imagem: cachimbosImage,
    destaque: "Feitos à Mão",
    // preco: "R$ 120 - R$ 800",
    // categoria: "cachimbos",
    // estoque: 23,
    // novidade: true
  },
  {
    id: 3,
    titulo: "Acessórios Finos",
    descricao: "Cortadores, isqueiros, cinzeiros e humidores das melhores marcas europeias.",
    imagem: acessoriosImage,
    destaque: "Marcas Europeias",
    // preco: "R$ 45 - R$ 350",
    // categoria: "acessorios",
    // estoque: 67,
    // novidade: false
  }
];

const ProductsSection = () => {
  return (
    <section id="produtos" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* 
          CABEÇALHO DA SEÇÃO
          Título e descrição que introduzem os produtos
        */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Produtos
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cada item em nossa coleção é cuidadosamente selecionado para oferecer 
            a melhor experiência aos verdadeiros apreciadores.
          </p>
        </div>

        {/* 
          GRID DE PRODUTOS
          Layout responsivo que se adapta ao tamanho da tela:
          - 1 coluna no mobile
          - 2 colunas no tablet  
          - 3 colunas no desktop
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {produtos.map((produto) => (
            <Card 
              key={produto.id}
              className="group overflow-hidden bg-card border-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2"
            >
              {/* 
                IMAGEM DO PRODUTO
                Container da imagem com overflow hidden para efeito hover
                A imagem tem transition para efeito de zoom suave
              */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={produto.imagem}
                  alt={produto.titulo}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* 
                  BADGE DE DESTAQUE
                  Pequeno indicador no canto da imagem
                  Você pode adicionar lógica para mostrar diferentes badges:
                  - "Novidade" para produtos novos
                  - "Promoção" para produtos em oferta
                  - "Mais vendido" para produtos populares
                */}
                <div className="absolute top-4 right-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {produto.destaque}
                  </span>
                </div>
              </div>

              {/* 
                CONTEÚDO DO CARD
                Informações textuais sobre o produto
              */}
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {produto.titulo}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {produto.descricao}
                </CardDescription>
              </CardHeader>

              {/* 
                RODAPÉ DO CARD
                Botão de ação para cada produto
                Você pode adicionar mais elementos aqui:
                - Preço do produto
                - Botão "Adicionar ao carrinho"
                - Avaliação em estrelas
                - Indicador de estoque
              */}
              <CardContent className="pt-0">
                <Button 
                  className="w-full bg-gradient-to-r from-secondary to-accent hover:shadow-lg hover:shadow-secondary/25 transition-all duration-300"
                  variant="default"
                >
                  Ver Coleção
                </Button>
                
                {/* 
                  EXEMPLO DE ELEMENTOS ADICIONAIS QUE VOCÊ PODE DESCOMENTAR:
                */}
                {/* 
                <div className="flex justify-between items-center mt-3 pt-3 border-t border-border">
                  <span className="text-lg font-bold text-primary">{produto.preco}</span>
                  <span className="text-sm text-muted-foreground">{produto.estoque} em estoque</span>
                </div>
                */}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 
          SEÇÃO DE CALL-TO-ACTION
          Incentiva o visitante a conhecer mais produtos ou visitar a loja
        */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-card to-muted/50 rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Quer conhecer nossa coleção completa?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Visite nossa loja física e descubra centenas de produtos únicos, 
              ou entre em contato para atendimento personalizado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-xl hover:shadow-primary/30"
              >
                Visitar Loja Física
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Catálogo Completo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;