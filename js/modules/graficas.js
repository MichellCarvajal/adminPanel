const mostrarGrafica = () => {
    // Gráfica 1 - Usuarios por mes
    new Chart(document.getElementById("usuariosMes"), {
        type: "line",
        data: {
            labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
            datasets: [{
                label: "Usuarios",
                data: [5, 9, 12, 15, 18, 20],
                borderWidth: 3,
                borderColor: "#38bdf8",
                tension: 0.3
            }]
        },
        options: { responsive: true }
    });
    
    // Gráfica 2 - Roles
    new Chart(document.getElementById("rolesUsuario"), {
        type: "pie",
        data: {
            labels: ["Administradores", "Usuarios", "Invitados"],
            datasets: [{
                data: [2, 14, 4],
                backgroundColor: ["#38bdf8", "#64748b", "#1e3a8a"]
            }]
        },
        options: { responsive: true }
    });
    
    // Gráfica 3 - Altas vs bajas
    new Chart(document.getElementById("altasBajas"), {
        type: "bar",
        data: {
            labels: ["Nuevos", "Eliminados"],
            datasets: [{
                label: "Usuarios",
                data: [5, 1],
                backgroundColor: ["#38bdf8", "#ef4444"]
            }]
        },
        options: { responsive: true }
    });
}

export default mostrarGrafica