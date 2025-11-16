/**
 * COMPONENTE FOOTER - Rodapé do site
 * 
 * O footer é a parte final do site e contém informações importantes como:
 * - Links de navegação secundários
 * - Informações de contato resumidas
 * - Redes sociais
 * - Informações legais (copyright, política de privacidade)
 * - Newsletter (se aplicável)
 * 
 * POSSÍVEIS MELHORIAS QUE VOCÊ PODE ADICIONAR:
 * - Newsletter signup
 * - Links para políticas de privacidade e termos de uso
 * - Certificações e selos de qualidade
 * - Mapa do site
 * - Avaliações/reviews de clientes
 * - Links para parceiros
 * - Múltiplas lojas (se aplicável)
 * - Formas de pagamento aceitas
 */

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-secondary to-accent text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* 
            COLUNA 1 - SOBRE A TABACARIA
            Breve descrição e missão da empresa
          */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary-glow">
              Tabacaria Raiz
            </h3>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed">
              Venha conferir nosso estabelecimento 
               e nossos produtos que são RAIZ de verdade!
            </p>
            <div className="text-sm text-secondary-foreground/60">
              <p>Tradição Familiar</p>
              <p>Excelência</p>
            </div>
          </div>

          {/* 
            COLUNA 2 - LINKS RÁPIDOS
            Navegação secundária para páginas importantes
          */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary-glow">
              Links Rápidos
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="#inicio" 
                  className="text-secondary-foreground/80 hover:text-primary-glow transition-colors duration-300"
                >
                  Início
                </a>
              </li>
              <li>
                <a 
                  href="#produtos" 
                  className="text-secondary-foreground/80 hover:text-primary-glow transition-colors duration-300"
                >
                  Nossos Produtos
                </a>
              </li>
              <li>
                <a 
                  href="#sobre" 
                  className="text-secondary-foreground/80 hover:text-primary-glow transition-colors duration-300"
                >
                  Nossa História
                </a>
              </li>
              <li>
                <a 
                  href="#contato" 
                  className="text-secondary-foreground/80 hover:text-primary-glow transition-colors duration-300"
                >
                  Contato
                </a>
              </li>
              {/* 
                VOCÊ PODE ADICIONAR MAIS LINKS:
                - Catálogo Online
                - Blog/Artigos
                - Eventos
                - Política de Privacidade
                - Termos de Uso
              */}
            </ul>
          </div>

          {/* Coluna 'Categorias' removida conforme solicitado */}

          {/* 
            COLUNA 4 - CONTATO E REDES SOCIAIS
            Informações de contato principais e redes sociais
          */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary-glow">
              Contato
            </h4>
            
            {/* 
              INFORMAÇÕES DE CONTATO RESUMIDAS
            */}
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <span className="text-primary-glow">📍</span>
                <div>
                  <p className="text-secondary-foreground/80">
                    Rua Amin Fares Debian, 170<br />
                    Centro Betim - MG
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-primary-glow">📞</span>
                <a 
                  href="tel:+5531982081947"
                  className="text-secondary-foreground/80 hover:text-primary-glow transition-colors duration-300"
                >
                  (31) 98208-1947
                </a>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-primary-glow">📧</span>
                <a 
                  href="mailto:contato@tabacariaraiz.com.br"
                  className="text-secondary-foreground/80 hover:text-primary-glow transition-colors duration-300"
                >
                  tabacariabetinho00@gmail.com
                </a>
              </div>
            </div>

            {/* 
              REDES SOCIAIS
              Ícones/links para as redes sociais da tabacaria
            */}
            <div>
              <h5 className="text-sm font-medium text-primary-glow mb-2">
                Siga-nos
              </h5>
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="text-secondary-foreground/60 hover:text-primary-glow transition-colors duration-300 text-lg"
                  aria-label="Facebook"
                >
                  📘
                </a>
                <a
                href="https://www.instagram.com/tabacariabetinho?utm_source=qr&igsh=MWhteGllcDBpNml5OA=="
                  title="Instagram - Abrir em nova aba"
                  className="text-secondary-foreground/60 hover:text-primary-glow transition-colors duration-300 text-lg"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📷
                </a>
                <a 
                  href="#" 
                  className="text-secondary-foreground/60 hover:text-primary-glow transition-colors duration-300 text-lg"
                  aria-label="YouTube"
                >
                  🎥
                </a>
                <a 
                  href="https://wa.me/5511987654321" 
                  className="text-secondary-foreground/60 hover:text-primary-glow transition-colors duration-300 text-lg"
                  aria-label="WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💬
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 
          LINHA DIVISÓRIA
        */}
        <div className="border-t border-secondary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* 
              COPYRIGHT
              Informações legais básicas
            */}
            <div className="text-sm text-secondary-foreground/60 text-center md:text-left">
              <p>
                © 2024 Tabacaria Raiz. Todos os direitos reservados.
              </p>
              <p className="text-xs mt-1">
                CNPJ: 12.345.678/0001-99
              </p>
            </div>

            {/* 
              LINKS LEGAIS
              Políticas e termos (você pode criar páginas para estes)
            */}
            <div className="flex space-x-4 text-sm">
              <a 
                href="#" 
                className="text-secondary-foreground/60 hover:text-primary-glow transition-colors duration-300"
              >
                Política de Privacidade
              </a>
              <span className="text-secondary-foreground/40">•</span>
              <a 
                href="#" 
                className="text-secondary-foreground/60 hover:text-primary-glow transition-colors duration-300"
              >
                Termos de Uso
              </a>
            </div>
          </div>

          {/* 
            NOTA SOBRE IDADE/RESPONSABILIDADE
            Importante para produtos de tabaco
          */}
          <div className="mt-6 p-4 bg-secondary-foreground/10 rounded-lg">
            <p className="text-xs text-secondary-foreground/70 text-center leading-relaxed">
              ⚠️ <strong>Aviso:</strong> O consumo de produtos de tabaco é prejudicial à saúde. 
              Venda proibida para menores de 18 anos. Consuma com responsabilidade.
            </p>
          </div>
        </div>
      </div>

      {/* 
        VOCÊ PODE ADICIONAR AQUI:
        - Newsletter signup
        - Certificações de qualidade
        - Selos de segurança
        - Formas de pagamento aceitas
        - Parceiros/fornecedores
      */}
    </footer>
  );
};

export default Footer;