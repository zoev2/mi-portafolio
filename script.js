document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("login").classList.remove("active");
  document.getElementById("calendar").classList.add("active");
});

function showPending() {
  document.getElementById("tasks-container").innerHTML = `
    <div class="task-card red">4 AGOSTO 2025</div>
    <div class="task-card red">7 AGOSTO 2025</div>
    <div class="task-card red">15 AGOSTO 2025</div>
  `;
}

function showCompleted() {
  document.getElementById("tasks-container").innerHTML = `
    <div class="task-card green">28 JUNIO 2025</div>
  `;
}

