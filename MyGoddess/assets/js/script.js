let currentTextIndex = 0;
let currentImageIndex = 0;
let currentTextIndexUs = 0;
let currentImageMóIndex = 0;


function IniciarLove() {
    let button = document.querySelector('.botãozinho');
    button.style.display = 'none';
    mudarTexto();
}

function mudarTexto() {
    const text = document.querySelector('.text');
    text.style.display = 'flex';
    const texts = [
        "Eu te amo muito",
        "Muito obrigado",
        "Por ser",
        "Meu mundo",
        "Impossível",
        "Expressar o",
        "Quanto eu te amo",
        "Meu amorzinho😍",
        ""
    ];

    text.textContent = texts[currentTextIndex];
    currentTextIndex++;

    if (currentTextIndex >= texts.length) {
        mudarImagensUs(); 
    } else {
        setTimeout(mudarTexto, 1000);
    }
}

function reload() {
    location.reload();
}

function replay() {
    let replay = document.querySelector(".replay-content");
    replay.style.display = 'flex';
}

function mudarImagensUs() {
    mudarTextoUs();

    const text = document.querySelector('.text');
    text.style.display = 'none';
    let image = document.querySelector('.image-area img');
    image.style.display = 'block'; 

    const images = [
        "assets/images/MóUs1.jpg",
        "assets/images/MóUs2.jpg",
        "assets/images/MóUs3.jpg",
        "assets/images/MóUs4.jpg",
        "assets/images/MóUs5.jpg",
        "assets/images/MóUs6.jpg",
        "assets/images/MóUs7.jpg",
        "assets/images/MóUs8.jpg",
        "assets/images/MóUs9.jpg",
        "assets/images/MóUs10.jpg",
        "assets/images/MóUs11.jpg",
        "assets/images/MóUs12.jpg",
    ];

    function ImagemUs() {
        if (currentImageIndex >= images.length) {
            image.style.display = 'none';
            return; 
        } else {
            image.src = images[currentImageIndex];
            currentImageIndex++;
            setTimeout(ImagemUs, 2000);
        }
    };

    ImagemUs(); 
}

function mudarTextoUs() {
    let texto = document.querySelector('.image-area .image-text');
    texto.style.display = 'block';

    const textos = [
        'A noite na qual eu me perdi totalmente em seu sorriso pela primeira vez',
        'Dia no qual me encantei pela sua beleza',
        'Deixei de lado a vergonha e disse em alto e bom tom, que a amava',
        'Abri meu coração e tudo mudou',
        'A gente juntinho na escola',
        'Primeira vez que nos beijamos com tudo',
        'Nosso primeiro encontro',
        'A gente juntinhos no passeio da escola',
        'Eu bem abraçadinho em você na escola',
        'Nossa sáida depois do trabalho',
        'O dia em que eu te dei o sharkoiris',
        'A cada dia que passa eu te amo mais!',
        ''
    ];

    texto.textContent = textos[currentTextIndexUs];
    currentTextIndexUs++;

    if (currentTextIndexUs >= textos.length) {
        texto.style.display = 'none';
        mudarImagens(); 
    } else {
        setTimeout(mudarTextoUs, 2000);
    }
}

