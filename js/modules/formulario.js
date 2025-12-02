import { arreglo_de_personas, guardarPersonasEnLocalStorage } from "./almacenamiento.js";
import { enviarPersona } from "./metodoAPI.js";

const enviarFormulario = () => {
    document.addEventListener("submit", (event) => {
        if(event.target.id === 'formulario') {
            event.preventDefault();

            let persona = {};
    
            persona.nombre = document.getElementById("nombres").value;
            persona.apellido = document.getElementById("apellidos").value;
            persona.cedula = document.getElementById("cedula").value;
            persona.telefono = document.getElementById("telefono").value;
            persona.email = document.getElementById("email").value;
            persona.fecha_nacimiento = document.getElementById("fecha_nacimiento").value;
            persona.sexo = document.getElementById("sexo").value;
            persona.rol = document.getElementById("rol").value;
            
            if(!persona.nombre || !persona.apellido || !persona.cedula || !persona.email || !persona.fecha_nacimiento || !persona.telefono || !persona.sexo || !persona.rol) {
                alert('Por favor llenar todos los campos')
                return
            }
            
            enviarPersona(persona);

            cedula.value = "";
            nombres.value = "";
            apellidos.value = "";
            email.value = "";
            fecha_nacimiento.value = "";
            telefono.value = "";
        }
    });
}


export default enviarFormulario