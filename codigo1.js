let frutas = ["banada","Manzanas","pera",5,6,"pedro"];

// array aciosiativo

let pc1 ={
nombre: "Robert Pc",
procesador: "Intel Core 17",
ram: "16Gb",
espacio:"1TB"
};
///////////////////////////////

//document.write(pc1["nombre"])

let nombre = pc1["nombre"];
let procesador = pc1["procesador"];
let ram = pc1["ram"];
let espacio = pc1["espacio"];

frase = ` el nombre de  mi pc es: ${nombre} <br> 
          el procesador es: ${procesador} <br>
          el memoria ram de  mi pc es: ${ram} <br>
          el espacio de  mi pc es: ${espacio} <br>`;

document.write(frase);



//  let numero = 0;
//  let numero1 = 0;

// while(numero < 6)
// {
// numero++;
// document.write(numero + "<br>")
// }

// do{
//     numero1++;
//     document.write(numero1 + "<br>")
//     }

//     while(numero1 < 10) 

// while(numero < 1000)
// {
// numero++;
// document.write(numero + "<br>");
// if(numero == 10)
// {
//     break;
// }
// }

// document.write("fin")


// for(let i = 0; i < 20; i++)
// {   
//     if(i == 12){
//         continue;
//     }
//     document.write(i + "<br>")
// }

// let animales = ["gato","perro"," pollo"];

// for (animal in animales) {
//     document.write(animal + "<br>");
// }

// document.write("<br>");

// for (animal of animales) {
//     document.write(animal + "<br>");
// }

let array1 = ["maria","josefa","roberto"];
let array2 = ["pedro","marcelo","array1"];

for(let array in array2)
{
    if(array==2)
    {
        for(let array of array1)
        {
            document.write(array + "<br>");
        }
    } else{
          document.write(array2[array]+"<br>");
        }
}
