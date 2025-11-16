import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { IProduto } from "@/types/interfaces";
import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  produto: IProduto;
}

export function ProductCard({ produto }: ProductCardProps) {
  return (
    <Link href={`/produto/${produto.id}`}>
      <Card className="group overflow-hidden transition-all hover:shadow-lg hover:border-primary/50">
        <CardHeader className="p-0">
          <div className="relative aspect-square w-full overflow-hidden">
            <Image
              src={produto.imagem}
              alt={produto.nome}
              fill
              className="object-cover transition-transform group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="text-xl mb-2 line-clamp-1">{produto.nome}</CardTitle>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {produto.descricao}
          </p>
          <p className="text-lg font-semibold text-primary">
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(produto.preco)}
          </p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <span className="text-sm text-muted-foreground">
            Categoria: {produto.categoria}
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}