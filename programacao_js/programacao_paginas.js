/*Toda a programação das páginas vai aqui*/
/*Variáveis criadas para acesso*/
const btnAcessar = document.getElementById('btnAcessar');
const btnCarregar = document.getElementById('btnCarregar');
const NomeInput1 = document.getElementById('NomeInput1');
const NomeInput2 = document.getElementById('NomeInput2');
const NomeInput3 = document.getElementById('NomeInput3');
const NomeInput4 = document.getElementById('NomeInput4');
const NomeInput5 = document.getElementById('NomeInput5');
/*variaveis para acessar os campos de idades*/
const IdadeInput1 = document.getElementById('Idade_Input1');
const IdadeInput2 = document.getElementById('Idade_Input2');
const IdadeInput3 = document.getElementById('Idade_Input3');
const IdadeInput4 = document.getElementById('Idade_Input4');
const IdadeInput5 = document.getElementById('Idade_Input5');

btnAcessar.onclick = function() {
    /*comando que abre uma nova página*/
    window.open("../paginas/pagina_2.html");
 
    /*Adc o valor dentro da variável para a entrada no campo input chamado NomeInput*/
    
    /*Salvando os dados digitados no campo para memoria do navegador o LocalStorage*/
    localStorage.nome1 = document.getElementById("NomeInput1").value; 
    localStorage.nome2 = document.getElementById("NomeInput2").value;
    localStorage.nome3 = document.getElementById("NomeInput3").value; 
    localStorage.nome4 = document.getElementById("NomeInput4").value;   
    localStorage.nome5 = document.getElementById("NomeInput5").value;   

    localStorage.idade1 = document.getElementById("Idade_Input1").value;
    localStorage.idade2 = document.getElementById("Idade_Input2").value;
    localStorage.idade3 = document.getElementById("Idade_Input3").value;
    localStorage.idade4 = document.getElementById("Idade_Input4").value;
    localStorage.idade5 = document.getElementById("Idade_Input5").value;
}



