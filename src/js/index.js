// Etapa 1 - Pegar o botão "Aplicar Filtros" do HTML
const botaoFiltrar = document.querySelector(".btn-filtrar");

// Etapa 2 - Quando o botão for clicado, executamos a função
botaoFiltrar.addEventListener("click", function () {
  // Etapa 3 - Pegar os valores dos filtros do usuário
  const categoriaSelecionada = document.querySelector("#categoria").value;
  const precoMaximoSelecionado = document.querySelector("#preco").value;

  // Etapa 4 - Pegar todas as cartas da tela
  const cartas = document.querySelectorAll(".carta");

  // Vamos verificar cada carta
  cartas.forEach(function (carta) {
    const categoriaDaCarta = carta.dataset.categoria;
    const precoDaCarta = carta.dataset.preco;

    // Começamos assumindo que a carta deve aparecer
    let deveMostrar = true;

    // Se o usuário escolheu uma categoria
    if (categoriaSelecionada !== "") {
      if (categoriaSelecionada.toLowerCase() !== categoriaDaCarta.toLowerCase()) {
        deveMostrar = false;
      }
    }

    // Se o usuário informou um preço máximo
    if (precoMaximoSelecionado !== "") {
      // Aqui comparamos como strings, mas funciona bem em casos simples
      if (Number(precoDaCarta) > Number(precoMaximoSelecionado)) {
        deveMostrar = false;
      }
    }

    // Mostrar ou esconder a carta
    if (deveMostrar) {
      carta.classList.add("mostrar");
      carta.classList.remove("esconder");
    } else {
      carta.classList.remove("mostrar");
      carta.classList.add("esconder");
    }
  });
});
