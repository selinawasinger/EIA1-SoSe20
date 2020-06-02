var africa08: number = 1028;
var africa18: number = 1235.5;

var sa08: number = 1132.6;
var sa18: number = 1261.5;

var europa08: number = 4965.7;
var europa18: number = 4209.3;

var na08: number = 6600.4;
var na18: number = 6035.6;

var asia08: number = 12954.7;
var asia18: number = 16274.1;

var australia08: number = 1993.0;
var australia18: number = 2100.5;

var weltgesamt18: number = africa18 + sa18 + europa18 + na18 + asia18 + australia18;

var africa18welt: number = 100 / weltgesamt18 * africa18;
var africa0818: number = 100 / africa08 * africa18;
var africa: number = 100 - africa0818;
var africa1808: number  = africa18 - africa08;

var sa18welt: number = 100 / weltgesamt18 * sa18;
var sa0818: number = 100 / sa08 * sa18;
var sa: number = 100 - sa0818;
var sa1808: number = sa18 - sa08;

var europa18welt: number = 100 / weltgesamt18 * europa18;
var europa0818: number = 100 / europa08 * europa18;
var europa: number = 100 - europa0818;
var europa1808: number = europa18 - europa08;

var na18welt: number = 100 / weltgesamt18 * na18;
var na0818: number = 100 / na08 * na18;
var na: number = 100 - na0818;
var na1808: number = na18 - na08;

var asia18welt: number = 100 / weltgesamt18 * asia18;
var asia0818: number = 100 / asia08 * asia18;
var asia: number = 100 - asia0818;
var asia1808: number = asia18 - asia08;

var australia18welt: number = 100 / weltgesamt18 * australia18;
var australia0818: number = 100 / australia08 * australia18;
var australia: number = 100 - australia0818;
var australia1808: number = australia18 - australia08;


console.log("Die Emission von Afrika sind: " + africa18 + "kg CO2");
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