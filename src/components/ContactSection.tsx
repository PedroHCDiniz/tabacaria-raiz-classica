import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

/**
 * SEÇÃO DE CONTATO - Informações e formulário de contato
 * 
 * Esta seção permite que visitantes entrem em contato com a tabacaria.
 * Ela inclui:
 * - Informações de contato (telefone, endereço, horários)
 * - Formulário de contato
 * - Links para redes sociais
 * - Mapa da localização (pode ser adicionado)
 * 
 * POSSÍVEIS MELHORIAS QUE VOCÊ PODE ADICIONAR:
 * - Integração com Google Maps
 * - Integração com WhatsApp API
 * - Formulário funcional (backend)
 * - Chat ao vivo
 * - Agendamento de visitas
 * - Newsletter signup
 * - Redes sociais funcionais
 * - Horários especiais/feriados
 * - Várias lojas (se aplicável)
 */

const ContactSection = () => {
  {/* 
    FUNÇÃO DE ENVIO DO FORMULÁRIO
    Atualmente só mostra um alerta, mas você pode:
    - Conectar com um backend
    - Usar serviços como Formspree, Netlify Forms
    - Integrar com CRM
    - Enviar por email
  */}
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria o envio real do formulário
    alert("Mensagem enviada! Entraremos em contato em breve.");
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* 
          CABEÇALHO DA SEÇÃO
        */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Entre em{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Contato
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos aqui para ajudar você a encontrar o produto perfeito
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 
            COLUNA DAS INFORMAÇÕES DE CONTATO
            Dados da loja, horários, localização
          */}
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-card to-muted/30 border-border shadow-soft">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center">
                  📍 Nossa Localização
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* 
                  ENDEREÇO
                  Personalize com o endereço real da tabacaria
                */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Endereço</h4>
                  <p className="text-muted-foreground">
                    Rua Amin Fares Debian <br />
                    Centro <br />
                    Betim - MG <br />
                    CEP: 32600-014
                  </p>
                </div>

                {/* 
                  HORÁRIOS DE FUNCIONAMENTO
                */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Horário de Funcionamento</h4>
                  <div className="text-muted-foreground space-y-1">
                    <p>Segunda a Sexta: 9h às 19h</p>
                    <p>Sábados: 9h às 19h</p>
                    <p>Domingos: Fechado</p>
                  </div>
                </div>

                {/* 
                  VOCÊ PODE ADICIONAR:
                  - Feriados especiais
                  - Horários de verão/inverno
                  - Estacionamento
                  - Transporte público
                */}
              </CardContent>
            </Card>

            {/* 
              CARD DE CONTATO DIRETO
            */}
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center">
                  📞 Contato Direto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* 
                  TELEFONES
                */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Telefones</h4>
                  <div className="space-y-2">
                    
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">WhatsApp:</span>
                      <a 
                        href="https://wa.me/5511987654321" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-glow font-medium"
                      >
                        (11) 98765-4321
                      </a>
                    </div>
                  </div>
                </div>

                {/* 
                  EMAIL
                */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Email</h4>
                  <a 
                    href="mailto:contato@tabacariaraiz.com.br"
                    className="text-primary hover:text-primary-glow"
                  >
                    contato@tabacariaraiz.com.br
                  </a>
                </div>

                {/* 
                  BOTÃO WHATSAPP DESTACADO
                */}
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => window.open('https://wa.me/5511987654321', '_blank')}
                >
                  💬 Conversar no WhatsApp
                </Button>
              </CardContent>
            </Card>

            {/* 
              REDES SOCIAIS
              Você pode adicionar links reais para as redes sociais
            */}
            <Card className="bg-gradient-to-br from-secondary/10 to-primary/10 border-secondary/20">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">
                  Siga-nos nas Redes Sociais
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    📘 Facebook
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    📷 Instagram
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    🎥 YouTube
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 
            COLUNA DO FORMULÁRIO DE CONTATO
          */}
          <div>
            <Card className="bg-gradient-to-br from-card to-background border-border shadow-soft">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  Envie uma Mensagem
                </CardTitle>
                <p className="text-muted-foreground">
                  Tem alguma dúvida? Quer saber sobre um produto específico? 
                  Mande sua mensagem que respondemos rapidamente!
                </p>
              </CardHeader>
              <CardContent>
                {/* 
                  FORMULÁRIO DE CONTATO
                  Atualmente só funciona com JavaScript local
                  Para funcionar de verdade, você precisa:
                  - Backend próprio
                  - Serviços como Formspree
                  - Integração com email
                */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* 
                    LINHA COM NOME E EMAIL
                  */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nome" className="block text-sm font-medium text-foreground mb-2">
                        Nome *
                      </label>
                      <Input
                        id="nome"
                        type="text"
                        placeholder="Seu nome completo"
                        required
                        className="border-border focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        required
                        className="border-border focus:ring-primary"
                      />
                    </div>
                  </div>

                  {/* 
                    TELEFONE
                  */}
                  <div>
                    <label htmlFor="telefone" className="block text-sm font-medium text-foreground mb-2">
                      Telefone
                    </label>
                    <Input
                      id="telefone"
                      type="tel"
                      placeholder="(11) 99999-9999"
                      className="border-border focus:ring-primary"
                    />
                  </div>

                  {/* 
                    ASSUNTO
                    Você pode transformar isso em um select com opções predefinidas
                  */}
                  <div>
                    <label htmlFor="assunto" className="block text-sm font-medium text-foreground mb-2">
                      Assunto
                    </label>
                    <Input
                      id="assunto"
                      type="text"
                      placeholder="Ex: Dúvida sobre charutos cubanos"
                      className="border-border focus:ring-primary"
                    />
                  </div>

                  {/* 
                    MENSAGEM
                  */}
                  <div>
                    <label htmlFor="mensagem" className="block text-sm font-medium text-foreground mb-2">
                      Mensagem *
                    </label>
                    <Textarea
                      id="mensagem"
                      placeholder="Conte-nos como podemos ajudar..."
                      rows={5}
                      required
                      className="border-border focus:ring-primary resize-none"
                    />
                  </div>

                  {/* 
                    BOTÃO DE ENVIO
                  */}
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/25 text-white font-semibold py-3"
                  >
                    Enviar Mensagem
                  </Button>

                  {/* 
                    NOTA SOBRE PRIVACIDADE
                  */}
                  <p className="text-xs text-muted-foreground text-center">
                    Seus dados serão utilizados apenas para responder sua mensagem 
                    e não serão compartilhados com terceiros.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        
        
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-muted/30 to-card border-border">
            <CardContent className="p-8">
  <h3 className="text-2xl font-bold text-foreground mb-4">
    📍 Como Chegar
  </h3>
  {/* Seção para scroll */}
  <section id="como-chegar">
    <p className="text-muted-foreground mb-6">
      Estamos localizados no centro da cidade, dentro do Mercado Central de Betim (CEABE)
    </p>
    <div className="w-full h-[400px] rounded-xl overflow-hidden my-8">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.9523348426637!2d-44.205452918742!3d-19.96850670602406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6c32b3dad95df%3A0xea387e0940f128f!2sTabacaria%20Betinho%20e%20Filhos!5e0!3m2!1spt-BR!2sbr!4v1756489866222!5m2!1spt-BR!2sbr"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </section>
</CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;