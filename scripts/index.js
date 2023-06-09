
//---------------- HEADER -------------------

// Lista de formações no menu

let formBtn = document.querySelector(".form-btn");
let setaList = document.querySelector(".seta-list");
let formContainer = document.querySelector(".form-list__container");
let formItens = document.querySelectorAll(".form-list__item");

formBtn.addEventListener('click', formList)
formContainer.addEventListener('mouseleave',leaveFormList)

function formList (){
    
        if(setaList.classList.contains("clicked")){
            setaList.classList.remove('clicked')
            formContainer.classList.remove("abrir")
            formContainer.classList.add('fechar')
            
            setTimeout(function(){
                formContainer.classList.remove("fechar")
                formContainer.style.height = "0px"
                
            },1000);

        }else{
            setaList.classList.add('clicked')
            formContainer.classList.add('abrir')
        

            setTimeout(function(){
                formContainer.classList.remove("abrir")
                formContainer.style.height = "180px"
            },1000);
        }

       
    }
      
function leaveFormList(){
    setaList.classList.remove('clicked')
            formContainer.classList.remove("abrir")
            formContainer.classList.add('fechar')
    
            setTimeout(function(){
                formContainer.classList.remove("fechar")
                formContainer.style.height = "0px"
                
            },1000);
}






// -------------MAIN-------------


//carrosel

function carousel (inner, itens , prev , next){

let atual = 0;

function mostrarItem(atual) {

 const itemWidth = itens[atual].offsetWidth;
  const translateX = -itemWidth * atual;
  inner.style.transform = `translateX(${translateX}px)`;
  // Remova a classe "current" de todos os itens
  itens.forEach((item) => item.classList.remove("current"));
  // Adicione a classe "current" ao item atual
  itens[atual].classList.add("current");
}

function rolarDireita() {
    atual++;

  // Verifique se chegou ao final dos itens e volte para o primeiro
  if (atual >= itens.length) {
    atual = 0;
    
  }
  mostrarItem(atual);
}

function rolarEsquerda() {
  atual--;
  // Verifique se voltou para o início e vá para o último item
  if (atual < 0) {
    atual = itens.length - 1;
  }
  mostrarItem(atual);
}

// Adicione os ouvintes de evento aos botões "prev" e "next"
prev.addEventListener("click", rolarEsquerda);
next.addEventListener("click", rolarDireita);

// Exiba o primeiro item inicialmente
mostrarItem(atual);

}

const inner1 = document.querySelector(".carousel__inner");
const itens1 = document.querySelectorAll(".projeto");
const prev1 = document.querySelector("#prev");
const next1 = document.querySelector("#next");

carousel(inner1,itens1,prev1,next1);

const inner2 = document.querySelector(".carousel__inner2");
const itens2 = document.querySelectorAll(".projeto2");
const prev2 = document.querySelector("#prev2");
const next2 = document.querySelector("#next2");

carousel(inner2,itens2,prev2,next2);
    
