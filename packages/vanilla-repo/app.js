const app = document.getElementById("app");
window.run = () => app.innerText="Vanilla App is now loaded successfully!";
app.innerHTML = '<button onclick="run()">Load</button>';