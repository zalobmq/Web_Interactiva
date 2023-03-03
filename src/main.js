var audio;
/* INICIAR AUDIO-DOCUMNENTAL */

/* Recoge el audio pasado y lo reproduce */
 function playAudio(audioFile) {
   if(!audio){
     audio = new Audio(audioFile);
    audio.play();
    }else{
        audio.pause();
        audio = new Audio(audioFile);
        audio.play();
    }
    
} 

function agregarTextoCORDOBA() {
  const miTitulo = document.getElementById("miTitulo");
  miTitulo.textContent = "🔊 Documental de CORDOBA 🔊 ";
  const misHabitantes = document.getElementById("misHabitantes");
  misHabitantes.textContent = "Nº Habitantes:  781.667";
  console.log(miTitulo)

}
function agregarTextoHUELVA() {
  const miTitulo = document.getElementById("miTitulo");
  miTitulo.textContent = "🔊 Documental de HUELVA 🔊 ";
  console.log(miTitulo)
  const misHabitantes = document.getElementById("misHabitantes");
  misHabitantes.textContent = "Nº Habitantes : 520.862";

}
function agregarTextoSEVILLA() {
  const miTitulo = document.getElementById("miTitulo");
  miTitulo.textContent = "🔊 Documental de SEVILLA 🔊 ";
  console.log(miTitulo)
  const misHabitantes = document.getElementById("misHabitantes");
  misHabitantes.textContent = "Nº Habitantes: 1.957.899";

}

function agregarTextoJAEN() {
  const miTitulo = document.getElementById("miTitulo");
  miTitulo.textContent = "🔊 Documental de JAEN 🔊 ";
  console.log(miTitulo)
  const misHabitantes = document.getElementById("misHabitantes");
  misHabitantes.textContent = "Nº Habitantes: 633.564";

}
function agregarTextoGRANADA() {
  const miTitulo = document.getElementById("miTitulo");
  miTitulo.textContent = "🔊 Documental de GRANADA 🔊 ";
  console.log(miTitulo)
  const misHabitantes = document.getElementById("misHabitantes");
  misHabitantes.textContent = "Nº Habitantes: 914.678";

}
function agregarTextoALMERIA() {
  const miTitulo = document.getElementById("miTitulo");
  miTitulo.textContent = "🔊 Documental de ALMERIA 🔊 ";
  console.log(miTitulo)
  const misHabitantes = document.getElementById("misHabitantes");
  misHabitantes.textContent = "Nº Habitantes:  722.028";

}
function agregarTextoMALAGA() {
  const miTitulo = document.getElementById("miTitulo");
  miTitulo.textContent ="🔊 Documental de MALAGA 🔊 ";
  console.log(miTitulo)
  const misHabitantes = document.getElementById("misHabitantes");
  misHabitantes.textContent = "Nº Habitantes: 1.712.719";

}
function agregarTextoCADIZ() {
  const miTitulo = document.getElementById("miTitulo");
  miTitulo.textContent = "🔊 Documental de CADIZ 🔊 ";
  console.log(miTitulo)
  const misHabitantes = document.getElementById("misHabitantes");
  misHabitantes.textContent = "Nº Habitantes: 11.243.971";

}
/* PARAR AUDIO-DOCUMNENTAL */
function stopAudio() {
  const miTitulo = document.getElementById("miTitulo");
  miTitulo.textContent = "No se reproduce ningun elemento";
  const misHabitantes = document.getElementById("misHabitantes");
  misHabitantes.textContent = "";
    audio.pause();
    
  }
  
  