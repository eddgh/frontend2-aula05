function darkMode() {
    // var element = document.getElementByClassName("dark");
    // element.style.backgroundColor = "red";
    // element.classList.toggle("escuro");

    let fundo = document.querySelector(".dark");
    fundo.classList.toggle("escuro");

    let h2P = document.querySelector(".container");
    h2P.classList.toggle("cabecalhos__e__itens")
  }