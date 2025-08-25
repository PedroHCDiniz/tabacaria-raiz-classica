import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-tabacaria.jpg";
import fotoTabacaria from "@/assets/fotoTabacaria.jpg";

/**
 * SEÇÃO HERO - Primeira impressão do site
 * 
 * Esta é a seção principal que aparece logo no topo da página.
 * Ela serve para:
 * - Criar uma primeira impressão impactante
 * - Comunicar rapidamente o que é a tabacaria
 * - Incentivar ação do visitante (conhecer produtos, visitar loja, etc.)
 * 
 * ELEMENTOS INCLUÍDOS:
 * - Imagem de fundo com overlay escuro para contraste
 * - Título principal e subtítulo
 * - Texto descritivo
 * - Botões de call-to-action (CTA)
 * 
 * POSSÍVEIS MELHORIAS QUE VOCÊ PODE ADICIONAR:
 * - Slider com múltiplas imagens
 * - Vídeo de fundo
 * - Animações de entrada (framer-motion)
 * - Contador de anos de tradição
 * - Depoimentos em destaque
 * - Carrossel de produtos em destaque
 */
const HeroSection = () => {
  return (
    <section 
      id="inicio"
      className="relative h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* 
        IMAGEM DE FUNDO
        A imagem usa object-cover para manter proporção
        e absolute para ficar atrás do conteúdo
      */}
    <div 
  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${fotoTabacaria})`,
  }}
/>
      
      {/* 
        OVERLAY ESCURO
        Cria uma camada escura sobre a imagem para melhor legibilidade do texto
        Você pode ajustar a opacidade mudando bg-black/60 (60% de opacidade)
      */}
<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/90" />
      {/* 
        CONTEÚDO PRINCIPAL
        Usa z-10 para ficar sobre a imagem e overlay
        Container responsivo com padding adequado
      */}
      <div className="relative z-10 container mx-auto px-4 max-w-4xl">
        {/* 
          TÍTULO PRINCIPAL
          Usa classes responsivas (text-4xl md:text-6xl) para adaptar ao tamanho da tela
          Você pode personalizar:
          - Tamanho da fonte
          - Cor (atualmente text-white)
          - Adicionar animações
        */}
       <h1 className="soft-shadow text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
  Tabacaria Betinho e Filhos
</h1>

        {/* 
          SUBTÍTULO
          Reforça a mensagem principal
        */}
        <h2 className="soft-shadow text-xl md:text-2xl italic text-white mb-8 font-light">
          Tabacaria no Mercado Central de Betim (CEABE) 
        </h2>

        {/* 
          TEXTO DESCRITIVO
          Deve ser conciso mas informativo
          Você pode adicionar:
          - Mais detalhes sobre a história
          - Destaques dos produtos
          - Diferenciais da loja
        */}
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Vários produtos para resgatar a tradição e mantê-la viva!        </p>

        {/* 
          BOTÕES DE AÇÃO
          Dois botões principais para diferentes objetivos
          Você pode personalizar:
          - Textos dos botões
          - Links/ações
          - Adicionar mais botões
          - Mudar estilos
        */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
  href="#produtos"
  className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-xl hover:shadow-primary/30 text-white font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 rounded-lg inline-block"
>
  Conheça Nossos Produtos
</a>
          

        </div>

        {/* 
          INFORMAÇÕES ADICIONAIS
          Pequenos detalhes que agregam credibilidade
          Você pode adicionar:
          - Horário de funcionamento
          - Telefone/WhatsApp
          - Endereço
          - Redes sociais
        */}
      <p style={{ fontSize: "22px" }} className="text-gray-400">
  📍 R. Amin Fares Debian, º 170 - Centro, Betim - MG, 32671-072 • 📞 (31) 98208-1947  • 🕒 Seg-Sáb 9:30h-19h
</p>
<a
  href="https://www.instagram.com/tabacariabetinho?utm_source=qr&igsh=MWhteGllcDBpNml5OA=="
  target="_blank"
  rel="noopener noreferrer"
  className="text-2xl inline-block bg-white-600 hover:bg-gradient-to-r hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 hover:text-transparent hover:bg-clip-text text-white font-semibold px-10 py-3 rounded transition-all duration-200 mb-6"
>
  Visite nosso perfil no instagram
</a>
        </div>
      

      {/* 
        INDICADOR DE SCROLL
        Seta animada que indica que há mais conteúdo abaixo
        Você pode personalizar ou remover se não quiser
      */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;