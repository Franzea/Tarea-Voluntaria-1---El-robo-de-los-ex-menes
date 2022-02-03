window.onload = function () {
    
  var matriz = [
      [".",".",".",".",".",".",".","."],
      [".",".",".",".",".",".",".","."],
      [".",".",".",".",".",".",".","."],
      [".",".",".",".",".",".",".","."],
      [".",".",".",".",".",".",".","."],
      [".",".",".",".",".",".",".","."],
      [".",".",".",".",".",".",".","."],
      [".",".",".",".",".",".",".","."]
  ];
  

  //Definimos la variables para posicionar al prota
  var posiportaactual1 = 0;
  var posiportaactual2 = 0;

  matriz[posiportaactual1][posiportaactual2] = "o";


  //Definimos los números aleatorios para posicionar al malo
  var aleJaime1 = parseInt(Math.random() * (7 - 1) + 1); 
  var aleJaime2 = parseInt(Math.random() * (7 - 1) + 1); 

  matriz[aleJaime1][aleJaime2] = "x";

  //Definimos los números aleatorios para posicionar los exámenes 
  var aleexamenes1 = parseInt(Math.random() * (7 - 1) + 1); 
  var aleexamenes2 = parseInt(Math.random() * (7 - 1) + 1);
  
  //Controlamos que no se pisen los examenes y el maloaleexamenes1
  if (matriz[aleexamenes1][aleexamenes2] != matriz[aleJaime1][aleJaime2]) {
    
    matriz[aleexamenes1][aleexamenes2] = "y";
  }
  //Si se pisa colocamos los exámenes en esta posición: 
  else{

    matriz[7][0] = "y";
  }

  //Creamos la tabla
  crearTabla(matriz);

  function crearTabla(datosTabla) {

      var tabla = document.createElement('table');
      var cuerpoTabla = document.createElement('tbody');
    
      datosTabla.forEach(function(datosFilas) {
        fila = document.createElement('tr');

        datosFilas.forEach(function(datosCeldas) {
          var celda = document.createElement('td');
          celda.appendChild(document.createTextNode(datosCeldas));
          fila.appendChild(celda);
        });
    
        cuerpoTabla.appendChild(fila);
      });
    
      tabla.appendChild(cuerpoTabla);

      document.querySelector("div").appendChild(tabla);
  }
  

  //Seleccionamos los botones
  var botones = document.querySelectorAll("button");

  //Boton arriba
  botones[0].onclick = function() {

    if(posiportaactual1 != 0){

      matriz[posiportaactual1][posiportaactual2] = ".";
      posiportaactual1--;
      matriz[posiportaactual1][posiportaactual2] = "o";

      var tabla = document.querySelector("table");
      document.querySelector("div").removeChild(tabla);

      crearTabla(matriz);
      jaime(1);
    }

    if (matriz[posiportaactual1][posiportaactual2] == matriz[aleexamenes1][aleexamenes2]) {

      alert("examenes recogidos");
    }

    if (matriz[posiportaactual1][posiportaactual2] == matriz[7][7]) {

      alert("escapaste");
    }
  }


  //Boton izquierda
  botones[1].onclick = function() {

    if (posiportaactual2 != 0) {
      
      matriz[posiportaactual1][posiportaactual2] = ".";
      posiportaactual2--;
      matriz[posiportaactual1][posiportaactual2] = "o";

      var tabla = document.querySelector("table");
      document.querySelector("div").removeChild(tabla);

      crearTabla(matriz);
      jaime(2);
    }

    if (matriz[posiportaactual1][posiportaactual2] == matriz[aleexamenes1][aleexamenes2]) {

      alert("examenes recogidos");
    }

    if (matriz[posiportaactual1][posiportaactual2] == matriz[7][7]) {

      alert("escapaste");
    }
  }


  //Boton derecha
  botones[2].onclick = function() {

    if (posiportaactual2 != 7) {

      matriz[posiportaactual1][posiportaactual2] = ".";
      posiportaactual2++;
      matriz[posiportaactual1][posiportaactual2] = "o";

      var tabla = document.querySelector("table");
      document.querySelector("div").removeChild(tabla);

      crearTabla(matriz);
      jaime(3);
    }

    if (matriz[posiportaactual1][posiportaactual2] == matriz[aleexamenes1][aleexamenes2]) {

      alert("examenes recogidos");
    }

    if (matriz[posiportaactual1][posiportaactual2] == matriz[7][7]) {

      alert("escapaste");
    }
  }


  //Boton abajo
  botones[3].onclick = function() {

    if(posiportaactual1 != 7){

      matriz[posiportaactual1][posiportaactual2] = ".";
      posiportaactual1++;
      matriz[posiportaactual1][posiportaactual2] = "o";

      var tabla = document.querySelector("table");
      document.querySelector("div").removeChild(tabla);

      crearTabla(matriz);
      jaime(0);
    }

    if (matriz[posiportaactual1][posiportaactual2] == matriz[aleexamenes1][aleexamenes2]) {

      alert("examenes recogidos");
    }

    if (matriz[posiportaactual1][posiportaactual2] == matriz[7][7]) {

      alert("escapaste");
    }
  }


  //Creamos una función para mover a al malo
  function jaime(e){
    
    if (matriz[aleJaime1][aleJaime2] != matriz[posiportaactual1][posiportaactual2]) {

      //arriba
      if(e==0){
        if(aleJaime1 != 0){

          matriz[aleJaime1][aleJaime2] = ".";
          aleJaime1--;
          matriz[aleJaime1][aleJaime2] = "x";
    
          var tabla = document.querySelector("table");
          document.querySelector("div").removeChild(tabla);
    
          crearTabla(matriz);
        }
      }


      //izquierda
      else if(e==1){
        if (aleJaime2 != 0) {
          
          matriz[aleJaime1][aleJaime2] = ".";
          aleJaime2--;
          matriz[aleJaime1][aleJaime2] = "x";
    
          var tabla = document.querySelector("table");
          document.querySelector("div").removeChild(tabla);
    
          crearTabla(matriz);
        }
      }
        

      //derecha
      else if(e==2){
        if (aleJaime2 != 7) {

          matriz[aleJaime1][aleJaime2] = ".";
          aleJaime2++;
          matriz[aleJaime1][aleJaime2] = "x";
    
          var tabla = document.querySelector("table");
          document.querySelector("div").removeChild(tabla);
    
          crearTabla(matriz);
        }
      }


      //abajo
      else{
        if(aleJaime1 != 7){

          matriz[aleJaime1][aleJaime2] = ".";
          aleJaime1++;
          matriz[aleJaime1][aleJaime2] = "x";
    
          var tabla = document.querySelector("table");
          document.querySelector("div").removeChild(tabla);
    
          crearTabla(matriz);
        }
      }

    }

    else{

      alert("perdiste");
    }
  }
}




