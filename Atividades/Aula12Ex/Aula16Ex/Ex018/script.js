let vetor = []
let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n))!= -1){
        return true
    }else{
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, vetor)) {
        vetor.push(Number(num.value))
        let item = document.createElement('option')
        item.text=`Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''

    }else{
        window.alert('Valor Inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function encontrarMaiorValor(vetor) {
    if (vetor.length === 0) {
      return undefined;
    }
  
    let maior = vetor[0];
  
    for (let i = 1; i < vetor.length; i++) {
      if (vetor[i] > maior) {
        maior = vetor[i];
      }
    }
  
    return maior;
  }
  
  function encontrarMenorValor(vetor) {
    if (vetor.length === 0) {
      return undefined;
    }
  
    let menor = vetor[0];
  
    for (let i = 1; i < vetor.length; i++) {
      if (vetor[i] < menor) {
        menor = vetor[i];
      }
    }
  
    return menor;
  }
  
  function calcularSoma(vetor) {
    let soma = 0;
  
    for (let i = 0; i < vetor.length; i++) {
      soma += vetor[i];
    }
  
    return soma;
  }
  
  function calcularMedia(vetor) {
    if (vetor.length === 0) {
      return undefined;
    }
  
    const soma = calcularSoma(vetor);
    const media = soma / vetor.length;
  
    return media;
  }
  
  function finalizar() {
    if (vetor.length === 0) {
      window.alert('Adicione valores antes de finalizar!');
    } else {
      const maiorValor = encontrarMaiorValor(vetor);
      const menorValor = encontrarMenorValor(vetor);
      const somaValores = calcularSoma(vetor);
      const mediaValores = calcularMedia(vetor);
  
      let tot = vetor.length;
      let res = document.getElementById('res'); // Substitua 'res' pelo id correto do elemento HTML
      res.innerHTML = '';
      res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`;
      res.innerHTML += `<p>O maior valor informado é ${maiorValor}</p>`;
      res.innerHTML += `<p>O menor valor informado é ${menorValor}</p>`;
      res.innerHTML += `<p>A soma de todos os valores é ${somaValores}</p>`;
      res.innerHTML += `<p>A média dos valores é ${mediaValores}</p>`;
    }
  }