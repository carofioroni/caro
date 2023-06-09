let listaDeTareas = document.querySelector('#lista-tareas');
function agregarTarea (titulo, prioridad) {
    listaDeTareas.innerHTML += `<li class="${prioridad}">${titulo}</li>`
};