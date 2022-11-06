const valorTicket    = 200;
const emailValido = mail => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail); 
}
let descuentoEstudiante = 80;
let descuentoTrainee    = 50;
let descuentoJunior     = 15;
let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let mail = document.getElementById('mail');
let cantidadTickets = document.getElementById('cantidadTickets');
let categoria = document.getElementById('categoria')
let resumen = document.getElementById('resumen')
let totalValor = document.getElementById('totalValor')
let btnresumen = document.getElementById('btnresumen')

function quitarClaseError(){
    let x = document.querySelectorAll(".form-control, .form-select");
    let i;
    for (i = 0; i < x.length; i++){
        x[i].classList.remove("is-invalid");
    }
}
function isValidEmail(mail) { 
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail); 
  }

function totalAPagar() {
    

    if (nombre.value === ""){
        alert("Por favor, ingrese su nombre");
        nombre.classList.add("is-invalid");
        nombre.focus();
        return;
    }
    if (apellido.value === ""){
        alert("Por favor, ingrese su apellido");
        apellido.classList.add("is-invalid");
        apellido.focus();
        return;
    }
    if (mail.value === ""){
        alert("Por favor, ingrese su mail");
        mail.classList.add("is-invalid");
        mail.focus();
        return;
    }
    if (cantidadTickets.value == 0 ){
        alert("Por favor, ingrese cantidad de tickets");
        cantidadTickets.classList.add("is-invalid");
        cantidadTickets.focus();
        return;
    }
    if (categoria.value == ""){
        alert("Por favor, seleccione una categoria");
        categoria.classList.add(is-invalid);
        categoria.focus();
        return;

    }
    totalValorTickets = (cantidadTickets.value) * valorTicket;
    
    if (categoria.value == 0) {
        totalValorTickets = totalValorTickets;
    }
    if (categoria.value == 1) {
        totalValorTickets = totalValorTickets - (descuentoEstudiante / 100 * totalValorTickets);
    }
    if (categoria.value == 2) {
        totalValorTickets = totalValorTickets - (descuentoTrainee / 100 * totalValorTickets);
    }
    if (categoria.value == 3) {
        totalValorTickets = totalValorTickets - (descuentoJunior / 100 * totalValorTickets);
    }
    totalValor.innerHTML = totalValorTickets;
}


function ResetTotalAPagar (){
    quitarClaseError();
    totalPago.innerHTML = "";
}
btnresumen.addEventListener('click' , totalAPagar );

btnBorrar.addEventListener('click' , ResetTotalAPagar);


