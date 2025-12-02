const menu = () => {
    const boton = document.getElementById('toggle')
    const menu = document.getElementById('menu')
    const logo = document.getElementById('logo')

    if(!boton) return

    boton.onclick = () => {
        menu.classList.toggle('hidden')
        logo.classList.toggle('border-b')
    }
}

export default menu