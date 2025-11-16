import { Button } from "@/components/ui/button";
import { IProduto } from "@/types/interfaces";
import { useRouter } from "next/router";
import Image from "next/image";

// Usando os mesmos dados de exemplo
const produtos: IProduto[] = [
  {
    id: 1,
    nome: "Charuto Cohiba Behike",
    categoria: "Charutos Premium",
    preco: 450.00,
    imagem: "/produtos/charuto-cohiba.jpg",
    descricao: "Charuto cubano premium da linha Behike, conhecido por sua complexidade e sabor excepcional."
  },
  // ... (outros produtos)
];

export default function ProdutoDetalhe() {
  const router = useRouter();
  const { id } = router.query;

  // Encontrar o produto pelo ID
  const produto = produtos.find(p => p.id === Number(id));

  if (!produto) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-xl text-muted-foreground">Produto não encontrado</p>
      </div>
    );
  }

  const handleWhatsAppClick = () => {
    const message = `Olá! Tenho interesse no produto: ${produto.nome}`;
    const whatsappUrl = `https://wa.me/5531982081947?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Imagem do Produto */}
          <div className="relative aspect-square w-full overflow-hidden rounded-xl">
            <Image
              src={produto.imagem}
              alt={produto.nome}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Informações do Produto */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                {produto.nome}
              </h1>
              <p className="text-lg text-muted-foreground">
                {produto.categoria}
              </p>
            </div>

            <p className="text-3xl font-bold text-primary">
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(produto.preco)}
            </p>

            <div className="prose prose-stone dark:prose-invert">
              <p className="text-lg">{produto.descricao}</p>
            </div>

            <Button 
              size="lg"
              className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-6"
              onClick={handleWhatsAppClick}
            >
              💬 Comprar pelo WhatsApp
            </Button>

            <p className="text-sm text-muted-foreground text-center">
              Clique para enviar uma mensagem e fazer seu pedido
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}