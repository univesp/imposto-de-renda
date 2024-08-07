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
'{"titulo":"Mão na massa", "paragrafo":"Agora que você já sabe o que é o IRPF (Imposto de Renda de Pessoa Física) e se deve ou não declarar, vamos aprender na prática como fazer isso!","imagem":"Caderno" },' + 
'{"paragrafo":"1","paragrafo2":"1","imagem":"texto" },' +
'{"titulo":"Reunindo as informações","paragrafo":"Para elaborar a declaração do Imposto de Renda Pessoa Física (IRPF) no Brasil, é essencial reunir uma série de documentos que comprovem os seus rendimentos, despesas, investimentos e outras informações relevantes.","paragrafo2":"Abaixo, uma lista geral de documentos que você pode precisar para realizar a sua declaração:","paragrafo3":"Documentos pessoais:","paragrafo4":"CPF (Cadastro de Pessoa Física)","paragrafo5":"Título de Eleitor","paragrafo6":"RG (Registro Geral) ou outro documento de autentificação oficial","paragrafo7":"Cópia da declaração do IRPF do ano anterior (caso tenha declarado","imagem":"Informacoes1" },' +
'{"titulo":"Reunindo as informações","paragrafo":"Comprovantes de Rendimentos:","paragrafo2":"Informe de Rendimentos fornecido pelo empregador ou fontes pagadoras","paragrafo3":"Extratos bancários (contas correntes, poupança, investimentos)","paragrafo4":"Informes de instituições financeiras sobre aplicações e investimentos geral ou outro documento de identificação oficial","imagem":"Informacoes2" },' +
'{"titulo":"Reunindo as informações","paragrafo":"Comprovantes de Pagamentos e Recebimentos:","paragrafo2":"Comprovantes de pagamento ou recebimento de aluguel","paragrafo3":"Comprovantes de pensão alimentícia (pagamentos ou recebimentos)","paragrafo4":"Comprovantes de despesas médicas e odontológicas","imagem":"Informacoes3" },' +
'{"titulo":"Reunindo as informações","paragrafo":"Comprovantes de Despesas Educacionais","paragrafo2":"Recibo e comprovantes de mensalidades escolares","paragrafo3":"Comprovantes de gastos com educação formal (cursos técnicos, graduação, pós-graduação)","imagem":"Informacoes4" },' +
'{"titulo":"Reunindo as informações","paragrafo":"Documentos de Bens e Direitos:","paragrafo2":"Documentos que comprovem a compra ou venda de bens (imóveis, veículos, etc.)","paragrafo3":"Documentação de dívidas e ônus sobre os bens.","imagem":"Informacoes5" },' +
'{"titulo":"Reunindo as Informações","paragrafo":"Informações sobre Dependentes:","paragrafo2":"CPF dos dependentes","paragrafo3":"Comprovantes de despesas com dependentes, como educação e saúde","imagem":"Informacoes6" },' +
'{"titulo":"Reunindo as Informações","paragrafo":"Informes de Planos de Saúde e Previdência:","paragrafo2":"Informes de pagamentos de planos de saúde","paragrafo3":"Informes de previdência privada","imagem":"Informacoes7" },' +
'{"titulo":"Reunindo as Informações","paragrafo":"Comprovantes de Pagamentos de Impostos:","paragrafo2":"Comprovantes de pagamentos de impostos com IPTU e IPVA","imagem":"Informacoes8" },' +
'{"titulo":"Reunindo as Informações","paragrafo":"Documentos de Identificação Bancária:","paragrafo2":"Número da conta bancária e para restituição ou débito automáticos.","imagem":"Informacoes9" },' +
'{"titulo":"Reunindo as informações","paragrafo":"Comprovantes de Pagamentos de Impostos:","paragrafo2":"Comprovantes de pagamentos de impostos com IPTU e IPVA","imagem":"Informacoes10"},' +
'{"titulo":"Reunindo as Informações","paragrafo":"Declaração do Ano Anterior:","paragrafo2":"Cópia da declaração do IRPF do ano anterior (caso tenha declarado)","imagem":"Informacoes11"},' +
'{"titulo":"Baixando/Instalando o programa","paragrafo":"Depois de reunir e organizar toda a documentação, agora é hora de baixar o programa do IRPF da Receita Federal para dar início ao preenchimento da declaração.","imagem":"Programa1"},' +
'{"titulo":"Baixando/Instalando o programa","paragrafo":"ATENÇÃO!","paragrafo2":"Todo ano o programa de Declaração do IRPF da Receita Federal é atualizado. Isso significa que você deverá refazer esse procedimento anualmente.","paragrafo3":"A Receita Federal do Brasil disponibiliza 2 maneiras para você preencher a sua declaração:","paragrafo4":"Declaração online (2.1)","paragrafo5":"Através de Programa para Computador (2.2)","imagem":"Programa2" },' +
'{"titulo":"Declaração Online","paragrafo":"Na Declaração Online você vai precisar ter um login e senha no portal Gov.br.","paragrafo2":"Após criar a senha e efetuar o login no Gov.br, clique no menu *Serviços*:","imagem":"Programa3" },' +
'{"titulo":"Declaração Online","paragrafo":"Escolha essa opção","imagem":"Programa3" },' +
'{"titulo":"Declaração Online","paragrafo":"Escolha essa opção","imagem":"Programa3" },' +
'{"titulo":"Declaração Online","paragrafo":"Escolha essa opção","imagem":"Programa3" },' +
'{"titulo":"Declaração Online","paragrafo":"Escolha essa opção","imagem":"Programa3" },' +
'{"titulo":"Declaração Online","paragrafo":"Clique em iniciar","imagem":"Programa3" },' +
'{"titulo":"Declaração Online","paragrafo":"Preencha com seu CPF para confirmar","imagem":"Programa3" },' +
'{"titulo":"Declaração Online","paragrafo":"Digite sua senha e clique em *Enviar*","imagem":"Programa3" },' +
'{"titulo":"Declaração Online","paragrafo":"Clique em *Fazer Declaração*","paragrafo2":"No próximo passo você será levado à tela do preenchimento da sua declaração, a qual veremos com detalhes no item 3: Preenchimento da Declaração.","imagem":"Programa3" },' +
'{\"titulo\":\"Programa para Computador\",\"paragrafo\":\"No seu navegador, digite: \\\"Download IRPF 2024\\\"\",\"paragrafo2\":\"Em seguida, clique na opção \\\"Download do Programa de Imposto de Renda\\\".\",\"imagem\":\"Computador\" },' +
'{\"titulo\":\"Programa para Computador\",\"paragrafo\":\"Clique em \\\"Baixar programa\\\"\",\"imagem\":\"Programa1\" },' +
'{\"titulo\":\"Programa para Computador\",\"paragrafo\":\"Escolha a pasta de destino do instalador e clique em \\\"Salvar\\\"\",\"imagem\":\"Programa1\" },' +
'{\"titulo\":\"Programa para Computador\",\"paragrafo\":\"Clique em \\\"Avançar\\\"\",\"imagem\":\"Programa1\"},' +
'{"titulo":"Programa para Computador","paragrafo":"Aguarde a instalação","imagem":"Programa1" },' +
'{\"titulo\":\"Programa para computador\",\"paragrafo\":\"Concluída a instalação, clicar em \\\"Terminar.\\\"\",\"imagem\":\"Programa1\" },' +
'{"titulo":"Programa para computador","paragrafo":"Vá ao local onde salvou o arquivo, e clique duas vezes para abrir o programa.","imagem":"Programa1" },' +
'{"titulo":"Programa para Computador","paragrafo":"Pronto! Depois de concluída a instalação, vamos ao preenchimento da Declaração do seu IRPF.","imagem":"Programa1" },' +
'{"titulo":"Preenchendo a declaração","paragrafo":"Agora chegou a hora de pôr a mão na massa e preencher a sua Declaração do IRPF.","paragrafo2":"Para isso, preparamos um passo a passo com os principais campos a serem preenchidos.","paragrafo3":"Vejamos:","imagem":"Declaracao" },' +
'{"titulo":"Preenchendo a declaração","paragrafo":"Essa é a tela inicial do programa de declaração:","imagem":"Declaracao" },' +
'{\"titulo\":\"Preenchendo a declaração\",\"paragrafo\":\"Clicar em \\\"Iniciar Declaração em Branco\\\"\",\"imagem\":\"Declaracao\" },' +
'{\"titulo\":\"Preenchendo a declaração\",\"paragrafo\":\"Preencher dados com seu CPF e Nome completo nos respectivos campos e, em seguida, clicar em \\\"OK\\\".\",\"imagem\":\"Declaracao\" },' +
'{\"titulo\":\"Preenchendo a declaração\",\"paragrafo\":\"Nas \\\"Fichas de Declaração\\\" escolher \\\"Identificação do Contribuinte\\\"\",\"imagem\":\"Declaracao\" },' +
'{"titulo":"Preenchendo a declaração","imagem":"Texto2" },' +
'{"titulo":"Preenchendo a declaração","imagem":"Texto3" },' +
'{\"titulo\":\"Preenchendo a declaração\",\"paragrafo\":\"Nas \\\"Fichas de Declaração\\\" escolher \\\"Dependentes\\\". Caso não possua dependentes, pule essa etapa.\",\"imagem\":\"Declaracao\" },' +
'{\"titulo\":\"Preenchendo a declaração\",\"paragrafo\":\"Para incluir os dados do dependente, clique em \\\"Novo\\\".\",\"imagem\":\"Declaracao\" },' +
'{\"titulo\":\"Preenchendo a declaração\",\"paragrafo\":\"Preencher os dados do dependente e em seguida clicar em \\\"OK\\\" (caso tenha mais de 1 dependente, após clicar em \\\"OK\\\" refaça o passo-a-passo)\",\"imagem\":\"Declaracao\" },' +
'{\"titulo\":\"Preenchendo a declaração\",\"paragrafo\":\"Inserir os dados da fonte pagadora e os valores dos rendimentos. Em seguida, clicar em \\\"OK\\\"\",\"imagem\":\"Declaracao\" },' +
'{"titulo":"Preenchendo a declaração","imagem":"1" },' +
'{"titulo":"Preenchendo a declaração","imagem":"1" },' +
'{"titulo":"Preenchendo a declaração","paragrafo":"Agora, vamos informar as despesas que tivemos ao longo do ano com médicos, dentistas, hospitais, educação etc.","imagem":"Declaracao" },' +
'{\"titulo\":\"Preenchendo a declaração\",\"paragrafo\":\"Após escolher o tipo e despesa, preencher os dados como CNPJ, nome e descrição da despesa. Em seguida, clique em \\\"OK\\\".\",\"imagem\":\"Declaracao\" },' +
'{\"titulo\":\"Preenchendo a declaração\",\"paragrafo\":\"Declaração de Bens e Direitos: nessa ficha você vai declarar todos os seus bens, tais como imóveis, automóvel, etc. Não se esquceça de declarar todos os seus bens, um por um. Clique em \\\"Novo\\\" para começar a preencher a ficha.\",\"imagem\":\"Declaracao\" },' +
'{"titulo":"Preenchendo a declaração","paragrafo":"Escolha o grupo (tipo) de bem e preencha com as informações solicitadas.","imagem":"Declaracao" },' +
'{\"titulo\":\"Preenchendo a declaração\",\"paragrafo\":\"Se você tiver contraído algum empréstimo ou tem  alguma dívida, você vai declara em \\\"Dívidas e Ônus Reais\\\" e clicar em \\\"Novo\\\".\",\"imagem\":\"Declaracao\" },' +
'{"titulo":"Conferindo/Salvando sua declaração","paragrafo":"Depois de ter preenchido sua Declaração Anual do IRPF, agora é preciso verificar se ainda há alguma pendência ou se sua declaração contém algum erro.","imagem":"Declaracao" },' +
'{\"titulo\":\"Conferindo/Salvando sua declaração\",\"paragrafo\":\"Para isso basta clicar no botão \\\"Verificar Pendências\\\", localizado na parte inferior da lista das Fichas de Declaração.\",\"paragrafo2\":\"Corrigir/complementar as informações que aparecem no campo \\\"Pendências\\\"\",\"imagem\":\"Declaracao\" },' +
'{"titulo":"1","paragrafo":"1","imagem":"1" },' +
'{"titulo":"1","paragrafo":"1","imagem":"1" },' +
'{"titulo":"1","paragrafo":"1","imagem":"1" },' +
'{"titulo":"1","paragrafo":"1","imagem":"1" },' +
'{"titulo":"1","paragrafo":"1","imagem":"1" },' +
'{"titulo":"1","paragrafo":"1","imagem":"1"}]}';
  
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
    const para4 = document.createElement("p");
    const para5 = document.createElement("p");
    const para6 = document.createElement("p");
    const para7 = document.createElement("p");
    const para8 = document.createElement("p");
    const node = document.createTextNode(obj.texto[num].titulo);
    const node2 = document.createTextNode(obj.texto[num].paragrafo);
    const node3 = document.createTextNode(obj.texto[num].paragrafo2);
    const node4 = document.createTextNode(obj.texto[num].paragrafo3);
    const node5 = document.createTextNode(obj.texto[num].paragrafo4);
    const node6 = document.createTextNode(obj.texto[num].paragrafo5);
    const node7 = document.createTextNode(obj.texto[num].paragrafo6);
    const node8 = document.createTextNode(obj.texto[num].paragrafo7);

    para.appendChild(node);
    para2.appendChild(node2);
    para3.appendChild(node3);
    para4.appendChild(node4);
    para5.appendChild(node5);
    para6.appendChild(node6);
    para7.appendChild(node7);
    para8.appendChild(node8);
    //renderiza na tela o titulo e paragrafo
    if(obj.texto[num].titulo != undefined){
      document.getElementById("teste").appendChild(para);
    }
    if(obj.texto[num].paragrafo != undefined){
      document.getElementById("teste").appendChild(para2);
    }
    if(obj.texto[num].paragrafo2 != undefined){
      document.getElementById("teste").appendChild(para3);
    }
    if(obj.texto[num].paragrafo3 != undefined){
      document.getElementById("teste").appendChild(para4);
    }
    if(obj.texto[num].paragrafo4 != undefined){
      document.getElementById("teste").appendChild(para5);
    }
    if(obj.texto[num].paragrafo5 != undefined){
      document.getElementById("teste").appendChild(para6);
    }
    if(obj.texto[num].paragrafo6 != undefined){
      document.getElementById("teste").appendChild(para7);
    }
    if(obj.texto[num].paragrafo7 != undefined){
      document.getElementById("teste").appendChild(para8);
    }
    let novoCaminho;
    if(obj.texto[num].imagem.length > 1){
      novoCaminho = `assets/${obj.texto[num].imagem}.svg`;
    } else {
      novoCaminho = `assets/default.png`;
    }
    imagemTela.src = novoCaminho;
    console.log(obj.texto[num].imagem.length > 1)
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
