function TEAchecked(chkTEA) {
    var TEA = document.getElementById("divTEA");

    TEA.style.display = chkTEA.checked ? "block" : "none";
}

function COFFEEchecked(chkCOFFEE) {
    var COFFEE = document.getElementById("divCOFFEE");

    COFFEE.style.display = chkCOFFEE.checked ? "block" : "none";
}


function PATTIESchecked(chkPATTIES) {
    var PATTIES = document.getElementById("divPATTIES");

    PATTIES.style.display = chkPATTIES.checked ? "block" : "none";
}

function MOMOSchecked(chkMOMOS) {
    var MOMOS = document.getElementById("divMOMOS");

    MOMOS.style.display = chkMOMOS.checked ? "block" : "none";
}



function TEAtotal() {
    var a = 10;
    var b = document.getElementById("s1").value;
    var c = Number(a) * Number(b);
    document.getElementById("s2").value = c;

}


function COFFEEtotal() {
    var a = 20;
    var b = document.getElementById("p1").value;
    var c = Number(a) * Number(b);
    document.getElementById("p2").value = c;

}



function PATTIEStotal() {
    var a = 30;
    var b = document.getElementById("b1").value;
    var c = Number(a) * Number(b);
    document.getElementById("b2").value = c;

}



function MOMOStotal() {
    var a = 40;
    var b = document.getElementById("sa1").value;
    var c = Number(a) * Number(b);
    document.getElementById("sa2").value = c;

}

setInterval(function () {

    var TEA = document.getElementById("s2").value;
    var COFFEE = document.getElementById("p2").value;
    var PATTIES = document.getElementById("sa2").value;
    var MOMOS = document.getElementById("b2").value;

    if (chkTEA.checked != true) TEA = 0;
    if (chkCOFFEE.checked != true) COFFEE = 0;
    if (chkPATTIES.checked != true) PATTIES = 0;
    if (chkMOMOS.checked != true) MOMOS = 0;

    var t = Number(TEA) + Number(COFFEE) + Number(PATTIES) + Number(MOMOS);

    document.getElementById("grandtotal").innerHTML = t;
}, 1000);