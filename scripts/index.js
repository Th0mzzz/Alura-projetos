
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

//  Carrosel
const carContainer = document.querySelector(".form__container");
const itens = document.querySelectorAll(".projeto");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const inner = document.querySelector(".carousel__inner");

    
