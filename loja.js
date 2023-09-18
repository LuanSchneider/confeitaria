// Produto
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}

// Carrinho
class Carrinho {
    constructor() {
        this.produtos = [];
    }

    adicionarProduto(produto) {
        this.produtos.push(produto);
    }

    calcularTotal() {
        let total = 0;
        for(let produto of this.produtos) {
            total += produto.preco;
        }
        return total;
    }
}

// Criando produtos
let bolo = new Produto("Bolo de Chocolate", 20);
let torta = new Produto("Torta de Maçã", 15);
let torta2=new Produto(" torta de limão ",25);
let torta2=new Produto(" bolo de morango ",45);
let torta2=new Produto(" torta de limão ",25);
let torta2=new Produto(" torta de limão ",25);
let torta2=new Produto(" torta de limão ",25);
let torta2=new Produto(" torta de limão ",25);
let torta2=new Produto(" torta de limão ",25);
let torta2=new Produto(" torta de limão ",25);
let torta2=new Produto(" torta de limão ",25);

// Criando carrinho
let carrinho = new Carrinho();

// Adicionando produtos ao carrinho
carrinho.adicionarProduto(bolo);
carrinho.adicionarProduto(torta);

// Calculando o total
let total = carrinho.calcularTotal();
console.log(`O total do seu pedido é: R$${total}`);
// Lista de itens
let itens = [
    { nome: 'Item 1', preco: 10, pago: false },
    { nome: 'Item 2', preco: 20, pago: false },
    { nome: 'Item 3', preco: 30, pago: false }
  ];
  
  // Função para pagar um item
  function pagarItem(index) {
    if (index >= 0 && index < itens.length) {
      itens[index].pago = true;
      console.log(`O pagamento do ${itens[index].nome} foi confirmado.`);
    } else {
      console.log('Índice inválido');
    }
  }
  
  // Pagar o segundo item
  pagarItem(1);
  
  // Verificar o status de pagamento dos itens
  for (let item of itens) {
    console.log(`${item.nome} - Pago: ${item.pago ? 'Sim' : 'Não'}`);
  }
  