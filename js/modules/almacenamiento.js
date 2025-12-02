export let arreglo_de_personas = []

export const guardarPersonasEnLocalStorage = () => {
    localStorage.setItem('personas', JSON.stringify(arreglo_de_personas));
}

export const cargarPersonasDesdeLocalStorage = () => {
    const personasGuardadas = localStorage.getItem('personas')
    if(personasGuardadas) {
        const datosNuevos = JSON.parse(personasGuardadas)
        arreglo_de_personas.length = 0
        arreglo_de_personas.push(...datosNuevos)
    }
}

cargarPersonasDesdeLocalStorage()