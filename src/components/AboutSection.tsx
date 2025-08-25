import { Card, CardContent } from "@/components/ui/card";

/**
 * SEÇÃO SOBRE - História e tradição da tabacaria
 * 
 * Esta seção conta a história da tabacaria e estabelece credibilidade.
 * Ela serve para:
 * - Criar conexão emocional com os clientes
 * - Estabelecer autoridade e tradição no ramo
 * - Diferenciar dos concorrentes
 * - Humanizar a marca
 * 
 * ELEMENTOS INCLUÍDOS:
 * - História da fundação
 * - Valores e diferenciais
 * - Estatísticas impressionantes
 * - Layout em duas colunas (história + destaques)
 * 
 * POSSÍVEIS MELHORIAS QUE VOCÊ PODE ADICIONAR:
 * - Fotos históricas da loja
 * - Timeline interativa da história
 * - Vídeo sobre a história
 * - Depoimentos de clientes antigos
 * - Fotos da equipe/proprietários
 * - Certificações e premiações
 * - Galeria de momentos marcantes
 * - Mapa mostrando origem dos produtos
 */

// Dados dos destaques - você pode personalizar esses números
const destaques = [
  {
    numero: "75+",
    titulo: "Anos de Tradição",
    descricao: "Os melhores produtos"
  },
  {
    numero: "500+",
    titulo: "Tipos de Charutos",
    descricao: "A maior variedade da região"
  },
  {
    numero: "10.000+",
    titulo: "Clientes Satisfeitos",
    descricao: "Gerações de famílias que confiam em nós"
  },
  {
    numero: "15",
    titulo: "Países de Origem",
    descricao: "Produtos importados dos melhores produtores"
  }
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* 
          CABEÇALHO DA SEÇÃO
        */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossa{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
              História
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Três gerações dedicadas à arte do tabaco fino
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 
            COLUNA DA HISTÓRIA
            Texto principal contando a história da tabacaria
          */}
          <div className="space-y-6">
            {/* 
              HISTÓRIA PRINCIPAL
              Você pode personalizar esta história conforme a realidade da tabacaria
            */}
            <div className="bg-gradient-to-br from-card to-card/80 p-8 rounded-2xl border border-border shadow-soft">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Uma Tradição Familiar
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Fundada em 1950 por <strong className="text-foreground">Don Giuseppe Ramirez</strong>, 
                  nossa tabacaria nasceu da paixão por oferecer aos brasileiros a mesma qualidade 
                  e tradição encontradas nas melhores casas europeias.
                </p>
                <p>
                  Localizada no coração do centro histórico, nossa loja preserva o charme 
                  e a elegância de uma época em que fumar era uma arte refinada. Cada 
                  produto é cuidadosamente selecionado por nossa equipe especializada.
                </p>
                <p>
                  Hoje, sob a direção da terceira geração da família, continuamos 
                  inovando enquanto mantemos vivos os valores que nos trouxeram até aqui: 
                  <strong className="text-primary"> qualidade, tradição e atendimento excepcional</strong>.
                </p>
              </div>
            </div>

            {/* 
              VALORES E DIFERENCIAIS
              O que torna esta tabacaria especial
            */}
            <div className="bg-gradient-to-br from-secondary/10 to-accent/10 p-6 rounded-xl border border-border">
              <h4 className="text-lg font-semibold text-foreground mb-3">
                Nossos Diferenciais
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Humidores climatizados para preservação perfeita
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Importação direta dos melhores produtores mundiais
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Consultoria especializada para iniciantes e conhecedores
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Eventos e degustações exclusivas
                </li>
              </ul>
            </div>
          </div>

          {/* 
            COLUNA DOS DESTAQUES
            Estatísticas e números impressionantes
          */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              Em Números
            </h3>
            
            {/* 
              GRID DE ESTATÍSTICAS
              Cards com números impressionantes
            */}
            <div className="grid grid-cols-2 gap-4">
              {destaques.map((destaque, index) => (
                <Card 
                  key={index}
                  className="text-center p-6 bg-gradient-to-br from-card to-muted/30 border-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-0">
                    {/* 
                      NÚMERO PRINCIPAL
                      Grande e destacado
                    */}
                    <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2">
                      {destaque.numero}
                    </div>
                    
                    {/* 
                      TÍTULO DO DESTAQUE
                    */}
                    <h4 className="font-semibold text-foreground mb-1 text-sm md:text-base">
                      {destaque.titulo}
                    </h4>
                    
                    {/* 
                      DESCRIÇÃO
                    */}
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {destaque.descricao}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* 
              CITAÇÃO INSPIRACIONAL
              Frase que resume a filosofia da empresa
            */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-xl border border-primary/20 mt-8">
              <blockquote className="text-center">
                <p className="text-lg italic text-foreground mb-3">
                  "O tabaco fino não é apenas um produto, é uma experiência que conecta 
                  tradição, arte e momentos especiais."
                </p>
                <footer className="text-sm text-muted-foreground">
                  — Giuseppe Ramirez III, Proprietário
                </footer>
              </blockquote>
            </div>

            {/* 
              VOCÊ PODE ADICIONAR AQUI:
              - Certificações da loja
              - Premiações recebidas
              - Parcerias importantes
              - Links para redes sociais
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;