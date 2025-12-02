const pantalla=document.getElementById("pantalla");
const pantallaResultado=document.getElementById("pantallaResultado");
const botonesNumero=document.querySelectorAll(".numero");
const botonesOperacion=document.querySelectorAll(".operacion");
const botonesParentesis=document.querySelectorAll(".parentesis");
const botonPunto=document.getElementById("puntobtn");
const botonIgual=document.getElementById("igualbtn");
const botonBorrar=document.getElementById("borrarbtn");

botonesNumero.forEach(boton =>{
    boton.addEventListener("click", () => {
        pantalla.textContent += boton.textContent;
    });
});

botonesOperacion.forEach(boton =>{
    boton.addEventListener("click",() => {
        const operacion= boton.dataset.operacion;
        const ultimo=pantalla.textContent.slice(-1);
        const operadorNuevo=boton.dataset.operacion;

        if("+-/*".includes(ultimo)){
            pantalla.textContent=pantalla.textContent.slice(0,-1)+operadorNuevo;
        }else{
            pantalla.textContent += operacion;
        }
    });
});

botonesParentesis.forEach(boton =>{
    boton.addEventListener("click", () =>{
        pantalla.textContent+=boton.textContent;
    });
});

botonPunto.addEventListener("click", () =>{
    pantalla.textContent+=botonPunto.textContent;
});

botonIgual.addEventListener("click",()=>{
    let contenido=pantalla.textContent;
    const primero=pantalla.textContent[0];
    const ultimo=pantalla.textContent.slice(-1)

    if("+-*/".includes(ultimo)){
        pantallaResultado.textContent="Error";
        return;
    }else if("+-*/".includes(primero)){
        contenido= 0+contenido;
    }

    const resultado= eval(contenido);
    
    if(!isFinite(resultado)){
        pantallaResultado.textContent="Error";
    }else{
        pantallaResultado.textContent=resultado;
    }  
});

botonBorrar.addEventListener("click",() =>{
    let texto=pantalla.textContent;
    texto=texto.slice(0,-1);
    pantalla.textContent=texto;

    if(pantalla.textContent==""){
        pantallaResultado.textContent="";
    }
});