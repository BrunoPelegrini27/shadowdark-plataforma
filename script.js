document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("formulario-criar");
  const listaCenarios = document.getElementById("lista-cenarios");

  // Salvar cenário localmente
  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = document.getElementById("nome-cenario").value;
    const descricao = document.getElementById("descricao-cenario").value;

    if (nome && descricao) {
      const novoCenario = { nome, descricao };
      salvarCenario(novoCenario);
      atualizarListaCenarios();
      formulario.reset();
    }
  });

  // Função para salvar cenário no localStorage
  function salvarCenario(cenario) {
    let cenarios = JSON.parse(localStorage.getItem("cenarios")) || [];
    cenarios.push(cenario);
    localStorage.setItem("cenarios", JSON.stringify(cenarios));
  }

  // Função para atualizar a lista de cenários
  function atualizarListaCenarios() {
    listaCenarios.innerHTML = "";
    const cenarios = JSON.parse(localStorage.getItem("cenarios")) || [];

    cenarios.forEach((cenario, index) => {
      const item = document.createElement("li");
      item.textContent = `${cenario.nome}: ${cenario.descricao}`;
      listaCenarios.appendChild(item);
    });
  }

  // Carregar cenários ao iniciar
  atualizarListaCenarios();
});
