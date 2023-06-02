let formBtn = document.querySelector(".form-btn");
let setaList = document.querySelector(".seta-list");
let formContainer = document.querySelector(".form-list__container");

formBtn.addEventListener('click', formList)

function formList (){

    if(setaList.classList.contains('clicked')){
        formContainer.classList.add('fechado');
        formContainer.classList.remove("aberto")
        setaList.classList.remove("clicked");

    }else{
        formContainer.classList.remove('fechado');
        formContainer.classList.add('aberto')
        setaList.classList.add("clicked");
    }


}