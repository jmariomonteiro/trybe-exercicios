 // 1. Adicione a tag `h1` com o texto `Exercício 5.2 - JavaScript DOM` como filho da tag `body`;
let elementoH1 = document.createElement('h1');
elementoH1.innerText = "Exercício 5.2 - JavaScript DOM";
document.body.appendChild(elementoH1);

 // 2. Adicione a tag `main` com a classe `main-content` como filho da tag `body`;

let contentMain = document.createElement('main');
contentMain.className = "main-content"
document.body.appendChild(contentMain);

 // 3. Adicione a tag `section` com a classe `center-content` como filho da tag `main` criada no passo 2;

 let elementSelection = document.createElement('section');
 elementSelection.className = 'center-content';
 contentMain.appendChild(elementSelection);

   // 4. Adicione a tag `p` como filho do `section` criado no passo 3 e coloque algum texto;
   let paragrafo = document.createElement('p');
   paragrafo.innerText = "Aprendendo assuntos novos no bloco 5";
   elementSelection.appendChild(paragrafo);

     // 5. Adicione a tag `section` com a classe `left-content` como filho da tag `main` criada no passo 2;
    let elementS2 = document.createElement('section');
    elementS2.className = 'left-content';
    contentMain.appendChild(elementS2);

    // 6. Adicione a tag `section` com a classe `right-content` como filho da tag `main` criada no passo 2;
    let elementS3 = document.createElement('section');
    elementS3.className = 'right-content';
    contentMain.appendChild(elementS3);

    // 7. Adicione uma imagem com `src` configurado para o valor `https://picsum.photos/200` e classe `small-image`. Esse elemento deve ser filho do `section` criado no passo 5;
    let addImagem = document.createElement('img');
    addImagem.classList = 'small-image';
    addImagem.src = 'https://picsum.photos/200'
    elementS2.appendChild(addImagem);

     // 8. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, `um`, `dois`, `três`, ... como valores da lista. Essa lista deve ser filha do `section` criado no passo 6;
     let list = document.createElement('ul');
     elementS3.appendChild(list)
     let arrayNumeros = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis',
     'Sete', 'Oito', 'Nove', 'Dez'];
     for (let num in arrayNumeros) {
         let elementLi = document.createElement('li')
         elementLi.innerHTML = arrayNumeros[num];
         list.appendChild(elementLi)
     }








