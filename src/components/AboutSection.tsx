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
    numero: "+25",
    titulo: "Anos de Tradição",
    descricao: "Os melhores produtos"
  },
  {
    numero: "Variedade",
    titulo: "A maior variedade da região",
  },
  {
    numero: "Clientes satisfeitos",
    descricao: "Gerações de famílias que confiam em nós"
  },
  {
    numero: "Aqui é raiz de verdade",
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
            A mais de 25 anos aberta !
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
                A história da Tabacaria 
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
               <p>

O consumo de tabaco tem origem nas culturas indígenas das Américas, muito antes da chegada dos europeus. Os povos nativos já utilizavam a planta em rituais, celebrações e até de forma medicinal. No século XVI, o tabaco foi levado para a Europa, tornando-se um produto valioso e difundido em todo o mundo.

No Brasil, o cultivo do tabaco e sua apreciação se consolidaram desde o período colonial. Com o tempo, novas formas de consumo surgiram, como charutos, cachimbos, cigarros artesanais, narguilés e vaporizadores.

É dentro dessa tradição que nossa tabacaria se encontra. Aberta há mais de duas décadas, ela passou recentemente por uma mudança de direção. Os antigos proprietários estavam prestes a encerrar suas atividades, mas acreditamos no potencial e resolvemos assumir a casa, trazendo uma nova energia e revitalizando o espaço.

Hoje, nossa missão é dar continuidade à história da tabacaria, unindo tradição e modernidade, mantendo o respeito pelo passado e ao mesmo tempo oferecendo novidades para todos que apreciam a cultura do tabaco.
                </p>
               
                <p>
                  Hoje, sob nossa direção, continuamos 
                  inovando e mantendo valores que nos trouxeram até aqui: 
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
                <li className="flex items                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 \\-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Qualidade excelente no atendimento
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Produtos da melhor qualidade
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
             Destaques
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
                  "O tabaco não é apenas um produto, é uma experiência que conecta 
                  tradição, arte e momentos especiais."
                </p>
                <footer className="text-sm text-muted-foreground">
                  
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