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
  miTitulo.textContent = "π Documental de CORDOBA π ";
  const misHabitantes = document.getElementById("misHabitantes");
  misHabitantes.textContent = "NΒΊ Habitantes:  781.667";
  console.log(miTitulo)

}
function agregarTextoHUELVA() {
  const miTitulo = document.getElementById("miTitulo");
  miTitulo.textContent = "π Documental de HUELVA π ";
  console.log(miTitulo)
  const misHabitantes = document.getElementById("misHabitantes");
  misHabitantes.textContent = "NΒΊ Habitantes : 520.862";

}
function agregarTextoSEVILLA() {
  const miTitulo = document.getElementById("miTitulo");
  miTitulo.textContent = "π Documental de SEVILLA π ";
  console.log(miTitulo)
  const misHabitantes = document.getElementById("misHabitantes");
  misHabitantes.textContent = "NΒΊ Habitantes: 1.957.899";

}

function agregarTextoJAEN() {
  const miTitulo = document.getElementById("miTitulo");
  miTitulo.textContent = "π Documental de JAEN π ";
  console.log(miTitulo)
  const misHabitantes = document.getElementById("misHabitantes");
  misHabitantes.textContent = "NΒΊ Habitantes: 633.564";

}
function agregarTextoGRANADA() {
  const miTitulo = document.getElementById("miTitulo");
  miTitulo.textContent = "π Documental de GRANADA π ";
  console.log(miTitulo)
  const misHabitantes = document.getElementById("misHabitantes");
  misHabitantes.textContent = "NΒΊ Habitantes: 914.678";

}
function agregarTextoALMERIA() {
  const miTitulo = document.getElementById("miTitulo");
  miTitulo.textContent = "π Documental de ALMERIA π ";
  console.log(miTitulo)
  const misHabitantes = document.getElementById("misHabitantes");
  misHabitantes.textContent = "NΒΊ Habitantes:  722.028";

}
function agregarTextoMALAGA() {
  const miTitulo = document.getElementById("miTitulo");
  miTitulo.textContent ="π Documental de MALAGA π ";
  console.log(miTitulo)
  const misHabitantes = document.getElementById("misHabitantes");
  misHabitantes.textContent = "NΒΊ Habitantes: 1.712.719";

}
function agregarTextoCADIZ() {
  const miTitulo = document.getElementById("miTitulo");
  miTitulo.textContent = "π Documental de CADIZ π ";
  console.log(miTitulo)
  const misHabitantes = document.getElementById("misHabitantes");
  misHabitantes.textContent = "NΒΊ Habitantes: 11.243.971";

}
/* PARAR AUDIO-DOCUMNENTAL */
function stopAudio() {
  const miTitulo = document.getElementById("miTitulo");
  miTitulo.textContent = "No se reproduce ningun elemento";
  const misHabitantes = document.getElementById("misHabitantes");
  misHabitantes.textContent = "";
    audio.pause();
    
  }
  
  