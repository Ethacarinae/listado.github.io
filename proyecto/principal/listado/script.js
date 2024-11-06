document.addEventListener("DOMContentLoaded", () => {
  // Obtener los elementos del DOM
  const taskInput = document.getElementById("new-task"); // Campo de entrada para la nueva tarea
  const addTaskButton = document.getElementById("add-task"); // Botón para agregar nueva tarea
  const taskList = document.getElementById("task-list"); // Lista de tareas
  const deleteAllButton = document.getElementById("delete-all"); // Botón para eliminar todas las tareas
  const tabs = document.querySelectorAll(".tabs button"); // Botones de filtro de tareas (Todas, Activas, Completadas)

  // Obtener las tareas de localStorage o inicializar una matriz vacía si no hay ninguna tarea
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Función para renderizar las tareas (Todas, Activas, Completadas)
  const renderTasks = (filter) => {
    taskList.innerHTML = ""; // Borrar todo el contenido actual de la lista de tareas
    let filteredTasks = tasks; // Inicializar la matriz de tareas filtradas

    // Filtrar las tareas por estado
    if (filter === "active") {
      filteredTasks = tasks.filter((task) => !task.completed); // Tomar solo las tareas no completadas
    } else if (filter === "completed") {
      filteredTasks = tasks.filter((task) => task.completed); // Tomar solo las tareas completadas
    }

    // Mostrar cada tarea en la lista filtrada
    filteredTasks.forEach((task) => {
      const taskItem = document.createElement("li"); // Crear un elemento <li> para la tarea
      taskItem.classList.toggle("completed", task.completed); // Agregar clase 'completed' si la tarea está completada
      taskItem.innerHTML = `
                <input type="checkbox" ${task.completed ? "checked" : ""}> <!-- Checkbox para la tarea -->
                <span>${task.text}</span> <!-- Texto de la tarea -->
                <button class="delete-task">X</button> <!-- Botón para eliminar la tarea -->
            `;
      taskList.appendChild(taskItem); // Agregar la tarea a la lista

      // Manejar el evento cuando el usuario cambia el estado de la tarea
      const checkbox = taskItem.querySelector("input");
      checkbox.addEventListener("change", () => {
        task.completed = checkbox.checked; // Actualizar el estado de la tarea
        saveTasks(); // Guardar las tareas en localStorage
        renderTasks(filter); // Renderizar la lista de tareas según el filtro
      });

      // Manejar el evento cuando el usuario elimina la tarea
      const deleteButton = taskItem.querySelector(".delete-task");
      deleteButton.addEventListener("click", () => {
        tasks = tasks.filter((t) => t !== task); // Eliminar la tarea de la lista
        saveTasks(); // Guardar las tareas en localStorage
        renderTasks(filter); // Renderizar la lista de tareas según el filtro
      });
    });

    // Mostrar u ocultar el botón de eliminar todas las tareas según la cantidad de tareas
    deleteAllButton.classList.toggle("hidden", tasks.length === 0);
  };

  // Función para guardar las tareas en localStorage
  const saveTasks = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  // Manejar el evento cuando el usuario agrega una nueva tarea
  addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim(); // Obtener el texto del campo de entrada y eliminar espacios
    if (taskText) {
      tasks.push({ text: taskText, completed: false }); // Agregar nueva tarea a la lista con estado no completado
      saveTasks(); // Guardar las tareas en localStorage
      renderTasks(document.querySelector(".tabs button.active").id); // Renderizar la lista de tareas según el tab activo
      taskInput.value = ""; // Borrar el contenido del campo de entrada
    }
  });

  // Manejar el evento cuando el usuario elimina todas las tareas
  deleteAllButton.addEventListener("click", () => {
    tasks = []; // Borrar todas las tareas
    saveTasks(); // Guardar las tareas en localStorage
    renderTasks(document.querySelector(".tabs button.active").id); // Renderizar la lista de tareas según el tab activo
  });

  // Manejar el evento cuando el usuario cambia de tab (Todas, Activas, Completadas)
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active")); // Quitar la clase 'active' de todos los tabs
      tab.classList.add("active"); // Agregar la clase 'active' al tab seleccionado
      renderTasks(tab.id); // Renderizar la lista de tareas según el tab seleccionado
    });
  });

  renderTasks("all"); // Renderizar todas las tareas al cargar la página
});
