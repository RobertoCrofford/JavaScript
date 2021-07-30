//Ejemplo de cofran

let free = false;

const validarCliente = (time)=>{
 let edad = prompt("Cual es tu edad");
 if(edad > 18)
 {
     if(time >= 2 && time < 7 && free == false)
     {
         alert("puedes pasar gratis");
         free = true;
     }else 
     {
         alert (`son las ${time}:00Hs pero tenes que pagar la entrada`);
        }
 }else{
     alert(" eres un menor de edad no puedes entrar ");
    }
}

validarCliente(4);