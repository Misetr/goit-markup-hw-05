
document.getElementById("orderButton").addEventListener("click", function() {
  document.getElementById("modal").style.display = "block";
});

// Закрытие модального окна при нажатии на крестик
document.getElementsByClassName("close")[0].addEventListener("click", function() {
  document.getElementById("modal").style.display = "none";
});

// Закрытие модального окна при клике вне окна
window.addEventListener("click", function(event) {
  if (event.target == document.getElementById("modal")) {
    document.getElementById("modal").style.display = "none";
  }
});
