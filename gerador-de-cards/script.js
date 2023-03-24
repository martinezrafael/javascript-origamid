const containerElement = document.querySelector('.container');

const btn = document.querySelectorAll('.btn');

const horarios = [
  {
    modalidade: 'Musculação',
    horario1: '6:00 - 11:00',
    horario2: '14:00 - 21:00',
    diaDaSemana: 'segunda'
  },
  {
    modalidade: 'Yoga',
    horario1: '6:00 - 11:00',
    horario2: '14:00 - 21:00',
    diaDaSemana: 'segunda'
  },
  {
    modalidade: 'Pilates',
    horario1: '6:00 - 11:00',
    horario2: '14:00 - 21:00',
    diaDaSemana: 'terca'
  }
];

//FUNÇÃO QUE PEGA AS INFORMAÇÕES NO ARRAY E RETORNA ESSAS INFORMAÇÕES

//modalidade
//horario1
//horario2

function getHorarios(arr){
  arr.map((horario) => {

    

    const modalidade = horario.modalidade;
    const horario1 = horario.horario1;
    const horario2 = horario.horario2;
    const dia = horario.diaDaSemana;

  })
}

