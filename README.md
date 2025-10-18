 # Pop-up Troca de Imagens

 Uma pop-up interativa e personalizável que alterna entre imagens quando um botão é clicado


 ## Visão Geral do Projeto

 Este projeto cria uma janela pop-up estilizada que exibe uma sequência de imagens. A cada clique do usuário no botão, a imagem muda para a próxima da sequência. Quando a última imagem é exibida, o botão desaparece e uma mensagem final é mostrada.

 ## O que você vai aprender

 * Variáveis CSS para fácil customização
 * Estrutura básica de HTML com flexbox
 * Manipulação de eventos em JavaScript
 * Manipulação do DOM

 ## Recursos (Features)

 - Cores, fontes e estilos personalizáveis através de variáveis CSS
 - Imagem de fundo e sequência principal de imagens personalizáveis, além de todo o texto
 - Transições suaves (fade) entre imagens
 - Design responsivo para dispositivos móveis
 - Elementos decorativos de UI (botões de fechar e reduzir)

 ## 📁 Estrutura do Projeto

 ```
 image-changer-popup/
 ├── assets/
 │   ├── image-content/
 │   │   ├── image-1.png
 │   │   ├── image-2.png
 │   │   ├── image-3.png
 │   │   ├── image-4.png
 │   │   ├── image-5.png
 │   │   └── image-6.png
 │   ├── close-icon.png
 │   ├── favicon.png
 │   ├── main-bg.png
 │   └── shrink-icon.png
 ├── index.html
 ├── style.css
 └── index.js
 ```

 ## Como funciona

 1. A página carrega com um container pop-up estilizado
 2. A primeira imagem é exibida automaticamente
 3. Quando o usuário clica no botão:
    - A imagem atual é esmaecida (fade out)
    - A próxima imagem é pré-carregada
    - Assim que carregada, a nova imagem é exibida com fade in
 4. Após chegar na imagem final:
    - O botão desaparece
    - Uma mensagem final é exibida
   
 ## Como recriar este projeto
 1. Clone o repositório do GitHub
 2. Abra o projeto no seu editor de código preferido (VS Code ou outro)
 3. Revise a estrutura e os arquivos do projeto:
    - `index.html`: Contém a estrutura básica do pop-up
    - `style.css`: Contém todo o estilo e opções de customização visual
    - `index.js`: Controla a funcionalidade de troca de imagens
 4. Abra `index.html` no seu navegador para visualizar o projeto:
    - Dê um duplo clique no arquivo no seu explorador de arquivos
 5. Personalize o projeto seguindo as instruções nos arquivos:
    - Modifique as variáveis CSS em `style.css` para alterar cores, fontes e estilos
    - Substitua as imagens na pasta `assets` (veja os requisitos de arte abaixo)
    - Atualize os textos diretamente no arquivo HTML
 6. Para a funcionalidade em JavaScript:
    - O código está comentado linha a linha, recomendo tentar reescrevê-lo para praticar :) 
 7. Teste suas alterações atualizando a página no navegador
 8. Para deploy, siga as instruções do Netlify na seção abaixo

 *Certifique-se de que a estrutura do projeto e os nomes de arquivo coincidam com os mencionados aqui, ou renomeie-os conforme necessário.*

 ## Opções de customização

 ### Requisitos das Imagens (Artwork)
 - Sequência de animação (4-8 imagens): 300 x 360px - recomenda-se PNG com fundo transparente
 - Imagem de fundo: 2093 x 1132 px
 - Favicon: tamanho flexível, meu exemplo é 238 x 279px - recomenda-se PNG com fundo transparente
 - Ícones de fechar e reduzir: tamanho flexível, desde que tenham aspecto quadrado; meu exemplo é 287 x 287px

 **Verifique se a estrutura do projeto e os nomes dos arquivos correspondem aos listados acima, ou atualize os caminhos no código.**

 Se quiser alterar as dimensões das imagens neste projeto, será necessário atualizar a proporção (aspect-ratio) correspondente no CSS. Seguem as seções específicas a modificar:

 Para a área de conteúdo da imagem (área da animação):
 ```css
 .image-content {
   /* ... outras propriedades ... */
   height: 65%;
   aspect-ratio: 142.5 / 171; /* Altere esses valores para corresponder às dimensões da sua animação (300x360px) */
 }
 ```

 Para o dimensionamento da imagem de fundo:
 ```css
 body {
   /* ... outras propriedades ... */
   background-size: 100% auto; /* Ajuste com base nas dimensões da sua imagem de fundo (2093x1132px) */
 }
 ```


 ### Cores e Estilo

 Todos os elementos visuais podem ser personalizados através de variáveis CSS na seção `:root` de `style.css`:

 ```css
 :root {
   /* Cores */
   --color-page-background: #50AFC9;
   --color-main-container-background: #FF5B70;
   --color-inner-container-background: #FFF7F4;
   --color-border: #9E0E2B;
   --color-button-background: #FFF;
   --color-heading-text: #FFF;
   --color-button-text: #9E0E2B;
   --color-message-text: #9E0E2B;
   
   /* Imagens */
   --image-path-background: url('assets/main-bg.png');
   --image-path-content: url('assets/image-content/image-1.png');
   
   /* Fontes */
   --font-family-main: "Pixelify Sans", sans-serif;
   /* ... e mais variáveis ... */
 }
 ```

 ### Conteúdo de Texto

 Modifique os seguintes itens no arquivo HTML:

 - Título da página: `<title>For you &lt;3</title>`
 - Texto do cabeçalho: `<h1>For you &lt;3</h1>`
 - Texto do botão: `<button id="waterButton">Grow!</button>`
 - Mensagem final: `<div class="final-message">Have a good day!</div>`

 ### Imagens

 1. Substitua as imagens em `assets/image-content/` pelas suas
 2. Mantenha os mesmos nomes de arquivo ou atualize os caminhos no array do JavaScript
 3. Você pode adicionar mais imagens incluindo novas entradas no array

 ```javascript
 const images = [
   './assets/image-content/image-1.png',
   './assets/image-content/image-2.png',
   // Adicione mais imagens aqui...
 ];
 ```

 ## 🌐 Hospedagem no Netlify

 Você pode publicar este projeto usando o plano gratuito do Netlify:

 **Prepare seu projeto**:
 * Certifique-se de que os arquivos estejam nomeados corretamente: `index.html` e `index.js` (se você os renomeou)
 * Garanta que todos os caminhos dos arquivos estejam corretos (são sensíveis a maiúsculas/minúsculas em alguns hosts)

 **Criar conta no Netlify**:
 * Acesse netlify.com e crie uma conta gratuita
 * Você pode se cadastrar usando GitHub, GitLab, Bitbucket ou e-mail

 **Fazer o deploy do site**: 
 * Arraste e solte a pasta do projeto no painel do Netlify
 * O Netlify fará o deploy automaticamente

 **Configurar o site**:
 * Após o deploy, você pode customizar o nome do site
 * Vá em "Site settings" → "Change site name"
 * Seu site ficará disponível em `your-site-name.netlify.app`

 **Atualizar o site**:
 * Se usou o método arrastar/soltar, basta arrastar a pasta novamente para atualizar
 * Se conectou via Git, faça push das mudanças no repositório


 ## Ideias para estender o projeto

 - Adicionar funcionalidade de clique nos ícones de fechar e reduzir
 - Implementar um botão de reiniciar após alcançar a imagem final
 - Adicionar efeitos sonoros para cliques e transições

