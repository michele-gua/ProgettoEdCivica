// Valori in L per ogni
const gabinetto = 12
const bucato = 30
const piatti = 12
const lavastoviglie = 24
const pulizie = 20

let ValueWater = 0;
let ValueBucato = 0;
let ValuePiatti = 0;
let ValuePulizie = 0;

// Prendere i valori
function VediValori(){
     ValueWater = document.getElementById('water').value;
     ValueBucato = document.getElementById('bucato').value;
     ValuePiatti = document.getElementById('piatti').value;
     ValuePulizie = document.getElementById('pulizie').value;
}

setInterval(VediValori,1000);

setInterval(console.log(ValueWater),2000);

var LitrialGiorno = ValueWater*gabinetto*7 + ValueBucato*bucato + ValuePiatti*piatti + ValuePulizie*pulizie;

let button = document.querySelector('button');

setInterval
if(ValueWater == 0 || ValueBucato == 0 || ValuePiatti == 0 || ValueBucato == 0 || ValuePulizie ==0){
    button.classList.remove('btn');
    button.classList.add('no');
}else{
},3000);
function Calcolo(){
    document.getElementById('res').innerHTML = LitrialGiorno;
}