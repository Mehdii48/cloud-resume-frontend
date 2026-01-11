// Muestra algo mientras llega la respuesta
document.getElementById("counter").innerText = "loading...";

// Llamada a tu API Gateway
fetch("https://56spe8rw4a.execute-api.us-east-1.amazonaws.com/prod/count")
  .then(response => response.json())
  .then(data => {
    // Aquí actualizamos el contador con el valor real
    document.getElementById("counter").innerText = data.count;
  })
  .catch(err => {
    console.error(err);
    document.getElementById("counter").innerText = "error";
  });
