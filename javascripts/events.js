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

  // Seu código abaixo
  let text = '{"texto":[' +
'{"titulo":"O que é","paragrafo":"O Imposto de Renda Pessoa Física (IRPF) é um tributo federal brasileiro que incide sobre os ganhos de pessoas físicas. Ele é administrado pela Receita Federal do Brasil e é uma das principais fontes de receita para o governo" },' +
'{"titulo":"Quem deve declarar","paragrafo":"Pessoas que tiveram rendimentos tributáveis (como salários, aposentadorias, aluguéis, entre outros) acima do limite estabelecido pela Receita Federal.", "paragrafo2":"Em 2023 este valor foide R$ 28.559,70 anuais, ou R$ 2.379,97 mensais" },' +
'{"titulo":"A periodicidade","paragrafo":"A declaração do Imposto de Renda Pessoa Física(IRPF) é obrigatória anualmente." },' +
'{"titulo":"Mão na massa", "paragrafo":"Agora que você já sabe o que é o IRPF (Imposto de Renda de Pessoa Física) e se deve ou não declarar, vamos aprender na prática como fazer isso!"}]}';
  
const obj = JSON.parse(text);
var num = 3;
// document.getElementById("teste").innerHTML =
// obj.texto[num].titulo + " <br> <br> " + obj.texto[num].paragrafo + " <br> <br>" + obj.texto[num].paragrafo2;

for(var x = 0; x < obj.texto.length; x++){
  const para = document.createElement("p");
  const para2 = document.createElement("p");
  const para3 = document.createElement("p");
  const node = document.createTextNode(obj.texto[x].titulo);
  const node2 = document.createTextNode(obj.texto[x].paragrafo);
  const node3 = document.createTextNode(obj.texto[x].paragrafo2);

  para.appendChild(node);
  para2.appendChild(node2);
  para3.appendChild(node3);
  document.getElementById("teste").appendChild(para);
  document.getElementById("teste").appendChild(para2);

  if(obj.texto[x].paragrafo2 != undefined){
    document.getElementById("teste").appendChild(para3);
    console.log("Entrou");
  }
}

})
