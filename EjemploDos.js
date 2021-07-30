let cantidad = prompt("cuanto alumnos son");
let alumnosTotales = [];

for (i = 0; i < cantidad; i++)
{
    alumnosTotales[i] = [prompt("Nombre del alumno" + (i+1)),0];
    
}

const tomarAsistencia = (nombre,p)=>{
 let presencia = prompt(nombre);
 if(presencia == "p" || presencia =="P")
 {
     alumnosTotales[i][1]++;
 }
}

for (i = 0; i<30; i++)
{
 for (alumno in alumnosTotales){
     tomarAsistencia(alumnosTotales)
     {
         tomarAsistencia(alumnosTotales[alumno])
     }
 }
}