import { arreglo_de_personas } from "./almacenamiento.js";
import { mostrarPersonas } from "./metodoAPI.js";

const mostrarTabla =  async () => {
    const tablaBody = document.getElementById('tablaPersonasBody');

    if (!tablaBody) {
        return;
    }

    tablaBody.innerHTML = '';
    const personas = await mostrarPersonas();

    if (personas.length === 0) {
        const row = tablaBody.insertRow();
        row.classList.add('bg-white', 'border-b', 'dark:bg-gray-800', 'dark:border-gray-700', 'border-gray-200');
        const cell = row.insertCell();
        cell.colSpan = 8;
        cell.textContent = "No hay usuarios guardados.";
        cell.classList.add('text-center', 'py-4', 'text-gray-400', 'px-6');
        return;
    }

    personas.forEach((persona, index) => {
        const row = tablaBody.insertRow();
        row.classList.add(
            'bg-white',
            'border-b',
            'dark:bg-gray-800',
            'dark:border-gray-700',
            'border-gray-200'
        );
        row.dataset.index = index;

        const nombreCell = document.createElement('th');
        nombreCell.scope = 'row';
        nombreCell.classList.add(
            'px-6',
            'py-4',
            'font-medium',
            'text-gray-900',
            'whitespace-nowrap',
            'dark:text-white'
        );
        nombreCell.textContent = persona.nombre;
        row.appendChild(nombreCell);

        const apellidoCell = row.insertCell();
        apellidoCell.textContent = persona.apellido;
        apellidoCell.classList.add('px-6', 'py-4', 'hidden', 'lg:table-cell');

        const cedulaCell = row.insertCell();
        cedulaCell.textContent = persona.cedula;
        cedulaCell.classList.add('px-5', 'py-4');

        const telefonoCell = row.insertCell();
        telefonoCell.textContent = persona.telefono;
        telefonoCell.classList.add('px-6', 'py-4', 'hidden', 'md:table-cell');

        const emailCell = row.insertCell();
        emailCell.textContent = persona.email;
        emailCell.classList.add('px-4', 'py-4', 'hidden', 'sm:table-cell');

        const fechaNacimientoCell = row.insertCell();
        fechaNacimientoCell.textContent = persona.fecha_nacimiento;
        fechaNacimientoCell.classList.add('px-3', 'py-4', 'hidden', 'xl:table-cell');

        const sexoCell = row.insertCell();
        sexoCell.textContent = persona.sexo;
        sexoCell.classList.add('px-5', 'py-4');

        const rolCell = row.insertCell();
        rolCell.textContent = persona.rol;
        rolCell.classList.add('px-5', 'py-4');
    });
}

export default mostrarTabla
