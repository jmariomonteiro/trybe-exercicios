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
     let
 }