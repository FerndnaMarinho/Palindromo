function comparaPalindrono(){
    let palavra = prompt('Digite uma palavra:');

    alert(palavra);

    let revertPalavra = [];

    for(i = palavra.length; i >= 0; i--){
        
        revertPalavra.push(palavra[i]);
    }

  let palavraInversa = revertPalavra.join("");

  let palavraSemSpace = palavra.replace(/ /g, "");

  let palavraInSemSpace = palavraInversa.replace(/ /g, "");

  if(palavraSemSpace === palavraInSemSpace){
     alert(`${palavra} é um palíndrono!`);
     novaOperacao();
     
  }else{
      alert(`${palavra} não é um palíndrono!`)
      novaOperacao();
   }
}

function VerificaPalindromo2(string){
    if(!string) return 'String inexistente!';

    for(let i = 0; i< string.length / 2; i++){
        if(string[i] !== string[string.length - 1 - i]){
            return false;
        } 
    }
    return true;
    
}

function novaOperacao() {
    let opcao = prompt(
      "Deseja digitar outra palavra? \n 1 - sim\n 2 - Não"
    );

    if (opcao == 1) {
    comparaPalindrono();
    } else if (opcao == 2) {
      alert("Até a próxima!");
    } else {
      alert("Digite uma opção valida!");
      novaOperacao();
    }
  }

 
comparaPalindrono();
