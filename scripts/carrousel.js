const carouseis = document.querySelectorAll('.carousel__inner')
 carouseis.forEach(carousel => carrosel(carousel))


function carrosel(inner){
    const container = inner.parentNode;
    const projetos = inner.querySelectorAll('.projeto');
    const prev = container.querySelector('.prev');
    const next = container.querySelector('.next');
    const itemWidth = document.querySelector('.projeto').offsetWidth
    let currentIndex = 0;
    mudarCarrosel(currentIndex)
  
    prev.addEventListener('click', function() {
      currentIndex = (currentIndex - 1 + projetos.length) % projetos.length;
      mudarCarrosel(currentIndex);
    });
  
    next.addEventListener('click', function() {
      currentIndex = (currentIndex + 1) % projetos.length;
      mudarCarrosel(currentIndex);
    });
  
    function mudarCarrosel() {
        projetos.forEach(projeto => projeto.classList = 'projeto')
        const translateX = -itemWidth * currentIndex;
        inner.style.transform = `translateX(${translateX}px)`;
        projetos[currentIndex].classList = 'projeto current'
      }

    projetos.forEach(projeto => {
      
      const more = projeto.querySelector('.more');

      projeto.addEventListener('mouseover', () => {
        more.style.opacity = "1"
      });

      projeto.addEventListener('mouseout', () => {
        more.style.opacity = '0'

      });
    });
        
        
        
    
    };


