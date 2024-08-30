function somar() {
    var tn1 = window.document.getElementById('txtn1');
    var tn2 = window.document.querySelector('input#txtn2');
    var res = window.document.getElementById('res');
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    var s = n1 + n2;
    res.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong>${s}</strong>`;
}

function subtrair() {
    var tn1 = window.document.getElementById('teste1');
    var tn2 = window.document.querySelector('input#teste2');
    var res = window.document.getElementById('res2');
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    var s = n1 - n2;
    res.innerHTML = `A subtração entre ${n1} e ${n2} é igual a <strong>${s}</strong>`;
}

function multiplicar() {
    var tn1 = window.document.getElementById('teste3');
    var tn2 = window.document.querySelector('input#teste4');
    var res = window.document.getElementById('res3');
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    var s = n1 * n2;
    res.innerHTML = `A multiplicação entre ${n1} por ${n2} é igual a <strong>${s}</strong>`;
}

function divisao() {
    var tn1 = window.document.getElementById('teste5');
    var tn2 = window.document.querySelector('input#teste6');
    var res = window.document.getElementById('res4');
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    var s = n1 / n2;
    res.innerHTML = `A divisão entre ${n1} e ${n2} é igual a <strong>${s}</strong>`;
}
