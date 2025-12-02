import { arreglo_de_personas, guardarPersonasEnLocalStorage } from "./almacenamiento.js";

const actualizar = () => {

    let indiceEncontrado = null;

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

    btnBuscar.addEventListener("click", () => {
        const texto = inputBusqueda.value.trim().toLowerCase();
        const param = selectParametro.value;

        if (!param || !texto) {
            alert("Debes escribir algo y elegir un parámetro.");
            return;
        }

        const i = arreglo_de_personas.findIndex(persona =>
            String(persona[param]).toLowerCase() === texto
        );

        if (i === -1) {
            alert("No se encontró a nadie.");
            return;
        }

        const persona = arreglo_de_personas[i];
        indiceEncontrado = i;

        inputNombres.value = persona.nombres
        inputApellidos.value = persona.apellidos
        inputCedula.value = persona.cedula
        inputTelefono.value = persona.telefono
        inputEmail.value = persona.email
        inputFecha.value = persona.fecha_nacimiento
        inputSexo.value = persona.sexo
        inputRol.value = persona.rol
    });


    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (indiceEncontrado === null) {
            alert("Primero busca a una persona.");
            return;
        }

        arreglo_de_personas[indiceEncontrado] = {
            ...arreglo_de_personas[indiceEncontrado],
            nombres: inputNombres.value,
            apellidos: inputApellidos.value,
            cedula: inputCedula.value,
            telefono: inputTelefono.value,
            email: inputEmail.value,
            fecha_nacimiento: inputFecha.value,
            sexo: inputSexo.value,
            rol: inputRol.value,
        };

        guardarPersonasEnLocalStorage()

        alert("Persona actualizada con éxito");

        form.reset();
        indiceEncontrado = null;
    });

    btnEliminar.addEventListener("click", () => {
        if (indiceEncontrado === null) {
            alert("Primero busca a alguien para eliminar.");
            return;
        }

        const confirmar = confirm("¿Seguro que deseas eliminar a esta persona?");
        if (!confirmar) return;

        arreglo_de_personas.splice(indiceEncontrado, 1);
        guardarPersonasEnLocalStorage();

        alert("Persona eliminada");

        form.reset();
        indiceEncontrado = null;
    });

};

export default actualizar;