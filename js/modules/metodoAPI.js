const API_URL = "https://692f58f391e00bafccd754c6.mockapi.io/Personas/";

async function enviarPersona(persona) {
    const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(persona)
    });
    const data = await res.json();
    return data;
}

async function buscarPersona(parametro, valor) {
    const res = await fetch(API_URL);
    const personas = await res.json();

    const resultados = personas.filter(persona => String(persona[parametro]).toLowerCase().includes(String(valor).toLowerCase()));
    return resultados;
}

async function mostrarPersonas() {
    const res = await fetch(API_URL);
    const personas = await res.json();
    return personas;
}

async function actualizarPersona(id, personaActualizada) {
    const res = await fetch(`${API_URL}${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(personaActualizada)
    });
    const data = await res.json();
    return data;
}

async function eliminarPersona(id) {
    const res = await fetch(`${API_URL}${id}`, {
        method: "DELETE"
    });
    const data = await res.json();
    return data;
}

export { enviarPersona, buscarPersona, actualizarPersona, mostrarPersonas, eliminarPersona };