"use strict";
var africa08 = 1028;
var africa18 = 1235.5;
var sa08 = 1132.6;
var sa18 = 1261.5;
var europa08 = 4965.7;
var europa18 = 4209.3;
var na08 = 6600.4;
var na18 = 6035.6;
var asia08 = 12954.7;
var asia18 = 16274.1;
var australia08 = 1993.0;
var australia18 = 2100.5;
function komma(x) {
    return Number.parseFloat(x).toFixed(2);
}
var weltgesamt18 = africa18 + sa18 + europa18 + na18 + asia18 + australia18;
var africa18welt = komma(100 * africa18 / weltgesamt18);
var sa18welt = komma(100 * sa18 / weltgesamt18);
var europa18welt = komma(100 * europa18 / weltgesamt18);
var na18welt = komma(100 * na18 / weltgesamt18);
var asia18welt = komma(100 * asia18 / weltgesamt18);
var australia18welt = komma(100 * australia18 / weltgesamt18);
var africa0818 = 100 / africa08 * africa18;
var sa0818 = 100 / sa08 * sa18;
var europa0818 = 100 / europa08 * europa18;
var na0818 = 100 / na08 * na18;
var asia0818 = 100 / asia08 * asia18;
var australia0818 = 100 / australia08 * australia18;
var africa = komma(africa0818 - 100);
var sa = komma(sa0818 - 100);
var europa = komma(europa0818 - 100);
var na = komma(na0818 - 100);
var asia = komma(asia0818 - 100);
var australia = komma(australia0818 - 100);
var africa1808 = komma(africa18 - africa08);
var sa1808 = komma(sa18 - sa08);
var europa1808 = komma(europa18 - europa08);
var na1808 = komma(na18 - na08);
var asia1808 = komma(asia18 - asia08);
var australia1808 = komma(australia18 - australia08);
console.log("Verglichen zur Gesamtemission der Welt verursacht Afrika damit " + africa18welt + "%");
console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um " + africa + "verändert");
console.log("2018 im Vergleich zu 2008 sind das " + africa1808 + "kg CO2");
console.log("Die Emission von Süd Amerika ist: " + sa18 + "kg CO2");
console.log("Verglichen zur Gesamtemission der Welt verursacht Süd Amerika damit " + sa18welt + "%");
console.log("In Süd Amerika hat sich 2018 im Vergleich zu 2008 die Emission um " + sa + "verändert");
console.log("2018 im Vergleich zu 2008 sind das " + sa1808 + "kg CO2");
console.log("Die Emission von Europa ist: " + europa18 + "kg CO2");
console.log("Verglichen zur Gesamtemission der Welt verursacht Europa damit " + europa18welt + "%");
console.log("In Europa hat sich 2018 im Vergleich zu 2008 die Emission um " + europa + "verändert");
console.log("2018 im Vergleich zu 2008 sind das " + europa1808 + "kg CO2");
console.log("Die Emission von Nord Amerika ist: " + na18 + "kg CO2");
console.log("Verglichen zur Gesamtemission der Welt verursacht Nord Amerika damit " + na18welt + "%");
console.log("In Nord Amerika hat sich 2018 im vergleich zu 2008 die Emission um " + na + "verändert");
console.log("2018 im Vergleich zu 2008 sind das " + na1808 + "kg CO2");
console.log("Die Emissionen von Asien sind: " + asia18 + " kg CO2");
console.log("Verglichen zur Gesamtemission der Welt verursacht Asien damit " + asia18welt + "%");
console.log("In Asien hat sich 2018 im Vergleich zu 2008 die Emission um " + asia + "verändert");
console.log("2018 im Vergleich zu 2008 sind das " + asia1808 + "kg CO2");
console.log("Die Emission von Australien sind: " + australia18 + "kg CO2");
console.log("Verglichen zur Gesamtemission der Welt verursacht Australien damit " + australia18welt + "%");
console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um " + australia + "verändert");
console.log("2018 im Vergleich zu 2008 sind das " + australia1808 + "kg CO2");
"Die Emission von Afrika ist: " + africa18 + " kg CO2 | Relativ zur Gesamtemission der Welt verursacht Afrika damit " + africa18welt + " % | Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um " + africa0818 + "% verändert | 2018 im Vergleich zu 2008 sind das " + africa + " kg CO2";
;
function europaON() {
    document.querySelector(".europa").setAttribute('id', 'besucht');
    document.querySelector("#titleRegion").innerHTML = "Europa";
    document.querySelector('.chart').setAttribute('style', 'height:' + europa18welt + 'px');
    document.querySelector("#ah").innerHTML = europa18 + " kg CO2";
    document.querySelector("#ap").innerHTML = "Die Emission in 2018 von Europa";
    document.querySelector("#bh").innerHTML = europa18welt + " %";
    document.querySelector("#bp").innerHTML = "Relativ zur Gesamtemission der Welt verursacht Europa";
    document.querySelector("#ch").innerHTML = europa0818 + " %";
    document.querySelector("#cp").innerHTML = "Veränderung der Emission für Europa in 2018 im Vergleich zu 2008";
    document.querySelector("#dh").innerHTML = europa + " kg CO2";
    document.querySelector("#dp").innerHTML = "Veränderung in 2018 im Vergleich zu 2008";
}
window.addEventListener('load', function () {
    document.querySelector(".europa").addEventListener("click", europaON);
});
function northamericaON() {
    document.querySelector(".northamerica").setAttribute('id', 'besucht');
    document.querySelector("#titleRegion").innerHTML = "Nordamerika";
    document.querySelector('.chart').setAttribute('style', 'height:' + na18welt + 'px');
    document.querySelector("#ah").innerHTML = na18 + " kg CO2";
    document.querySelector("#ap").innerHTML = "Die Emission in 2018 von Nordamerika";
    document.querySelector("#bh").innerHTML = na18welt + " %";
    document.querySelector("#bp").innerHTML = "Relativ zur Gesamtemission der Welt verursacht Nordamerika";
    document.querySelector("#ch").innerHTML = na0818 + " %";
    document.querySelector("#cp").innerHTML = "Veränderung der Emission für Nordamerika in 2018 im Vergleich zu 2008";
    document.querySelector("#dh").innerHTML = na + " kg CO2";
    document.querySelector("#dp").innerHTML = "Veränderung in 2018 im Vergleich zu 2008";
}
window.addEventListener('load', function () {
    document.querySelector(".northamerica").addEventListener("click", northamericaON);
});
function southamericaON() {
    document.querySelector(".southamerica").setAttribute('id', 'besucht');
    document.querySelector("#titleRegion").innerHTML = "Südamerika";
    document.querySelector('.chart').setAttribute('style', 'height:' + sa18welt + 'px');
    document.querySelector("#ah").innerHTML = sa18 + " kg CO2";
    document.querySelector("#ap").innerHTML = "Die Emission in 2018 von Südamerika";
    document.querySelector("#bh").innerHTML = sa18welt + " %";
    document.querySelector("#bp").innerHTML = "Relativ zur Gesamtemission der Welt verursacht Südamerika";
    document.querySelector("#ch").innerHTML = sa0818 + " %";
    document.querySelector("#cp").innerHTML = "Veränderung der Emission für Südamerika in 2018 im Vergleich zu 2008";
    document.querySelector("#dh").innerHTML = sa + " kg CO2";
    document.querySelector("#dp").innerHTML = "Veränderung in 2018 im Vergleich zu 2008";
}
window.addEventListener('load', function () {
    document.querySelector(".southamerica").addEventListener("click", southamericaON);
});
function africaON() {
    document.querySelector(".africa").setAttribute('id', 'besucht');
    document.querySelector("#titleRegion").innerHTML = "Afrika";
    document.querySelector('.chart').setAttribute('style', 'height:' + africa18welt + 'px');
    document.querySelector("#ah").innerHTML = africa18 + " kg CO2";
    document.querySelector("#ap").innerHTML = "Die Emission in 2018 von Afrika";
    document.querySelector("#bh").innerHTML = africa18welt + " %";
    document.querySelector("#bp").innerHTML = "Relativ zur Gesamtemission der Welt verursacht Afrika";
    document.querySelector("#ch").innerHTML = africa0818 + " %";
    document.querySelector("#cp").innerHTML = "Veränderung der Emission für Afrika in 2018 im Vergleich zu 2008";
    document.querySelector("#dh").innerHTML = africa + " kg CO2";
    document.querySelector("#dp").innerHTML = "Veränderung in 2018 im Vergleich zu 2008";
}
window.addEventListener('load', function () {
    document.querySelector(".africa").addEventListener("click", africaON);
});
function asiaON() {
    document.querySelector(".asia").setAttribute('id', 'besucht');
    document.querySelector("#titleRegion").innerHTML = "Asien";
    document.querySelector('.chart').setAttribute('style', 'height:' + asia18welt + 'px');
    document.querySelector("#ah").innerHTML = asia18 + " kg CO2";
    document.querySelector("#ap").innerHTML = "Die Emission in 2018 von Asien";
    document.querySelector("#bh").innerHTML = asia18welt + " %";
    document.querySelector("#bp").innerHTML = "Relativ zur Gesamtemission der Welt verursacht Asien";
    document.querySelector("#ch").innerHTML = asia0818 + " %";
    document.querySelector("#cp").innerHTML = "eränderung der Emission für Asien in 2018 im Vergleich zu 2008";
    document.querySelector("#dh").innerHTML = asia + " kg CO2";
    document.querySelector("#dp").innerHTML = "Veränderung in 2018 im Vergleich zu 2008";
}
window.addEventListener('load', function () {
    document.querySelector(".asia").addEventListener("click", asiaON);
});
function australiaON() {
    document.querySelector(".australia").setAttribute('id', 'besucht');
    document.querySelector("#titleRegion").innerHTML = "Australien";
    document.querySelector('.chart').setAttribute('style', 'height:' + australia18welt + 'px');
    document.querySelector("#ah").innerHTML = australia18 + " kg CO2";
    document.querySelector("#ap").innerHTML = "Die Emission in 2018 von Australien";
    document.querySelector("#bh").innerHTML = australia18welt + " %";
    document.querySelector("#bp").innerHTML = "Relativ zur Gesamtemission der Welt verursacht Australien";
    document.querySelector("#ch").innerHTML = australia0818 + " %";
    document.querySelector("#cp").innerHTML = "Veränderung der Emission für Australien in 2018 im Vergleich zu 2008";
    document.querySelector("#dh").innerHTML = australia + " kg CO2";
    document.querySelector("#dp").innerHTML = "Veränderung in 2018 im Vergleich zu 2008";
}
window.addEventListener('load', function () {
    document.querySelector(".australia").addEventListener("click", australiaON);
});
//# sourceMappingURL=script06.js.map