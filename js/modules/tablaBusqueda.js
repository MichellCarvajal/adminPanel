import { arreglo_de_personas } from "./almacenamiento.js";
import { buscarPersona } from "./metodoAPI.js";

const mostrarBusqueda = () => {
  const tablaBody = document.getElementById("tablaPersonasBody");
  const parametroElem = document.getElementById("parametro");
  const busquedaElem = document.getElementById("busqueda");
  const buscarBtn = document.getElementById("buscar");

  const crearFilaVacia = (colspan = 8, texto = "No se encontraron resultados") => {
    tablaBody.innerHTML = `
      <tr>
        <td colspan="${colspan}" class="text-center py-3 text-gray-400">${texto}</td>
      </tr>
    `;
  };

  buscarBtn.addEventListener("click",  async () => {
    const texto = busquedaElem.value.trim().toLowerCase();
    const param = parametroElem.value;

    if (!texto || param === "" || param === "Selecciona un parametro") {
      alert("Por favor llenar todos los campos");
      return;
    }

    const resultados = await buscarPersona(param, texto);

    tablaBody.innerHTML = "";

    if (!resultados.length) {
      crearFilaVacia();
      return;
    }

    resultados.forEach((persona, index) => {
      const row = tablaBody.insertRow();
      row.classList.add(
        "bg-white",
        "border-b",
        "dark:bg-gray-800",
        "dark:border-gray-700",
        "border-gray-200"
      );
      row.dataset.index = index;

      const nombre = persona.nombre;
      const apellido = persona.apellido;
      const cedula = persona.cedula;
      const telefono = persona.telefono;
      const email = persona.email;
      const fecha = persona.fecha_nacimiento;
      const sexo = persona.sexo;
      const rol = persona.rol;

      const nombreCell = document.createElement("th");
      nombreCell.scope = "row";
      nombreCell.classList.add(
        "px-6",
        "py-4",
        "font-medium",
        "text-gray-900",
        "whitespace-nowrap",
        "dark:text-white"
      );
      nombreCell.textContent = nombre;
      row.appendChild(nombreCell);

      const apellidoCell = row.insertCell();
      apellidoCell.textContent = apellido;
      apellidoCell.classList.add("px-6", "py-4", "hidden", "lg:table-cell");

      const cedulaCell = row.insertCell();
      cedulaCell.textContent = cedula;
      cedulaCell.classList.add("px-5", "py-4");

      const telefonoCell = row.insertCell();
      telefonoCell.textContent = telefono;
      telefonoCell.classList.add("px-6", "py-4", "hidden", "md:table-cell");

      const emailCell = row.insertCell();
      emailCell.textContent = email;
      emailCell.classList.add("px-4", "py-4", "hidden", "sm:table-cell");

      const fechaNacimientoCell = row.insertCell();
      fechaNacimientoCell.textContent = fecha;
      fechaNacimientoCell.classList.add("px-3", "py-4", "hidden", "xl:table-cell");

      const sexoCell = row.insertCell();
      sexoCell.textContent = sexo;
      sexoCell.classList.add("px-5", "py-4");

      const rolCell = row.insertCell();
      rolCell.textContent = rol;
      rolCell.classList.add("px-5", "py-4");
    });
  });
};

export default mostrarBusqueda;