function mudarImagens() {
    let texto = document.querySelector('.image-area2 .image-text');
    texto.style.display = 'block';
    let imagem = document.querySelector('.image-area2 img');
    imagem.style.display = 'block'; 

    const images = [
        "assets/images/Mó1.jpg",
        "assets/images/Mó2.jpg",
        "assets/images/Mó3.jpg",
        "assets/images/Mó4.jpg",
        "assets/images/Mó5.jpg",
        "assets/images/Mó6.jpg",
        "assets/images/Mó7.jpg",
        "assets/images/Mó8.jpg",
        "assets/images/Mó9.jpg",
        "assets/images/Mó10.jpg",
        "assets/images/Mó11.jpg",
        "assets/images/Mó12.jpg",
        "assets/images/Mó13.jpg",
        "assets/images/Mó14.jpg",
        "assets/images/Mó15.jpg",
        "assets/images/Mó16.jpg",
        "assets/images/Mó17.jpg",
        "assets/images/Mó18.jpg",
        "assets/images/Mó19.jpg",
        "assets/images/Mó20.jpg",
        "assets/images/Mó21.jpg",
        "assets/images/Mó22.jpg",
        "assets/images/Mó23.jpg",
        "assets/images/Mó24.jpg",
        "assets/images/Mó25.jpg",
        "assets/images/Mó26.jpg",
        "assets/images/Mó27.jpg",
        "assets/images/Mó28.jpg",
        "assets/images/Mó29.jpg",
        "assets/images/Mó30.jpg",
        "assets/images/Mó31.jpg",
        "assets/images/Mó32.jpg",
        "assets/images/Mó33.jpg",
        "assets/images/Mó34.jpg",
        "assets/images/Mó35.jpg",
        "assets/images/Mó36.jpg",
        "assets/images/Mó37.jpg",
        "assets/images/Mó38.jpg",
        "assets/images/Mó39.jpg",
        "assets/images/Mó40.jpg",
        "assets/images/Mó41.jpg",
        "assets/images/Mó42.jpg",
        "assets/images/Mó43.jpg",
        "assets/images/Mó44.jpg",
        "assets/images/Mó45.jpg",
        "assets/images/Mó46.jpg",
        "assets/images/Mó47.jpg",
        "assets/images/Mó48.jpg",
        "assets/images/Mó49.jpg",
        "assets/images/Mó50.jpg",
        "assets/images/Mó51.jpg",
        "assets/images/Mó52.jpg",
        "assets/images/Mó53.jpg",
        "assets/images/Mó54.jpg",
        "assets/images/Mó55.jpg",
        "assets/images/Mó56.jpg",
        "assets/images/Mó57.jpg",
        "assets/images/Mó58.jpg",
        "assets/images/Mó59.jpg",
        "assets/images/Mó60.jpg",
        "assets/images/Mó61.jpg",
        "assets/images/Mó62.jpg",
        "assets/images/Mó63.jpg",
        "assets/images/Mó64.jpg",
        "assets/images/Mó65.jpg",
        "assets/images/Mó66.jpg",
        "assets/images/Mó67.jpg",
        "assets/images/Mó68.jpg",
        "assets/images/Mó69.jpg",
        "assets/images/Mó70.jpg",
        "assets/images/Mó71.jpg",
        "assets/images/Mó72.jpg",
        "assets/images/Mó73.jpg",
        "assets/images/Mó74.jpg",
        "assets/images/Mó75.jpg",
        "assets/images/Mó76.jpg",
        "assets/images/Mó77.jpg",
        "assets/images/Mó78.jpg",
        "assets/images/Mó79.jpg",
        "assets/images/Mó80.jpg",
        "assets/images/Mó81.jpg",
        "assets/images/Mó82.jpg",
        "assets/images/Mó83.jpg",
        "assets/images/Mó84.jpg",
        "assets/images/Mó85.jpg",
        "assets/images/Mó86.jpg",
        "assets/images/Mó87.jpg",
        "assets/images/Mó88.jpg",
        "assets/images/Mó89.jpg",
        "assets/images/Mó90.jpg",
        "assets/images/Mó91.jpg",
        "assets/images/Mó92.jpg",
        "assets/images/Mó93.jpg",
        "assets/images/Mó94.jpg",
        "assets/images/Mó95.jpg",
        "assets/images/Mó96.jpg",
        "assets/images/Mó97.jpg",
        "assets/images/Mó98.jpg",
        "assets/images/Mó99.jpg",
        "assets/images/Mó100.jpg",
        "assets/images/Mó101.jpg",
        "assets/images/Mó102.jpg",
        "assets/images/Mó103.jpg",
        "assets/images/Mó104.jpg",
        "assets/images/Mó105.jpg",
        "assets/images/Mó106.jpg",
        "assets/images/Mó107.jpg",
        "assets/images/Mó108.jpg",
        "assets/images/Mó109.jpg",
        "assets/images/Mó110.jpg",
        "assets/images/Mó111.jpg",
        "assets/images/Mó112.jpg",
   ];

    function ImagemMó() {
        if (currentImageMóIndex >= images.length) {
            imagem.style.display = 'none';
            texto.style.display = 'none';
            replay();
            return; 
        } else {
            imagem.src = images[currentImageMóIndex];
            currentImageMóIndex++;
            setTimeout(ImagemMó, 500);
        }
    };

    ImagemMó(); 
}

IniciarLove();
