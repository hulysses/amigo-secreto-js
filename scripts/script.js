let amigos = [];

const obterElemento = (id) => document.querySelector(id);

const criarElemento = (elemento) => document.createElement(elemento);

const validarInput = (value) => {
  if (value.trim() === "") {
    alert("Informe um nome para adicionar a lista de amigos.");
    return;
  }
};

const limparImput = (input) => (input.value = "");

const adicionarAmigo = () => {
  let ul = obterElemento("#names-list");
  let li = criarElemento("li");
  let input = obterElemento("#name");

  amigos.push(input.value);

  limparImput(input);

  li.textContent = amigos[amigos.length - 1];
  ul.appendChild(li);
};

const validarArray = () => {
  if (amigos.length < 2) {
    alert("Adicione pelo menos dois amigos para sortear.");
    return;
  }
};

const sortear = () => {
  validarArray();
};
