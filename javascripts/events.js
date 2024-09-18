$(document).ready(function () {

  //////////////////////////////////////////////////////////////////
  // HEADER DINÂMICO
  // Mostra header somente no início da página.
  // Descomentar caso utilizada a classe .header-dinamico. Caso contrário, deletar.

  $(window).scroll(function () {
    var nav = $(".header-dinamico .container");
    var scroll = $(window).scrollTop();
    if (scroll == 0) {
      nav.fadeIn();
    } else {
      nav.fadeOut();
    }
  });

  //////////////////////////////////////////////////////////////////
  ////variáveis
  var num;
  var obj = null;
  let iniciar = document.getElementById("iniciar");
  let reiniciar = document.getElementById("reiniciar");
  let avancar = document.getElementById("avancar");
  let voltar = document.getElementById("voltar");
  let conteudoSlides = document.getElementById("conteudo-slides");
  let botoes = document.getElementById("container-botoes");
  let telaConteudo = document.getElementById("tela-conteudo");
  let containerSlide = document.getElementById("container-slide");
  let containerBotoes = document.getElementById("container-botoes");
  let imagemTela = document.getElementById("imagem-tela");
  let rodape = document.getElementById("rodape");
  let menu1 = document.getElementById("menu1");
  let menu2 = document.getElementById("menu2");
  let menu3 = document.getElementById("menu3");
  let menu4 = document.getElementById("menu4");
  let menu5 = document.getElementById("menu5");
  let menu6 = document.getElementById("menu6");
  let tutorial = document.getElementById("tutorial");
  let fechar = document.getElementById("fechar");
  let animation = document.getElementById("tela-paragrafos");
  //////////////////////////////////////////////////////////////////

  // let text = '{"texto":[' +
  // '{"titulo":"O que é","paragrafo":"O Imposto de Renda Pessoa Física (IRPF) é um tributo federal brasileiro que incide sobre os ganhos de pessoas físicas. Ele é administrado pela Receita Federal do Brasil e é uma das principais fontes de receita para o governo","imagem":"LogoReceitaFederal"},' +
  // '{"titulo":"Quem deve declarar","paragrafo":"Pessoas que tiveram rendimentos tributáveis (como salários, aposentadorias, aluguéis, entre outros) acima do limite estabelecido pela Receita Federal.", "paragrafo2":"Em 2023 este valor foide R$ 28.559,70 anuais, ou R$ 2.379,97 mensais","imagem":"Dinheiro"},' +
  // '{"titulo":"A periodicidade","paragrafo":"A declaração do Imposto de Renda Pessoa Física(IRPF) é obrigatória anualmente.","imagem":"Calendario" },' +
  // '{"titulo":"Mão na massa", "paragrafo":"Agora que você já sabe o que é o IRPF (Imposto de Renda de Pessoa Física) e se deve ou não declarar, vamos aprender na prática como fazer isso!","imagem":"Caderno" },' + 
  // '{"paragrafo":"1","paragrafo2":"1","imagem":"texto" },' +
  // '{"titulo":"Reunindo as informações","paragrafo":"Para elaborar a declaração do Imposto de Renda Pessoa Física (IRPF) no Brasil, é essencial reunir uma série de documentos que comprovem os seus rendimentos, despesas, investimentos e outras informações relevantes.","paragrafo2":"Abaixo, uma lista geral de documentos que você pode precisar para realizar a sua declaração:","paragrafo3":"Documentos pessoais:","paragrafo4":"CPF (Cadastro de Pessoa Física)","paragrafo5":"Título de Eleitor","paragrafo6":"RG (Registro Geral) ou outro documento de autentificação oficial","paragrafo7":"Cópia da declaração do IRPF do ano anterior (caso tenha declarado","imagem":"Informacoes1" },' +
  // '{"titulo":"Reunindo as informações","paragrafo":"Comprovantes de Rendimentos:","paragrafo2":"Informe de Rendimentos fornecido pelo empregador ou fontes pagadoras","paragrafo3":"Extratos bancários (contas correntes, poupança, investimentos)","paragrafo4":"Informes de instituições financeiras sobre aplicações e investimentos geral ou outro documento de identificação oficial","imagem":"Informacoes2" },' +
  // '{"titulo":"Reunindo as informações","paragrafo":"Comprovantes de Pagamentos e Recebimentos:","paragrafo2":"Comprovantes de pagamento ou recebimento de aluguel","paragrafo3":"Comprovantes de pensão alimentícia (pagamentos ou recebimentos)","paragrafo4":"Comprovantes de despesas médicas e odontológicas","imagem":"Informacoes3" },' +
  // '{"titulo":"Reunindo as informações","paragrafo":"Comprovantes de Despesas Educacionais","paragrafo2":"Recibo e comprovantes de mensalidades escolares","paragrafo3":"Comprovantes de gastos com educação formal (cursos técnicos, graduação, pós-graduação)","imagem":"Informacoes4" },' +
  // '{"titulo":"Reunindo as informações","paragrafo":"Documentos de Bens e Direitos:","paragrafo2":"Documentos que comprovem a compra ou venda de bens (imóveis, veículos, etc.)","paragrafo3":"Documentação de dívidas e ônus sobre os bens.","imagem":"Informacoes5" },' +
  // '{"titulo":"Reunindo as Informações","paragrafo":"Informações sobre Dependentes:","paragrafo2":"CPF dos dependentes","paragrafo3":"Comprovantes de despesas com dependentes, como educação e saúde","imagem":"Informacoes6" },' +
  // '{"titulo":"Reunindo as Informações","paragrafo":"Informes de Planos de Saúde e Previdência:","paragrafo2":"Informes de pagamentos de planos de saúde","paragrafo3":"Informes de previdência privada","imagem":"Informacoes7" },' +
  // '{"titulo":"Reunindo as Informações","paragrafo":"Comprovantes de Pagamentos de Impostos:","paragrafo2":"Comprovantes de pagamentos de impostos com IPTU e IPVA","imagem":"Informacoes8" },' +
  // '{"titulo":"Reunindo as Informações","paragrafo":"Documentos de Identificação Bancária:","paragrafo2":"Número da conta bancária e para restituição ou débito automáticos.","imagem":"Informacoes9" },' +
  // '{"titulo":"Reunindo as informações","paragrafo":"Comprovantes de Pagamentos de Impostos:","paragrafo2":"Comprovantes de pagamentos de impostos com IPTU e IPVA","imagem":"Informacoes10"},' +
  // '{"titulo":"Reunindo as Informações","paragrafo":"Declaração do Ano Anterior:","paragrafo2":"Cópia da declaração do IRPF do ano anterior (caso tenha declarado)","imagem":"Informacoes11"},' +
  // '{"titulo":"Baixando/Instalando o programa","paragrafo":"Depois de reunir e organizar toda a documentação, agora é hora de baixar o programa do IRPF da Receita Federal para dar início ao preenchimento da declaração.","imagem":"Programa1"},' +
  // '{"titulo":"Baixando/Instalando o programa","paragrafo":"ATENÇÃO!","paragrafo2":"Todo ano o programa de Declaração do IRPF da Receita Federal é atualizado. Isso significa que você deverá refazer esse procedimento anualmente.","paragrafo3":"A Receita Federal do Brasil disponibiliza 2 maneiras para você preencher a sua declaração:","paragrafo4":"Declaração online (2.1)","paragrafo5":"Através de Programa para Computador (2.2)","imagem":"Programa2" },' +
  // '{"titulo":"Declaração Online","paragrafo":"Na Declaração Online você vai precisar ter um login e senha no portal Gov.br.","paragrafo2":"Após criar a senha e efetuar o login no Gov.br, clique no menu *Serviços*:","imagem":"Programa3" },' +
  // '{"titulo":"Declaração Online","paragrafo":"Escolha essa opção","imagem":"Programa3" },' +
  // '{"titulo":"Declaração Online","paragrafo":"Escolha essa opção","imagem":"Programa3" },' +
  // '{"titulo":"Declaração Online","paragrafo":"Escolha essa opção","imagem":"Programa3" },' +
  // '{"titulo":"Declaração Online","paragrafo":"Escolha essa opção","imagem":"Programa3" },' +
  // '{"titulo":"Declaração Online","paragrafo":"Clique em iniciar","imagem":"Programa3" },' +
  // '{"titulo":"Declaração Online","paragrafo":"Preencha com seu CPF para confirmar","imagem":"Programa3" },' +
  // '{"titulo":"Declaração Online","paragrafo":"Digite sua senha e clique em *Enviar*","imagem":"Programa3" },' +
  // '{"titulo":"Declaração Online","paragrafo":"Clique em *Fazer Declaração*","paragrafo2":"No próximo passo você será levado à tela do preenchimento da sua declaração, a qual veremos com detalhes no item 3: Preenchimento da Declaração.","imagem":"Programa3" },' +
  // '{\"titulo\":\"Programa para Computador\",\"paragrafo\":\"No seu navegador, digite: \\\"Download IRPF 2024\\\"\",\"paragrafo2\":\"Em seguida, clique na opção \\\"Download do Programa de Imposto de Renda\\\".\",\"imagem\":\"Computador\" },' +
  // '{\"titulo\":\"Programa para Computador\",\"paragrafo\":\"Clique em \\\"Baixar programa\\\"\",\"imagem\":\"Programa1\" },' +
  // '{\"titulo\":\"Programa para Computador\",\"paragrafo\":\"Escolha a pasta de destino do instalador e clique em \\\"Salvar\\\"\",\"imagem\":\"Programa1\" },' +
  // '{\"titulo\":\"Programa para Computador\",\"paragrafo\":\"Clique em \\\"Avançar\\\"\",\"imagem\":\"Programa1\"},' +
  // '{"titulo":"Programa para Computador","paragrafo":"Aguarde a instalação","imagem":"Programa1" },' +
  // '{\"titulo\":\"Programa para computador\",\"paragrafo\":\"Concluída a instalação, clicar em \\\"Terminar.\\\"\",\"imagem\":\"Programa1\" },' +
  // '{"titulo":"Programa para computador","paragrafo":"Vá ao local onde salvou o arquivo, e clique duas vezes para abrir o programa.","imagem":"Programa1" },' +
  // '{"titulo":"Programa para Computador","paragrafo":"Pronto! Depois de concluída a instalação, vamos ao preenchimento da Declaração do seu IRPF.","imagem":"Programa1" },' +
  // '{"titulo":"Preenchendo a declaração","paragrafo":"Agora chegou a hora de pôr a mão na massa e preencher a sua Declaração do IRPF.","paragrafo2":"Para isso, preparamos um passo a passo com os principais campos a serem preenchidos.","paragrafo3":"Vejamos:","imagem":"Declaracao" },' +
  // '{"titulo":"Preenchendo a declaração","paragrafo":"Essa é a tela inicial do programa de declaração:","imagem":"Declaracao" },' +
  // '{\"titulo\":\"Preenchendo a declaração\",\"paragrafo\":\"Clicar em \\\"Iniciar Declaração em Branco\\\"\",\"imagem\":\"Declaracao\" },' +
  // '{\"titulo\":\"Preenchendo a declaração\",\"paragrafo\":\"Preencher dados com seu CPF e Nome completo nos respectivos campos e, em seguida, clicar em \\\"OK\\\".\",\"imagem\":\"Declaracao\" },' +
  // '{\"titulo\":\"Preenchendo a declaração\",\"paragrafo\":\"Nas \\\"Fichas de Declaração\\\" escolher \\\"Identificação do Contribuinte\\\"\",\"imagem\":\"Declaracao\" },' +
  // '{"titulo":"Preenchendo a declaração","imagem":"Texto2" },' +
  // '{"titulo":"Preenchendo a declaração","imagem":"Texto3" },' +
  // '{\"titulo\":\"Preenchendo a declaração\",\"paragrafo\":\"Nas \\\"Fichas de Declaração\\\" escolher \\\"Dependentes\\\". Caso não possua dependentes, pule essa etapa.\",\"imagem\":\"Declaracao\" },' +
  // '{\"titulo\":\"Preenchendo a declaração\",\"paragrafo\":\"Para incluir os dados do dependente, clique em \\\"Novo\\\".\",\"imagem\":\"Declaracao\" },' +
  // '{\"titulo\":\"Preenchendo a declaração\",\"paragrafo\":\"Preencher os dados do dependente e em seguida clicar em \\\"OK\\\" (caso tenha mais de 1 dependente, após clicar em \\\"OK\\\" refaça o passo-a-passo)\",\"imagem\":\"Declaracao\" },' +
  // '{\"titulo\":\"Preenchendo a declaração\",\"paragrafo\":\"Inserir os dados da fonte pagadora e os valores dos rendimentos. Em seguida, clicar em \\\"OK\\\"\",\"imagem\":\"Declaracao\" },' +
  // '{"titulo":"Preenchendo a declaração","imagem":"1" },' +
  // '{"titulo":"Preenchendo a declaração","imagem":"1" },' +
  // '{"titulo":"Preenchendo a declaração","paragrafo":"Agora, vamos informar as despesas que tivemos ao longo do ano com médicos, dentistas, hospitais, educação etc.","imagem":"Declaracao" },' +
  // '{\"titulo\":\"Preenchendo a declaração\",\"paragrafo\":\"Após escolher o tipo e despesa, preencher os dados como CNPJ, nome e descrição da despesa. Em seguida, clique em \\\"OK\\\".\",\"imagem\":\"Declaracao\" },' +
  // '{\"titulo\":\"Preenchendo a declaração\",\"paragrafo\":\"Declaração de Bens e Direitos: nessa ficha você vai declarar todos os seus bens, tais como imóveis, automóvel, etc. Não se esquceça de declarar todos os seus bens, um por um. Clique em \\\"Novo\\\" para começar a preencher a ficha.\",\"imagem\":\"Declaracao\" },' +
  // '{"titulo":"Preenchendo a declaração","paragrafo":"Escolha o grupo (tipo) de bem e preencha com as informações solicitadas.","imagem":"Declaracao" },' +
  // '{\"titulo\":\"Preenchendo a declaração\",\"paragrafo\":\"Se você tiver contraído algum empréstimo ou tem  alguma dívida, você vai declara em \\\"Dívidas e Ônus Reais\\\" e clicar em \\\"Novo\\\".\",\"imagem\":\"Declaracao\" },' +
  // '{"titulo":"Conferindo/Salvando sua declaração","paragrafo":"Depois de ter preenchido sua Declaração Anual do IRPF, agora é preciso verificar se ainda há alguma pendência ou se sua declaração contém algum erro.","imagem":"Declaracao" },' +
  // '{\"titulo\":\"Conferindo/Salvando sua declaração\",\"paragrafo\":\"Para isso basta clicar no botão \\\"Verificar Pendências\\\", localizado na parte inferior da lista das Fichas de Declaração.\",\"paragrafo2\":\"Corrigir/complementar as informações que aparecem no campo \\\"Pendências\\\"\",\"imagem\":\"Declaracao\" },' +
  // '{"titulo":"1","paragrafo":"1","imagem":"1" },' +
  // '{"titulo":"1","paragrafo":"1","imagem":"1" },' +
  // '{"titulo":"1","paragrafo":"1","imagem":"1" },' +
  // '{"titulo":"1","paragrafo":"1","imagem":"1" },' +
  // '{"titulo":"1","paragrafo":"1","imagem":"1" },' +
  // '{"titulo":"1","paragrafo":"1","imagem":"1"}]}';
  //////////////////////////////////////////////////////////////////

  // JSON 
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      obj = data;
      displayData(obj);
    })
    .catch(error => {
      console.error('Erro ao carregar o JSON:', error);
    });
  // JSON 

  // Exemplo de uso
  const jsonText = JSON.stringify({
    text: "Este é um exemplo de texto em JSON."
  });

  const searchTerm = "exemplo";
  const result = highlightText(jsonText, searchTerm);
  console.log(result);

  document.addEventListener('DOMContentLoaded', fetchData);

  function displayData(obj) { /*meu teste aqui na frente para ver as informações das variaveis*/ console.log(obj.texto[4].li[0].li)
    iniciar.addEventListener('click', function (data) {
      num = 0;
      //RemoverTextoTela(); estava dando erro com este comando
      RenderizarTextoTela(data);

      botoes.classList.remove("hidden-div");
      containerSlide.classList.remove("hidden-div");
      containerBotoes.classList.remove("hidden-div");

      telaConteudo.classList.add("hidden-div");

      rodape.innerText = `1 / ${obj.texto.length}`

      if (num != undefined) {
        console.log("matei a charada");
        iniciar.innerText = "Reiniciar";
      }

      function showModal() {
        const modal = document.getElementById('pop-up');
        modal.classList.remove('animar');
        void modal.offsetWidth;
        modal.classList.add('animar');
        modal.style.display = 'block'; // Exibe o modal
      }

      function showBackground() {
        const background = document.getElementById('background');
        background.style.display = 'block'; // Exibe o background
      }

      // verifica se o usuário já viu o modal
      if (!localStorage.getItem('modalShown')) {
        // Exibe o modal
        showModal();
        showBackground();

        // Não mostrar o modal novamente
        localStorage.setItem('modalShown', 'true');
      }
    });

    //evento de click para avançar o texto
    avancar.addEventListener('click', function () {

      if (num < obj.texto.length - 1) {
        console.log("click");
        num += 1;
        console.log(num);
        RemoverTextoTela();
        RenderizarTextoTela();
        ContagemRodape(num);
      }
      else if (num == 60) {
        console.log("click");
        console.log("Página inicial");
        RemoverTextoTela();
        botoes.classList.add("hidden-div");
        containerSlide.classList.add("hidden-div");
        containerBotoes.classList.add("hidden-div");

        telaConteudo.classList.remove("hidden-div");
      }
    });


    //evento de click para voltar o texto
    voltar.addEventListener('click', function () {
      if (num > 0) {
        console.log("click");
        num -= 1;
        console.log(num);
        RemoverTextoTela();
        RenderizarTextoTela();
        ContagemRodape(num);
      }
      else if (num == 0) {
        console.log("click");
        console.log("Página inicial");
        RemoverTextoTela();
        botoes.classList.add("hidden-div");
        containerSlide.classList.add("hidden-div");
        containerBotoes.classList.add("hidden-div");

        telaConteudo.classList.remove("hidden-div");
      }
    });

    //eventos de click no menu
    menu1.addEventListener('click', function () {
      if (num >= 0) {
        console.log("click");
        num = 5;
        console.log(num);
        RemoverTextoTela();
        RenderizarTextoTela();
        ContagemRodape(num);
      }
    });

    menu2.addEventListener('click', function () {
      if (num >= 0) {
        console.log("click");
        num = 16;
        console.log(num);
        RemoverTextoTela();
        RenderizarTextoTela();
        ContagemRodape(num);
      }
    });

    menu3.addEventListener('click', function () {
      if (num >= 0) {
        console.log("click");
        num = 35;
        console.log(num);
        RemoverTextoTela();
        RenderizarTextoTela();
        ContagemRodape(num);
      }
    });

    menu4.addEventListener('click', function () {
      if (num >= 0) {
        console.log("click");
        num = 53;
        console.log(num);
        RemoverTextoTela();
        RenderizarTextoTela();
        ContagemRodape(num);
      }
    });

    menu5.addEventListener('click', function () {
      if (num >= 0) {
        console.log("click");
        num = 55;
        console.log(num);
        RemoverTextoTela();
        RenderizarTextoTela();
        ContagemRodape(num);
      }
    });

    menu6.addEventListener('click', function () {
      if (num >= 0) {
        console.log("click");
        num = 58;
        console.log(num);
        RemoverTextoTela();
        RenderizarTextoTela();
        ContagemRodape(num);
      }
    });

    tutorial.addEventListener('click', function () {
      const modal = document.getElementById('pop-up');
      // Remove a classe da animação se já estiver adicionada
      modal.classList.remove('animar');
      // Força o reinicio da animação
      void modal.offsetWidth;
      // Adiciona a classe para iniciar a animação
      modal.classList.add('animar');
      modal.style.display = 'block'; // Exibe o modal
      const background = document.getElementById('background');
      background.style.display = 'block'; // Exibe o background
    });

    fechar.addEventListener('click', function () {
      const modal = document.getElementById('pop-up');
      modal.style.display = 'none'; // fecha o modal
      const background = document.getElementById('background');
      background.style.display = 'none'; // fecha o background
    });
  }



  function RenderizarTextoTela() {

    const numeração = document.createElement("div");
    if (num + 1 >= 6 && num + 1 <= 16) {
      numeração.className = `numeração-1`; //condição para criar a clase da primeira numeração
    }
    if (num + 1 >= 17 && num + 1 <= 35) {
      numeração.className = `numeração-2`; //condição para criar a clase da segunda numeração
    }
    if (num + 1 >= 36 && num + 1 <= 53) {
      numeração.className = `numeração-3`; //condição para criar a clase da terceira numeração
    }
    if (num + 1 == 54 || num + 1 == 55) {
      numeração.className = `numeração-4`; //condição para criar a clase da quarta numeração
    }
    if (num + 1 >= 56 && num + 1 <= 58) {
      numeração.className = `numeração-5`; //condição para criar a clase da quinta numeração
    }
    if (num + 1 == 59 || num + 1 == 60) {
      numeração.className = `numeração-6`; //condição para criar a clase da sexta numeração
    }

    const titulo = document.createElement("p");
    if (num < 5 || num + 1 == 61) {
      titulo.className = `titulo-inicial`; //cria a classe do título inicial
    }
    else titulo.className = `titulo-princiapl`; //cria a classe do título principal

    const paragrafo1 = document.createElement("p");
    paragrafo1.className = `paragrafo-${num}`; //cria a clase do paragrafo
    const paragrafo2 = document.createElement("p");
    paragrafo2.className = `paragrafo-${num}`; //cria a clase do paragrafo
    const paragrafo3 = document.createElement("p");
    paragrafo3.className = `paragrafo-${num}`; //cria a clase do paragrafo

    const node0 = document.createTextNode(obj.texto[num].numeração);
    const node1 = document.createTextNode(obj.texto[num].titulo);
    const node2 = document.createTextNode(obj.texto[num].paragrafo);
    const node3 = document.createTextNode(obj.texto[num].paragrafo2);
    const node4 = document.createTextNode(obj.texto[num].paragrafo3);

    numeração.appendChild(node0);
    titulo.appendChild(node1);
    paragrafo1.appendChild(node2);
    paragrafo2.appendChild(node3);
    paragrafo3.appendChild(node4);

    //renderiza na tela o titulo, paragrafo e numeração

    if (obj.texto[num].numeração != undefined) {
      document.getElementById("conteudo-slides").appendChild(numeração);
      numeração.classList.remove('animarParagrafos');
      void numeração.offsetWidth;
      numeração.classList.add('animarParagrafos');
    }
    if (obj.texto[num].titulo != undefined) {
      titulo.classList.remove('animarParagrafos');
      void titulo.offsetWidth;
      titulo.classList.add('animarParagrafos');
      document.getElementById("conteudo-slides").appendChild(titulo);
    }
    if (obj.texto[num].paragrafo != undefined) {
      paragrafo1.classList.remove('animarParagrafos');
      // Força o reinicio da animação
      void paragrafo1.offsetWidth;
      // Adiciona a classe para iniciar a animação
      paragrafo1.classList.add('animarParagrafos');
      document.getElementById("conteudo-slides").appendChild(paragrafo1);
    }
    if (obj.texto[num].paragrafo2 != undefined) {
      paragrafo2.classList.remove('animarParagrafos');
      void paragrafo2.offsetWidth;
      paragrafo2.classList.add('animarParagrafos');
      document.getElementById("conteudo-slides").appendChild(paragrafo2);
    }
    if (obj.texto[num].paragrafo3 != undefined) {
      paragrafo3.classList.remove('animarParagrafos');
      void paragrafo3.offsetWidth;
      paragrafo3.classList.add('animarParagrafos');
      document.getElementById("conteudo-slides").appendChild(paragrafo3);
    }

    imagens();

    //função para criar a lista na página 5
    if ((num + 1) == 5) {
      console.log("AQUI<=========================");
      createList();
    }


    // Função definir paginas com lista de paragrafos

    const pagesWithLists = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18]; // números das páginas onde deseja criar listas
    // Verifica se a página atual precisa de uma lista
    if (pagesWithLists.includes(num + 1)) {
      console.log("Criando lista na página:", num + 1);
      paragraphList(num + 1); // Passe a página atual para a função
    }
  }

  function RemoverTextoTela() {
    document.getElementById("conteudo-slides").removeChild(conteudoSlides.firstChild);
    while (conteudoSlides.firstChild) {
      conteudoSlides.removeChild(conteudoSlides.firstChild);
    }
  }

  function ContagemRodape(num) {
    rodape.innerText = `${num + 1} / ${obj.texto.length}`;
  }

  function imagens() {
    let novoCaminho;
    if (obj.texto[num].imagem) {
      novoCaminho = `assets/${obj.texto[num].imagem}.svg`;
    } else {
      novoCaminho = `assets/default.png`;
    }

    imagemTela.src = novoCaminho;

    if (obj.texto[num].imagem2) {
      const novaImagem = document.createElement('img');
      novaImagem.src = `assets/${obj.texto[num].imagem2}.svg`;
      novaImagem.alt = 'Imagem adicional';
      novaImagem.className = `imagem-tutorial-${num}`;

      novaImagem.classList.remove('animarimagens');
      void novaImagem.offsetWidth;
      novaImagem.classList.add('animarimagens');
      document.getElementById('conteudo-slides').appendChild(novaImagem);
    }
  }




  //função criar lista de paragrafos

  function paragraphList(pageIndex) {
    // Cria o elemento <ul>
    const ul = document.createElement('ul');
    ul.className = `lista-ul-${num}`; //cria a clase da lista

    // Obtém o número de elementos na lista da página atual
    const items = obj.texto[pageIndex - 1].li;
    const numItems = items.length;

    // Cria e adiciona elementos <li> ao <ul>
    for (let i = 0; i < numItems; i++) {
      const li = document.createElement('li');
      li.className = `lista-li-${num}`; //cria a clase da lista
      li.textContent = `${items[i].li}`; // Define o texto do <li>
      li.classList.remove('animarParagrafos');
      void li.offsetWidth;
      li.classList.add('animarParagrafos');
      ul.appendChild(li); // Adiciona o <li> ao <ul>
    }

    // Adiciona o <ul> ao contêiner no DOM, se houver itens
    if (numItems > 0) {
      //ul.classList.remove('animarParagrafos');
     //void ul.offsetWidth;
      //ul.classList.add('animarParagrafos');
      document.getElementById("conteudo-slides").appendChild(ul);
    }
  }

  //função criar lista menu página 5

  function createList() {
    // Cria o elemento <ul>
    const ul = document.createElement('ul');
    ul.className = `lista-ul-${num}`; //cria a clase da ul

    // Cria e adiciona 6 elementos <li> ao <ul>
    for (let i = 0; i <= 5; i++) {
      const li = document.createElement('li');
      li.className = `lista-li-${num}`; //cria a clase da lista
      li.textContent = `${obj.texto[4].li[i].li}`; // Define o texto do <li>
      ul.appendChild(li); // Adiciona o <li> ao <ul>
    }

    // Adiciona o <ul> ao contêiner no DOM
    ul.classList.remove('animarLista');
    void ul.offsetWidth;
    ul.classList.add('animarLista');
    document.getElementById("conteudo-slides").appendChild(ul);
  }
});