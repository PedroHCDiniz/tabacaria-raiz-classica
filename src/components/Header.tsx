import { Button } from "@/components/ui/button";

/**
 * COMPONENTE HEADER - Cabeçalho principal do site
 * 
 * Este componente representa o menu de navegação superior do site da tabacaria.
 * Ele inclui:
 * - Logo/nome da tabacaria 
 * - Menu de navegação com links para diferentes seções
 * - Botão de contato destacado
 * 
 * POSSÍVEIS MELHORIAS QUE VOCÊ PODE ADICIONAR:
 * - Menu hamburguer para mobile
 * - Dropdown com submenu de produtos
 * - Carrinho de compras (se implementar e-commerce)
 * - Sistema de login/cadastro
 * - Busca de produtos
 * - Seletor de idiomas
 */
const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* 
            LOGO/MARCA - Lado esquerdo
            Você pode substituir por:
            - Logo em imagem
            - Fonte personalizada
            - Ícone + texto
          */}
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-primary">
              Tabacaria Raiz
            </h1>
            <span className="text-sm text-muted-foreground">Est. 1950</span>
          </div>

          {/* 
            MENU DE NAVEGAÇÃO - Centro
            Adicione mais links conforme necessário:
            - Produtos por categoria
            - Blog/artigos sobre tabaco
            - Eventos/degustações
            - Galeria
          */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#inicio" 
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Início
            </a>
            <a 
              href="#produtos" 
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Produtos
            </a>
            <a 
              href="#sobre" 
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Nossa História
            </a>
            <a 
              href="#contato" 
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Contato
            </a>
          </div>

          {/* 
            BOTÃO DE AÇÃO - Lado direito
            Você pode personalizar para:
            - "Visite nossa loja"
            - "Catálogo online"
            - "Whatsapp"
            - Carrinho de compras
          */}
          <Button 
            variant="default"
            className="hidden md:inline-flex bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
          >
            Visite Nossa Loja
          </Button>

          {/* 
            MENU MOBILE - Você pode implementar um menu hamburguer aqui
            Sugestão: usar o componente Sheet do shadcn/ui
          */}
          <div className="md:hidden">
            <Button variant="outline" size="sm">
              Menu
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;