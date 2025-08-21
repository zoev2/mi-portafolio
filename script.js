// Función genérica para manejar listas dinámicas
function manejarLista(formId, inputId, fechaId, listaId) {
  const form = document.getElementById(formId);
  const input = document.getElementById(inputId);
  const fecha = fechaId ? document.getElementById(fechaId) : null;
  const lista = document.getElementById(listaId);

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    if (input.value.trim() === "") return;

    const li = document.createElement("li");
    const texto = fecha ? `${input.value} (${fecha.value})` : input.value;

    const span = document.createElement("span");
    span.textContent = texto;
    li.appendChild(span);

    // Botón editar
    const btnEdit = document.createElement("button");
    btnEdit.textContent = "Editar";
    btnEdit.className = "btn-edit";
    btnEdit.onclick = () => {
      const nuevoTexto = prompt("Editar:", span.textContent);
      if (nuevoTexto) span.textContent = nuevoTexto;
    };
    li.appendChild(btnEdit);

    // Botón eliminar
    const btnDelete = document.createElement("button");
    btnDelete.textContent = "Eliminar";
    btnDelete.className = "btn-delete";
    btnDelete.onclick = () => li.remove();
    li.appendChild(btnDelete);

    lista.appendChild(li);

    input.value = "";
    if (fecha) fecha.value = "";
  });
}

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
  manejarLista("form-academico", "academico-input", "academico-fecha", "lista-academico");
  manejarLista("form-laboral", "laboral-input", "laboral-fecha", "lista-laboral");
  manejarLista("form-habilidad", "habilidad-input", null, "lista-habilidades");

  // Precargar tus datos iniciales
  const datosAcademicos = [
    "Bachiller (2020-2021) - Coglobal",
    "Curso de inglés B1 (2020) - AIES",
    "Universidad Santiago de Cali (2022-2025)"
  ];
  const datosLaborales = [
    "Mantenimiento de equipos médicos (2024)",
    "Logística en eventos de Cali",
    "Técnico en sistemas"
  ];
  const habilidades = [
    "Java",
    "SQL / Oracle APEX",
    "Inglés B1"
  ];

  datosAcademicos.forEach(est => {
    document.getElementById("lista-academico").innerHTML += `<li><span>${est}</span></li>`;
  });

  datosLaborales.forEach(job => {
    document.getElementById("lista-laboral").innerHTML += `<li><span>${job}</span></li>`;
  });

  habilidades.forEach(skill => {
    document.getElementById("lista-habilidades").innerHTML += `<li><span>${skill}</span></li>`;
  });
});
