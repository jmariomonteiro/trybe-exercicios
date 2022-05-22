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

     //Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.
     for (let index = 1; index <= 3; index +=1) {
       let elementoTags = document.createElement('h3');
       elementoTags.innerHTML = 'show ' + index;
       contentMain.appendChild(elementoTags);
     }

     //parte 2

    //  //Adicione a classe title na tag h1 criada;
     let title = document.querySelector('h1');
     title.className = 'title';

    //  //Adicione a classe description nas 3 tags h3 criadas;
     let elementTags = document.getElementsByTagName('h3');
     for (index = 0; index < 3; index +=1) {
       elementTags[index].className = 'description';
     }

     //// 3. Remova a `section` criado no passo 5 (aquele que possui a classe `left-content`). Utilize a função `.removeChild()`;
     let removeSection = document.getElementsByClassName('left-content')[0];
     contentMain.removeChild(removeSection);

     //4. Centralize a `section` criado no passo 6 (aquele que possui a classe `right-content`).
     // Dica: para centralizar, basta configurar o `margin-right: auto` da `section`;

     let cetralizeSection = document.getElementsByClassName('right-content')[0];
     cetralizeSection.style.marginRight = 'auto';

     //5. Troque a cor de fundo do elemento pai da `section` criada no passo 3 
    // (aquela que possui a classe `center-content`) para a cor verde;

    let corFundo = document.getElementsByClassName('center-content')[0];
    corFundo.parentElement.style.backgroundColor = "green";
    
    // 6.Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
    ul.lastChild.remove();
    ul.lastChild.remove();















