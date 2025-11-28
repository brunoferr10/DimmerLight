export function wakeBackend() {
  fetch("https://dimmerlight.onrender.com/artistas")
    .then(() => console.log("🚀 Backend acordado!"))
    .catch(() => console.log("⚠ Backend ainda iniciando..."));
}
