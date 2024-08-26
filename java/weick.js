// Criar uma função que abriga os slides.
function Slider() {
    // Capturar as imagens do Carrossel.
    const carrossel = document.querySelector('#Carrossel .imagens');
    // Fazer com que a variável Slides, seja responsável por guardar todos os elementos filhos do carrossel.
    const slides = carrossel.children;
    // Variável que captura a quantidade de elementos que tem dentro da variável slides (filhos do carrossel).
    const totalSlides = slides.length;
    // Criar uma variável que detem um número.
    let numberPosition = 0;

    // Criando a função que irá fazer com que a posição de cada imagem seja reconhecida.
    function updateSlidePosition() {
        // Definindo, quantos % a imagem vai ser movida no CSS. (-25xnumberPosition) e adicionando + '%' para que o numero seja em %
        const position = -25 * numberPosition + '%';
        // Adicionando uma estilização CSS diretamente no (#Carrossel .imagens), esse comando faz com que o slider se movimenta horizontalmente.
        carrossel.style.transform = `translateX(${position})`;
    }

    // Criando a função que irá adicionar +1 no numberPosition. O operador módulo % totalSlides é usado para garantir que, ao atingir o último slide, o índice volte para 0.
    function moveToNextSlide() {
        numberPosition = (numberPosition + 1) % totalSlides;
        updateSlidePosition();
    }

    // Simplesmente pegando as 2 funções que outrora havia feito, e simplificando elas em 1 unica função
    function moveToSlide(index) {
        numberPosition = index;
        updateSlidePosition();
    }

    // Muda o slide a cada 3 segundos automaticamente
    setInterval(moveToNextSlide, 6000);

    // Adiciona o evento de clique para as imagens de proposta
    document.querySelectorAll('.propostas div').forEach((proposta) => {
        proposta.addEventListener('click', () => {
            const index = parseInt(proposta.getAttribute('localizador'), 10);
            moveToSlide(index);
        });
    });
};
Slider();