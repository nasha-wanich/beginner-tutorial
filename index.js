// =============================================
// PASSO 1: Configurar o array de imagens
// =============================================
// Array com todas as imagens para percorrer
// Personalize esses caminhos para as suas próprias imagens
const images = [
  './assets/image-content/pancake-1.png',
  './assets/image-content/pancake-2.png',
  './assets/image-content/pancake-3.png',
  './assets/image-content/pancake-4.png',
  './assets/image-content/pancake-5.png',
  './assets/image-content/pancake-6.png'
];

// =============================================
// PASSO 2: Referenciar elementos HTML
// =============================================
// Conectar aos elementos que precisamos alterar
const imageContent = document.querySelector('.image-content');  // Image container
const mainButton = document.getElementById('main-button');      // Image switch button
const finalMessage = document.querySelector('.final-message');  // Final message

// =============================================
// PASSO 3: Rastrear em qual imagem estamos
// =============================================
// Começar com a primeira imagem (índice 0)
let currentIndex = 0;

// =============================================
// PASSO 4: Função de atualização da imagem
// =============================================
// Função para trocar imagens com efeito de fade
function updateImage() {
  // Esmaecer a imagem atual
  imageContent.style.opacity = 0;
  
  // Pré-carregar a próxima imagem
  const img = new Image();
  img.src = images[currentIndex];
  
  // Quando a imagem for carregada
  img.onload = () => {
    // Trocar pela nova imagem
    imageContent.style.backgroundImage = `url('${images[currentIndex]}')`;
    
    // Aparecer a nova imagem (fade in)
    imageContent.style.opacity = 1;
  };
}

// =============================================
// PASSO 5: Exibição inicial da imagem
// =============================================
// Exibir a primeira imagem quando a página carregar
updateImage();

// =============================================
// PASSO 6: Manipulador de clique do botão
// =============================================
// Trocar imagem quando o botão for clicado
mainButton.addEventListener('click', () => {
  // Ir para a próxima imagem
  currentIndex++;
  
  // Atualizar se não for o fim da lista
  if (currentIndex < images.length) {
    updateImage();
  }
  
  // Quando chegar na última imagem, mostrar a mensagem final e esconder o botão
  if (currentIndex === images.length - 1) {
    mainButton.style.display = 'none';
    finalMessage.style.display = 'block';
  }
});
