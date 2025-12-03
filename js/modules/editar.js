import { arreglo_de_personas, guardarPersonasEnLocalStorage } from "./almacenamiento.js";
import { actualizarPersona, buscarPersona, eliminarPersona } from "./metodoAPI.js";

const actualizar =  () => {

    let persona = null;

    const inputBusqueda = document.getElementById("busqueda");
    const selectParametro = document.getElementById("parametro");
    const btnBuscar = document.getElementById("buscar");

    const form = document.getElementById("formulario");
    const inputNombres = document.getElementById("nombres");
    const inputApellidos = document.getElementById("apellidos");
    const inputCedula = document.getElementById("cedula");
    const inputTelefono = document.getElementById("telefono");
    const inputEmail = document.getElementById("email");
    const inputFecha = document.getElementById("fecha_nacimiento");
    const inputSexo = document.getElementById("sexo");
    const inputRol = document.getElementById("rol");

    const btnEliminar = document.getElementById("eliminar");

    btnBuscar.addEventListener("click", async () => {
        const texto = inputBusqueda.value.trim().toLowerCase();
        const param = selectParametro.value;

        if (!param || !texto) {
            alert("Debes escribir algo y elegir un parámetro.");
            return;
        }

        const personaEncontrada = await buscarPersona(param, texto);

        if (!personaEncontrada) {
            alert("No se encontró a nadie.");
            return;
        }

        persona = personaEncontrada[0];
        

        inputNombres.value = persona.nombre
        inputApellidos.value = persona.apellido
        inputCedula.value = persona.cedula
        inputTelefono.value = persona.telefono
        inputEmail.value = persona.email
        inputFecha.value = persona.fecha_nacimiento
        inputSexo.value = persona.sexo
        inputRol.value = persona.rol
    });


    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        if (persona === null) {
            alert("Primero busca a una persona.");
            return;
        }

        persona = {
            ...persona,
            nombre: inputNombres.value,
            apellido: inputApellidos.value,
            cedula: inputCedula.value,
            telefono: inputTelefono.value,
            email: inputEmail.value,
            fecha_nacimiento: inputFecha.value,
            sexo: inputSexo.value,
            rol: inputRol.value,
        };

        await actualizarPersona(persona.id, persona);

        alert("Persona actualizada con éxito");

        form.reset();
        persona = null;
    });

    btnEliminar.addEventListener("click", () => {
        if (persona === null) {
            alert("Primero busca a alguien para eliminar.");
            return;
        }

        const confirmar = confirm("¿Seguro que deseas eliminar a esta persona?");
        if (!confirmar) return;

        eliminarPersona(persona.id);

        alert("Persona eliminada");

        form.reset();
        persona = null;
    });

};

export default actualizar;