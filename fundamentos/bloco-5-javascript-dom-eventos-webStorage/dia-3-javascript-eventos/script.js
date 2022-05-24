function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  //exercicio 1

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function diasDoMes (){
      let diasList = document.querySelector('#days');
      for (index = 0; index < dezDaysList.length; index +=1) {
        let dia = dezDaysList[index];
        let diaItem = document.createElement('li');
        if (dia === 24 || dia === 31) {
            diaItem.className = 'day holiday';
            diaItem.innerHTML = dia;
            diasList.appendChild(diaItem);
        } else if (dia === 4 || dia === 11 || dia === 18){
            diaItem.className = 'day friday'
            diaItem.innerHTML = dia;
            diasList.appendChild(diaItem);
        } else if (dia === 25) {
            diaItem.className = 'day holiday friday';
            diaItem.innerHTML = dia;
            diasList.appendChild(diaItem);
        } else {
            diaItem.className = 'day';
            diaItem.innerHTML = dia;
            diasList.appendChild(diaItem);
        }
      }
  }

 diasDoMes();

 //exercicio 2
 function botaoFeriados (buttonName){
     let buttonDoc = document.querySelector('.buttons-container');
     let newButton = document.createElement('button');
     let newButtonId = 'btn-holiday';
     newButton.innerHTML = buttonName;
     newButton.id = newButtonId;
     buttonDoc.appendChild(newButton);
 }

 botaoFeriados('Feriados');

 //exercicio 3
 function colorBotao () {
    let corBotao = document.querySelector('#btn-holiday');
    let holidays = document.querySelectorAll('.holiday');
    let bgCor = 'rgb(238,238,238)';
    let novaCor = 'red';
    
    corBotao.addEventListener('click', function() {
        for (index = 0; index < holidays.length; index +=1) {
            if (holidays[index].style.backgroundColor === novaCor) {
                holidays[index].style.backgroundColor = bgCor; 
            } else {
                holidays[index].style.backgroundColor = novaCor;
            }
        }
    })
 }

 colorBotao();

 //exercicio 4
//  Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente 
// um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday".
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

function buttonSexta(buttonName) {
    let buttonContainer = document.querySelector('.buttons-container');
    let button2 = document.createElement('button');
    let button2ID = 'btn-friday';

    button2.innerHTML = buttonName;
    button2.id = button2ID;
    buttonContainer.appendChild(button2);
    }

    buttonSexta('Sexta-feira');

// 5  Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click"
// que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele 
//retorna à configuração inicial exibindo os dias.

function button(friday) {
    let buttonSexta = document.querySelector('#btn-friday');
    let fridays = document.getElementsByClassName('friday');
    let novoTextoFriday = 'Sextou';

    buttonSexta.addEventListener('click', function() {
        for (let index = 0; index < fridays.length; index +=1) {
            if (fridays[index].innerHTML !== novoTextoFriday) {
                fridays[index].innerHTML = novoTextoFriday
            } else {
                fridays[index].innerHTML = friday[index];
            }
        }

    })
}

let dezFridays = [4, 11, 18, 25];
button();

// exercicio 6
// Implemente duas funções que criem um efeito de "zoom".
//  Ao passar o ponteiro do mouse em um dia do mês no calendário, 
//  o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, 
//  o texto deve retornar ao tamanho original.

function mouseZoom() {
    let days = document.querySelector('#days');

    days.addEventListener('mouseover', function(event) {
        event.target.style.fontSize = '30px';
        event.target.style.fontWeight = '600';
    })
};

function mouseSair() {
    let days = document.querySelector('#days');

    days.addEventListener('mouseout', function(event) {
        event.target.style.fontSize = '20px';
        event.target.style.fontWeight = '200';
    })
};

mouseZoom();
mouseSair();

//exercio 7
// Implemente uma função que adiciona uma tarefa personalizada ao calendário. 
// A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") 
// e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

function todasTarefas (tarefa){
    let tarefaContainer = document.querySelector('.my-tasks');
    let tarefaSpan = document.createElement('span');

    tarefaSpan.innerHTML = tarefa;
    tarefaContainer.appendChild(tarefaSpan);
}

todasTarefas('Projeto:');
