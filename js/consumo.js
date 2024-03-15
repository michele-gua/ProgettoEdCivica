// Valori in L per ogni
const gabinetto = 12
const bucato = 30
const piatti = 12
const lavastoviglie = 24
const pulizie = 20

let LitrialGiorno = 0;
let ValueWater = 0;
let ValueBucato = 0;
let ValuePiatti = 0;
let ValuePulizie = 0;
let ValueLavas = 0;


let button = document.querySelector('button');

// Prendere i valori
function VediValori(){
     ValueWater = document.getElementById('water').value;
     ValueBucato = document.getElementById('bucato').value;
     ValuePiatti = document.getElementById('piatti').value;
     ValuePulizie = document.getElementById('pulizie').value;
     ValueLavas = document.getElementById('lavastoviglie').value;
     
}

setInterval (funzioneIF,1000);
setInterval(VediValori,1000);




function Calcolo(){
    var LitrialGiorno = ValueWater*gabinetto*7 + ValueBucato*bucato + ValuePiatti*piatti + ValuePulizie*pulizie;
    document.getElementById('res').innerHTML = LitrialGiorno;
}

function funzioneIF(){
    
    if(ValueWater <= 0 || ValueBucato <= 0 || ValuePiatti <= 0 || ValueBucato <= 0 || ValuePulizie <= 0 || ValueLavas <= 0){
        button.classList.remove('btn');
        button.classList.add('no');
    }else{
        button.classList.remove('no');
        button.classList.add('btn');
    }
    
    if (!button.classList.contains('no')){
        button.addEventListener('click', Calcolo);
    } else {
        document.getElementById('res').innerHTML = "Non hai inserito nessun valore oppure hai inserito un valore non valido (es. 0 oppure un valore negativo).";
    }
}