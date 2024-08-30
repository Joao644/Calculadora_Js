function somar() {
    var tn1 = document.getElementById('txtn1');
    var tn2 = document.getElementById('txtn2');
    var res = document.getElementById('res-soma');
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    var s = n1 + n2;
    res.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong>${s}</strong>`;
}

function subtrair() {
    var tn1 = document.getElementById('teste1');
    var tn2 = document.getElementById('teste2');
    var res = document.getElementById('res-subtracao');
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    var s = n1 - n2;
    res.innerHTML = `A subtração entre ${n1} e ${n2} é igual a <strong>${s}</strong>`;
}

function multiplicar() {
    var tn1 = document.getElementById('teste3');
    var tn2 = document.getElementById('teste4');
    var res = document.getElementById('res-multiplicacao');
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    var s = n1 * n2;
    res.innerHTML = `A multiplicação entre ${n1} e ${n2} é igual a <strong>${s}</strong>`;
}

function divisao() {
    var tn1 = document.getElementById('teste5');
    var tn2 = document.getElementById('teste6');
    var res = document.getElementById('res-divisao');
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    var s = n1 / n2;
    res.innerHTML = `A divisão entre ${n1} e ${n2} é igual a <strong>${s}</strong>`;
}
