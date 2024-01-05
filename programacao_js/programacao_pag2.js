

/*Criando a variável lista chamada nome5*/
   let nomes5 = [];
   nomes5 [0] = localStorage.nome1;
   nomes5 [1] = localStorage.nome2;
   nomes5 [2] = localStorage.nome3;
   nomes5 [3] = localStorage.nome4;
   nomes5 [4] = localStorage.nome5;
/*Criando a variavel lista de idade chamado idades*/
   let idades = [5];
   /*Pega o valor salvo no local storage do navegador(memória do navegador)*/
   idades [0] = localStorage.idade1;
   idades [1] = localStorage.idade2;
   idades [2] = localStorage.idade3;
   idades [3] = localStorage.idade4;
   idades [4] = localStorage.idade5;

   /*Obs: têm q ser antes do comando sort que inverte as posiçoes de acordo com a ordem alfabética*/
   /*Imprime nos campos os valores que estavam salvos na LocalStorage*/
   document.getElementById("InputNome_1_pag2").value = nomes5[0];
   document.getElementById("Input1_idade_page2").value = idades[0];
   document.getElementById("InputNome_2_pag2").value = nomes5[1];
   document.getElementById("Input2_idade_page2").value = idades[1];
   document.getElementById("InputNome_3_pag2").value = nomes5[2];
   document.getElementById("Input3_idade_page2").value = idades[2];
   document.getElementById("InputNome_4_pag2").value = nomes5[3];
   document.getElementById("Input4_idade_page2").value = idades[3];
   document.getElementById("InputNome_5_pag2").value = nomes5[4];
   document.getElementById("Input5_idade_page2").value = idades[4];

    
   

     /*Condição caso for maior que 18* não mostrará nada na tela*/
     if(idades[0] >= 18){
      document.getElementById("InputNome_1_pag2").value = '';
      document.getElementById("Input1_idade_page2").value = '';
    }

    if(idades[1] >= 18){
      document.getElementById("InputNome_2_pag2").value = '';
      document.getElementById("Input2_idade_page2").value = '';
    }

    if(idades[2] >= 18){
      document.getElementById("InputNome_3_pag2").value = '';
      document.getElementById("Input3_idade_page2").value = '';
    }

    if(idades[3] >= 18){
      document.getElementById("InputNome_4_pag2").value = '';
      document.getElementById("Input4_idade_page2").value = '';
    }

    if(idades[4] >= 18){
      document.getElementById("InputNome_5_pag2").value = '';
      document.getElementById("Input5_idade_page2").value = '';
    }

    /*Condição caso for maior dev idade mostrará os nomes dos maiores de idade*/
    if(idades[0] >= 18){
      document.getElementById("InputNome1_Maior_idade").value = nomes5[0];
      document.getElementById("Input1_Maior_idade").value = idades[0];
    }

    if(idades[1] >= 18){
      document.getElementById("InputNome2_Maior_idade").value = nomes5[1];
      document.getElementById("Input2_Maior_idade").value = idades[1];
    }

    if(idades[2] >= 18){
      document.getElementById("InputNome3_Maior_idade").value = nomes5[2];
      document.getElementById("Input3_Maior_idade").value = idades[2];
    }

    if(idades[3] >= 18){
      document.getElementById("InputNome4_Maior_idade").value = nomes5[3];
      document.getElementById("Input4_Maior_idade").value = idades[3];
    }

    if(idades[4] >= 18){
      document.getElementById("InputNome5_Maior_idade").value = nomes5[4];
      document.getElementById("Input5_Maior_idade").value = idades[4];
    }

    document.getElementById("nom_mediana1").value = nomes5[2];
    document.getElementById("idade_mediana1").value = idades[2];
 /*sort é o comando para ordenar as letras em ordem alfabética*/
 nomes5.sort();
 /*recuperando o dados salvo no local storage e imprimindo no campo ordem alfabética*/
 document.getElementById("Input_Ordem_Alfab").value = nomes5.join(', ');
 


    btnVoltar.onclick = function() {
         Window.close();
    }
    

   
  
   