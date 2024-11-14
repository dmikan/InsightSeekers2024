// Función para mostrar/ocultar el menú lateral
function toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar.style.left === '-250px') {
        sidebar.style.left = '0';
    } else {
        sidebar.style.left = '-250px';
    }
}

// Función para mostrar/ocultar secciones desplegables
function toggleSection(section) {
    const content = section.nextElementSibling;
    const arrow = section.querySelector('.arrow');
    if (content.style.display === 'block') {
        content.style.display = 'none';
        arrow.innerHTML = '&#9662;'; // Mostrar la flecha hacia abajo
    } else {
        content.style.display = 'block';
        arrow.innerHTML = '&#9652;'; // Mostrar la flecha hacia arriba
    }
}

  