# ERROS IDENTIFICADOS E SOLUÇÕES

## STATUS ATUAL DO PROJETO
- **Data**: 10 de Novembro de 2025
- **Estado**: Parado para análise de erros
- **Porta do servidor**: 8080
- **URL local**: http://localhost:8080/

---

## PROBLEMAS IDENTIFICADOS

### 1. ❌ FALTA DA ROTA `/produtos` NO APP.TSX
**Arquivo afetado**: `src/App.tsx`

**Problema**: 
- A página de produtos (`src/pages/produtos.tsx`) existe mas não está registrada no sistema de rotas
- Quando o usuário tenta acessar `http://localhost:8080/produtos`, recebe erro 404

**Solução necessária**:
Adicionar no `src/App.tsx`:

```tsx
// 1. Adicionar esta importação no topo:
import ProdutosPage from "./pages/produtos";

// 2. Adicionar esta rota antes da rota catch-all "*":
<Route path="/produtos" element={<ProdutosPage />} />
```

**Código completo esperado**:
```tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProdutosPage from "./pages/produtos"; // ADICIONAR ESTA LINHA

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/produtos" element={<ProdutosPage />} /> {/* ADICIONAR ESTA LINHA */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
```

---

### 2. ⚠️ VERSÕES INCOMPATÍVEIS NO PACKAGE.JSON
**Arquivo afetado**: `package.json`

**Problema**:
- React está na versão `^19.2.0` (que não existe - React está na versão 18)
- `next-themes@^0.3.0` não suporta React 19
- Isso causa erro `ERESOLVE` ao executar `npm install`
- Mensagem de erro: "Could not resolve dependency: peer react@^16.8 || ^17 || ^18"

**Solução necessária**:
Corrigir as versões no `package.json`:

```json
// TROCAR:
"next": "^16.0.1",
"next-themes": "^0.3.0",
"react": "^19.2.0",
"react-day-picker": "^8.10.1",
"react-dom": "^19.2.0",

// POR:
"next": "13.4.12",
"next-themes": "^0.2.1",
"react": "^18.2.0",
"react-day-picker": "^8.7.1",
"react-dom": "^18.2.0",
```

**Após fazer as alterações, executar**:
```bash
npm install --legacy-peer-deps
```

---

### 3. ✅ CONFIGURAÇÃO DE PORTA (JÁ CORRIGIDA)
**Arquivo**: `vite.config.ts`

**Status**: ✅ Correto
- Porta: 8080
- Host: `::`
- Não alterar esta configuração

---

## ARQUIVOS QUE FORAM CRIADOS/MODIFICADOS

### ✅ SVG Placeholders Criados
Localização: `public/produtos/`

**Rapés** (18 arquivos):
- rape-imburana.svg
- rape-cravo.svg
- rape-real.svg
- rape-7ervas.svg
- rape-girassol.svg
- rape-hortela.svg
- rape-mentolado.svg
- rape-super-vick.svg
- rape-morango.svg
- rape-cafe.svg
- rape-super-mentolado.svg
- rape-cacitral-branco.svg
- rape-cacitral.svg
- rape-eucalipto.svg
- rape-chocolate.svg
- rape-cravo-canela.svg
- rape-canela.svg
- rape-natural.svg

**Fumos** (6 arquivos):
- fumo-desfiado-1kg.svg
- fumo-desfiado-500g.svg
- fumo-desfiado-250g.svg
- fumo-corda-metro.svg
- fumo-corda-meio-metro.svg
- fumo-corda-25cm.svg

**Scripts criados**:
- `scripts/create-placeholders.js` - Gera placeholders para rapés
- `scripts/create-fumo-placeholders.js` - Gera placeholders para fumos

### ✅ Página de Produtos
- `src/pages/produtos.tsx` - Página listando todos os produtos por categoria
- Funcionalidade: Agrupa produtos por categoria e exibe em grid responsivo

---

## PRÓXIMOS PASSOS QUANDO RETOMAR

### Passo 1: Adicionar rota `/produtos`
Editar `src/App.tsx` e adicionar a importação e rota (ver seção 1 acima)

### Passo 2: Corrigir versões do package.json
Editar `package.json` e corrigir as versões (ver seção 2 acima)

### Passo 3: Reinstalar dependências
```bash
npm install --legacy-peer-deps
```

### Passo 4: Iniciar servidor
```bash
npm run dev
```

### Passo 5: Testar
- Acessar http://localhost:8080/
- Clicar em "Produtos" ou acessar http://localhost:8080/produtos
- Deve aparecer a lista de produtos com os placeholders SVG

---

## NOTAS IMPORTANTES

⚠️ **Não alterar**:
- `vite.config.ts` - Porta e host já estão corretos
- `public/produtos/` - Arquivos SVG já foram criados
- `src/pages/produtos.tsx` - Arquivo de dados já está pronto

✅ **Ações necessárias**:
1. Adicionar rota em `src/App.tsx`
2. Corrigir versões em `package.json`
3. Executar `npm install --legacy-peer-deps`
4. Executar `npm run dev`

---

## ESTRUTURA DO PROJETO

```
tabacaria-raiz-classica/
├── src/
│   ├── pages/
│   │   ├── Index.tsx (HOME - funciona)
│   │   ├── NotFound.tsx
│   │   ├── produtos.tsx (PRODUTOS - precisa da rota)
│   │   └── produto/
│   │       └── [id].tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProductsSection.tsx
│   │   └── ... (outros componentes)
│   └── App.tsx (PRECISA DE ATUALIZAÇÃO)
├── public/
│   └── produtos/ (SVG placeholders - criados ✅)
├── package.json (PRECISA DE ATUALIZAÇÃO)
├── vite.config.ts (✅ OK)
└── ... (outros arquivos)
```

---

## ERRO COMUM AO RETOMAR

Se receber erro ao fazer `npm install`:
```
npm error ERESOLVE could not resolve
npm error peer react@"^16.8 || ^17 || ^18" from next-themes@0.3.0
```

**Solução**:
Use a flag `--legacy-peer-deps`:
```bash
npm install --legacy-peer-deps
```

---

**Gravado em**: 10 de Novembro de 2025
**Próxima ação**: Implementar as 2 correções principais quando retomar o projeto
