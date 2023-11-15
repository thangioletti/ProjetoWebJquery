function showModal() {
  let modal = document.querySelector("#modal");
  modal.classList.add(`modal-active`);
}

function closeModal() {
  let modal = document.querySelector("#modal");
  modal.classList.remove(`modal-active`);
}

function createElementPureJs() {
  let card = document.createElement(`div`);
  card.classList.add("card");
  card.classList.add("border-2");
  card.classList.add("p-2");
  card.classList.add("flex");
  card.classList.add("flex-col");
  card.classList.add("items-center");

  let img = document.createElement(`img`);
  img.setAttribute(`src`, `produto2.png`);
  img.setAttribute(`alt`, `produto`);
  img.classList.add("h-80");

  card.append(img);

  let h1 = document.createElement(`h1`);
  h1.innerHTML = "Nome do meu produto";
  h1.classList.add("text-sm");
  h1.classList.add("mt-4");

  card.append(h1);

  let container = document.querySelector("#container");
  container.append(card);
}

let openModal = document.querySelectorAll(".open-modal");
for (let open of openModal) {
  open.addEventListener(`click`, showModal);
}

const btnLogin = document.querySelector("#btn-login");
btnLogin.addEventListener(`click`, () => {
  const email = document.querySelector("#email");
  const senha = document.querySelector("#senha");

  if (!email.value) {
    email.classList.add(`invalid`);
  } else {
    email.classList.remove(`invalid`);
  }

  if (!senha.value) {
    senha.classList.add(`invalid`);
  } else {
    senha.classList.remove(`invalid`);
  }
});

const lista = [
  {
    imagem: "produto.jpg",
    nome: "Produto 3",
    preco: 185,
    parcelas: 12,
    valorParcela: 18,
  },
  {
    imagem: "produto.jpg",
    nome: "Produto 4",
    preco: 185,
    parcelas: 12,
    valorParcela: 18,
  },
];
const produto1 = {
  imagem: "produto.jpg",
  nome: "Produto 1",
  preco: 185,
  parcelas: 12,
  valorParcela: 18,
};

const produto2 = {
  imagem: "produto2.png",
  nome: "Produto 2",
  preco: 195,
  parcelas: 12,
  valorParcela: 19,
};

lista.push(produto1);
lista.push(produto2);

function createElementProduto(produto) {
    const novoCard = $("#modelo").clone().removeAttr(`id`).removeClass('hidden');
    $('img', novoCard).attr(`src`, produto.imagem);
    $('h1', novoCard).html(produto.nome);
    $('.preco', novoCard).html(produto.preco);
    $('.parcelas', novoCard).html(produto.parcelas);
    $('.valor-parcela', novoCard).html(produto.valorParcela);
    $("#container").append($(novoCard));
}

for(let produto of lista) {
    createElementProduto(produto);
}


/*<div class="card border-2 p-2 flex flex-col items-center">
    <img src="produto.jpg" alt="Produto" class="h-80" />
    <h1 class="text-sm mt-4">
    Whisky Wild Turkey 101 Bourbon 1 Litro - Original
    </h1>
    <div class="text-2xl my-2 font-bold">R$ 185</div>
    <div class="text-sm">
    em <span class="text-lime-700">12x R$ 17,98</span>
    </div>
</div>*/
