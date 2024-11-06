Ranking(100, 50);

function Ranking(win, lose) {
  let rankCalcResult = win - lose;
  let nivel;

  if (rankCalcResult <= 10) {
    nivel = "Ferro";
  } else if (rankCalcResult >= 11 && rankCalcResult <= 20) {
    nivel = "Bronze";
  } else if (rankCalcResult >= 21 && rankCalcResult <= 50) {
    nivel = "Prata";
  } else if (rankCalcResult >= 51 && rankCalcResult <= 80) {
    nivel = "Ouro";
  } else if (rankCalcResult >= 81 && rankCalcResult <= 90) {
    nivel = "Diamante";
  } else if (rankCalcResult >= 91 && rankCalcResult <= 100) {
    nivel = "Lendário";
  } else if (rankCalcResult >= 101) {
    nivel = "Imortal";
  } else {
    nivel = "Rank invalido!!!";
  }

  return console.log(
    `O Herói tem o saldo de ${rankCalcResult} está no nivel de ${nivel}`
  );
}
