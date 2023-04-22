//*BODY
const body = document.querySelector('body')
//*BOTONES
const changeBtn = document.querySelector('#Boton');
const changeBtn2 = document.querySelector('#Boton2');
//*FORMULARIOS
const signInForm = document.querySelector('#formSignIn');
const signUpForm = document.querySelector('#formSignUp');
//*TEXTOS
const signInText = document.querySelector('.signInText');
const signUpText = document.querySelector('.signUpText');
//*CONTENEDOR ROJO
const contenedorNegro = document.querySelector('.container');
const contenedorRojoFormulario = document.querySelector('.signInFormContainer')

//*MOSTRAR FORMULARIO DE REGISTRO
changeBtn.addEventListener('click', () => {
    signInForm.classList.toggle('show');
    signUpForm.classList.toggle('show');

    signInText.classList.toggle('show');
    signUpText.classList.toggle('show');

    contenedorNegro.classList.toggle('desplazarFormulario');
})

//*MOSTRAR FORMULARIO DE INGRESO
changeBtn2.addEventListener('click', () => {
    signInForm.classList.toggle('show');
    signUpForm.classList.toggle('show');

    signInText.classList.toggle('show');
    signUpText.classList.toggle('show');

    contenedorNegro.classList.toggle('desplazarFormulario');
})

//*LOADER
const loader = document.querySelector('.loaderContainer');
window.onload = () =>{
    loader.classList.toggle('show');
    body.classList.toggle('hidden');
}


const hamburguer = document.querySelector('#hamburguer');
const hamburguerDiv1 = document.querySelector('.hamburguerDiv');
const hamburguerDiv2 = document.querySelector('.hamburguerDiv2');
const hamburguerDiv3 = document.querySelector('.hamburguerDiv3');
const hamburguerMenu = document.querySelector('.menu');
const list = document.querySelector('.list2')

hamburguer.addEventListener('click', () =>{
    hamburguerDiv1.classList.toggle('close');
    hamburguerDiv2.classList.toggle('close');
    hamburguerDiv3.classList.toggle('close');

    if (hamburguerMenu.style.width < 90 + '%') {

        hamburguerMenu.style.width = 90 + '%';
        hamburguerMenu.style.height = 100 + 'vh';
        list.style.display = "flex"

    } else if (hamburguerMenu.style.width >= 90 + '%'){

        hamburguerMenu.style.width = 0 + '%';
        hamburguerMenu.style.height = 0 + 'vh';
        list.style.display = "none"

    }

    // hamburguerMenu.style.width = 90 + '%';
    // hamburguerMenu.style.height = 100 + 'vh';
    // hamburguerMenu.classList.toggle('menu')
})
