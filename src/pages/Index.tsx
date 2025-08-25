import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

/**
 * PÁGINA PRINCIPAL - INDEX
 * 
 * Esta é a página principal do site da Tabacaria Raiz.
 * Ela combina todos os componentes principais em uma experiência completa:
 * 
 * ESTRUTURA DA PÁGINA:
 * 1. Header - Menu de navegação fixo no topo
 * 2. HeroSection - Seção principal com imagem impactante
 * 3. ProductsSection - Showcase dos produtos principais
 * 4. AboutSection - História e tradição da tabacaria
 * 5. ContactSection - Informações de contato e formulário
 * 6. Footer - Rodapé com informações adicionais
 * 
 * POSSÍVEIS MELHORIAS QUE VOCÊ PODE ADICIONAR:
 * - Seção de depoimentos de clientes
 * - Galeria de fotos da loja
 * - Blog/artigos sobre tabaco
 * - Seção de eventos/degustações
 * - FAQ (perguntas frequentes)
 * - Newsletter signup
 * - Chat online
 * - Seção de parceiros/marcas
 * - Certificações de qualidade
 */

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* 
        CABEÇALHO/NAVEGAÇÃO
        Componente fixo que permanece visível durante o scroll
      */}
      <Header />

      {/* 
        CONTEÚDO PRINCIPAL
        Todas as seções principais do site organizadas sequencialmente
      */}
      <main>
        {/* 
          SEÇÃO HERO - Primeira impressão
          Tela cheia com imagem de fundo e call-to-action principal
        */}
        <HeroSection />

        {/* 
          SEÇÃO DE PRODUTOS - Showcase das categorias
          Apresenta os principais tipos de produtos oferecidos
        */}
        <ProductsSection />

        {/* 
          SEÇÃO SOBRE - História e credibilidade
          Conta a história da tabacaria e estabelece confiança
        */}
        <AboutSection />

        {/* 
          SEÇÃO DE CONTATO - Formulário e informações
          Permite que visitantes entrem em contato facilmente
        */}
        <ContactSection />
      </main>

      {/* 
        RODAPÉ
        Informações complementares, links secundários e dados legais
      */}
      <Footer />
    </div>
  );
};

export default Index;
