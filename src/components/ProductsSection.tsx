import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import charutosImage from "@/assets/charutos.jpg";
import cachimbosImage from "@/assets/cachimbos.jpg";
import acessoriosImage from "@/assets/acessorios.jpg";
import canivetes from "@/assets/canivetes.jpg";
import eubone from "@/assets/eubone.jpg";
import cuias from "@/assets/cuias.jpg";
import chapéus from "@/assets/chapéus.jpg";
// Em src/main.jsx (ou main.tsx)

/**
 * SEÇÃO DE PRODUTOS - Carrossel dos principais produtos
 * 
 * Esta seção apresenta as principais categorias de produtos da tabacaria em formato de carrossel.
 * Ela serve para:
 * - Mostrar a variedade de produtos oferecidos
 * - Criar interesse nos produtos específicos
 * - Guiar o cliente para conhecer mais sobre cada categoria
 * 
 * ESTRUTURA ATUAL:
 * - Carrossel responsivo com 3 categorias principais
 * - Slides com imagem, título, descrição e botão
 * - Design elegante com transições suaves
 */

// Array com os dados dos produtos
const produtos = [
  { 
    id: 1,
    titulo: "Canivetes",
    descricao: "Diversos tipos de Canivetes, Tradicionais aos Táticos",
    imagem: canivetes,
    destaque: "Mais de 30 tipos",
  },
  {
    id: 2,
    titulo: "Erva-Mate Tereré e Chimarrão",
    descricao: "Ervas Tradicionais para quem é Raiz de verdade! Inúmeras Bombas, Cuias e Copos para você aproveitar a tradição do campo!",
    imagem: cuias,
    destaque: "Os melhores Mates",
  },
  {
    id: 3,
    titulo: "Vestúario completo para quem é Raiz mesmo",
    descricao:" Chapéus, botinas e os mais bonitos cintos de couro! E muito mais, venha conferir!",
    imagem: chapéus,
    destaque: "Inúmeros itens! ",
  },
    { 
    id: 4,
    titulo: "Diversos outros produtos",
    descricao: "Venha Conferir todos",
    imagem: eubone,
    destaque: "Bonés",
  }

   
];

const overlayExtraIds = [ 2, 4]; // IDs dos produtos que terão overlay extra

const ProductsSection = () => {
  return (
    <section id="produtos" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* CABEÇALHO DA SEÇÃO */}
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

        {/* CARROSSEL DE IMAGENS CENTRAL */}
        <div className="relative max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
          
       {produtos.map((produto) => (
  <CarouselItem key={produto.id}>
    <div className="flex justify-center">
      <div className="relative overflow-hidden rounded-2xl shadow-2xl">
        <img
          src={produto.imagem}
          alt={produto.titulo}
          className="w-full h-[500px] object-cover transition-transform duration-300"
        />
        
        {/* Overlay padrão para todos */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        
        {/* Overlay extra para IDs definidos */}
        {overlayExtraIds.includes(produto.id) && (
          <div className="absolute inset-0 bg-black/55" />
        )}
        
        {/* INFORMAÇÕES DA IMAGEM */}
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <h3 className="text-2xl font-bold mb-2">{produto.titulo}</h3>
          <p className="text-lg opacity-90 mb-4">{produto.descricao}</p>
          <Button className="bg-primary hover:bg-primary/90">
            Ver Coleção
          </Button>
        </div>

        {/* BADGE DE DESTAQUE */}
        <div className="absolute top-6 right-6">
          <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-medium shadow-lg">
            {produto.destaque}
          </span>
        </div>
      </div>
    </div>
  </CarouselItem>
))}
  

             
            </CarouselContent>
            
            {/* CONTROLES DO CARROSSEL */}
            <CarouselPrevious className="absolute -left-16 top-1/2 -translate-y-1/2 bg-yellow-500 text-white hover:bg-[#a07e28] hover:text-white shadow-lg" />
            <CarouselNext className="absolute -right-16 top-1/2 -translate-y-1/2 bg-yellow-500 text-white hover:bg-[#a07e28] hover:text-white shadow-lg" /></Carousel>
        </div>

        {/* SEÇÃO DE CALL-TO-ACTION */}
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
                    <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-xl hover:shadow-primary/30">
          <a href="#como-chegar">
            Visitar Loja Física
          </a>
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