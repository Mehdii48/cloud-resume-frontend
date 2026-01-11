// Muestra algo mientras llega la respuesta
document.getElementById("counter").innerText = "loading...";

// Llamada a tu API Gateway
fetch("https://5iohpvqsgvcmxuoahimsislpru0ziuge.lambda-url.us-east-1.on.aws/")
  .then(response => response.json())
  .then(data => {
    // Aquí actualizamos el contador con el valor real
    document.getElementById("counter").innerText = data.count;
  })
  .catch(err => {
    console.error(err);
    document.getElementById("counter").innerText = "error";
  });
