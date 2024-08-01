$(document).ready(function(){

  //////////////////////////////////////////////////////////////////
  // HEADER DINÂMICO
  // Mostra header somente no início da página.
  // Descomentar caso utilizada a classe .header-dinamico. Caso contrário, deletar.

    $(window).scroll(function(){
      var nav = $(".header-dinamico .container");
      var scroll = $(window).scrollTop();
      if(scroll == 0){
        nav.fadeIn();
      } else {
        nav.fadeOut();
      }
    });

  //////////////////////////////////////////////////////////////////
  
  //Carregar os dados do json
  async function carregarDados() {
    try {
      const resposta = await fetch('dados.json');
      if (!resposta.ok) {
        throw new Error('Erro ao carregar o arquivo JSON');
      }
      const dados = await resposta.json();
      return dados.texto; // Retorna os dados
    } catch (error) {
      console.error('Erro:', error);
    }
  }

  //////////////////////////////////////////////////////////////////

  // Seu código abaixo
  let text = '{"texto":[' +
'{"titulo":"O que é","paragrafo":"O Imposto de Renda Pessoa Física (IRPF) é um tributo federal brasileiro que incide sobre os ganhos de pessoas físicas. Ele é administrado pela Receita Federal do Brasil e é uma das principais fontes de receita para o governo","imagem":"LogoReceitaFederal"},' +
'{"titulo":"Quem deve declarar","paragrafo":"Pessoas que tiveram rendimentos tributáveis (como salários, aposentadorias, aluguéis, entre outros) acima do limite estabelecido pela Receita Federal.", "paragrafo2":"Em 2023 este valor foide R$ 28.559,70 anuais, ou R$ 2.379,97 mensais","imagem":"Dinheiro"},' +
'{"titulo":"A periodicidade","paragrafo":"A declaração do Imposto de Renda Pessoa Física(IRPF) é obrigatória anualmente.","imagem":"Calendario" },' +
'{"titulo":"Mão na massa", "paragrafo":"Agora que você já sabe o que é o IRPF (Imposto de Renda de Pessoa Física) e se deve ou não declarar, vamos aprender na prática como fazer isso!","imagem":"Caderno" }]}';
  
const obj = JSON.parse(text);
var num;
let iniciar = document.getElementById("iniciar");
let avancar = document.getElementById("avancar");
let voltar = document.getElementById("voltar");
let teste = document.getElementById("teste");
let botoes = document.getElementById("container-botoes");
let telaConteudo = document.getElementById("tela-conteudo");
let containerSlide = document.getElementById("container-slide");
let containerBotoes = document.getElementById("container-botoes");
let imagemTela = document.getElementById("imagem-tela");
let rodape = document.getElementById("rodape");

iniciar.addEventListener('click', function(){
  num = 0;
  RemoverTextoTela();
  RenderizarTextoTela();

  botoes.classList.remove("hidden-div");
  containerSlide.classList.remove("hidden-div");
  containerBotoes.classList.remove("hidden-div");

  telaConteudo.classList.add("hidden-div");

  rodape.innerText = `1 / ${obj.texto.length}`


  if(num != undefined){
    console.log("matei a charada");
    iniciar.innerText = "Reiniciar";
  }
})

//evento de click para avançar o texto
  avancar.addEventListener('click', function(){

    if(num < obj.texto.length-1){
      console.log("click");
      num += 1;
      console.log(num);
      RemoverTextoTela();
      RenderizarTextoTela();
      ContagemRodape(num);
    }
  });
//evento de click para voltar o texto
  voltar.addEventListener('click', function(){
    if(num > 0){
      console.log("click");
      num -= 1;
      console.log(num);
      RemoverTextoTela();
      RenderizarTextoTela();
      ContagemRodape(num);
    }
  });

  function RenderizarTextoTela(){
    //cria o titulo e paragrafos
    const para = document.createElement("p");
    const para2 = document.createElement("p");
    const para3 = document.createElement("p");
    const node = document.createTextNode(obj.texto[num].titulo);
    const node2 = document.createTextNode(obj.texto[num].paragrafo);
    const node3 = document.createTextNode(obj.texto[num].paragrafo2);

    para.appendChild(node);
    para2.appendChild(node2);
    para3.appendChild(node3);
    //renderiza na tela o titulo e paragrafo
    document.getElementById("teste").appendChild(para);
    document.getElementById("teste").appendChild(para2);
    if(obj.texto[num].paragrafo2 != undefined){
      document.getElementById("teste").appendChild(para3);
    }
    let novoCaminho = `/assets/${obj.texto[num].imagem}.svg`;
    imagemTela.src = novoCaminho;
  }

  function RemoverTextoTela(){
    document.getElementById("teste").removeChild(teste.firstChild);
    while (teste.firstChild) {
      teste.removeChild(teste.firstChild);
  }
  }

  function ContagemRodape(num){
    rodape.innerText = `${num+1} / ${obj.texto.length}`;
  }

});
