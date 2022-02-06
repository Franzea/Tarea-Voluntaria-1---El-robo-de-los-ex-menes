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

  matriz[posiportaactual1][posiportaactual2] = "Robert";


  //Definimos los números aleatorios para posicionar al malo
  var aleJaime1 = parseInt(Math.random() * (7 - 1) + 1); 
  var aleJaime2 = parseInt(Math.random() * (7 - 1) + 1); 

  matriz[aleJaime1][aleJaime2] = "Jaime";

  //Definimos los números aleatorios para posicionar los exámenes 
  var aleexamenes1 = parseInt(Math.random() * (7 - 1) + 1); 
  var aleexamenes2 = parseInt(Math.random() * (7 - 1) + 1);
  
  //Controlamos que no se pisen los examenes y el malo
  if (matriz[aleexamenes1][aleexamenes2] != matriz[aleJaime1][aleJaime2]) {
    
    matriz[aleexamenes1][aleexamenes2] = "Examenes";
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
  var examnesrecogidos = false;

  //Boton arriba
  botones[0].onclick = function() {

    if(posiportaactual1 != 0){

      matriz[posiportaactual1][posiportaactual2] = ".";
      posiportaactual1--;
      matriz[posiportaactual1][posiportaactual2] = "Robert";

      var tabla = document.querySelector("table");
      document.querySelector("div").removeChild(tabla);

      crearTabla(matriz);
      jaime(1);
    }

    if ((matriz[posiportaactual1][posiportaactual2] == matriz[aleexamenes1][aleexamenes2]) && (examnesrecogidos == false)) {

      examnesrecogidos = true;

      alert("Exámenes recogidos.\n\n Robet: Toma esa mostri. \n\n Jaime: Ya te pillare!!!!!!.");
      
      document.querySelectorAll("span")[1].textContent="Exámenes Recogidos: SI";

      var salida = document.querySelectorAll("td");
      salida[salida.length-1].style.backgroundColor = 'red';
    }
    
    if ((matriz[posiportaactual1][posiportaactual2] == matriz[7][7]) && (examnesrecogidos == true)) {

      alert("Ganaste, has ayudado a Robert a escapar con los exámenes.");
      alert("Robert se sale con la suya y roba los exámenes finales del ciclo. Se hace rico vendiéndolos a sus compañeros pero se gasta “su fortuna” en skins del Fortnite y en intentar quitarle lanovia a illojuan. Al final no le queda dinero para ir a Howards y se hace cantante de series de anime.");
    
      var opcion = confirm("¿Quieres volver a jugar?");
      if (opcion == true) {
          
        location.href = "Pantalla_carga.html";
      } 
      else {

        location.href = "Despedida.html";
      }
    }
  }


  //Boton izquierda
  botones[1].onclick = function() {

    if (posiportaactual2 != 0) {
      
      matriz[posiportaactual1][posiportaactual2] = ".";
      posiportaactual2--;
      matriz[posiportaactual1][posiportaactual2] = "Robert";

      var tabla = document.querySelector("table");
      document.querySelector("div").removeChild(tabla);

      crearTabla(matriz);
      jaime(2);
    }

    if ((matriz[posiportaactual1][posiportaactual2] == matriz[aleexamenes1][aleexamenes2]) && (examnesrecogidos == false)) {

      examnesrecogidos = true;

      alert("Exámenes recogidos.\n\n Robet: Toma esa mostri. \n\n Jaime: Ya te pillare!!!!!!.");
      
      document.querySelectorAll("span")[1].textContent="Exámenes Recogidos: SI";

      var salida = document.querySelectorAll("td");
      salida[salida.length-1].style.backgroundColor = 'red';
    }

    if ((matriz[posiportaactual1][posiportaactual2] == matriz[7][7]) && (examnesrecogidos == true)) {

      alert("Ganaste, has ayudado a Robert a escapar con los exámenes.");
      alert("Robert se sale con la suya y roba los exámenes finales del ciclo. \n\n Se hace rico vendiéndolos a sus compañeros pero se gasta “su fortuna” en skins del Fortnite y en intentar quitarle lanovia a illojuan. \n\n Al final no le queda dinero para ir a Howards y se hace cantante de series de anime.");
      
      var opcion = confirm("¿Quieres volver a jugar?");
      if (opcion == true) {
          
        location.href = "Pantalla_carga.html";
      } 
      else {

        location.href = "Despedida.html";
      }
    }
  }


  //Boton derecha
  botones[2].onclick = function() {

    if (posiportaactual2 != 7) {

      matriz[posiportaactual1][posiportaactual2] = ".";
      posiportaactual2++;
      matriz[posiportaactual1][posiportaactual2] = "Robert";

      var tabla = document.querySelector("table");
      document.querySelector("div").removeChild(tabla);

      crearTabla(matriz);
      jaime(3);
    }

    if ((matriz[posiportaactual1][posiportaactual2] == matriz[aleexamenes1][aleexamenes2]) && (examnesrecogidos == false)) {

      examnesrecogidos = true;

      alert("Exámenes recogidos.\n\n Robet: Toma esa mostri. \n\n Jaime: Ya te pillare!!!!!!.");
      
      document.querySelectorAll("span")[1].textContent="Exámenes Recogidos: SI";

      var salida = document.querySelectorAll("td");
      salida[salida.length-1].style.backgroundColor = 'red';
    }

    if ((matriz[posiportaactual1][posiportaactual2] == matriz[7][7]) && (examnesrecogidos == true)) {

      alert("Ganaste, has ayudado a Robert a escapar con los exámenes.");
      alert("Robert se sale con la suya y roba los exámenes finales del ciclo. \n\n Se hace rico vendiéndolos a sus compañeros pero se gasta “su fortuna” en skins del Fortnite y en intentar quitarle lanovia a illojuan. \n\n Al final no le queda dinero para ir a Howards y se hace cantante de series de anime.");
      
      var opcion = confirm("¿Quieres volver a jugar?");
      if (opcion == true) {
          
        location.href = "Pantalla_carga.html";
      } 
      else {

        location.href = "Despedida.html";
      }
    }
  }


  //Boton abajo
  botones[3].onclick = function() {

    if(posiportaactual1 != 7){

      matriz[posiportaactual1][posiportaactual2] = ".";
      posiportaactual1++;
      matriz[posiportaactual1][posiportaactual2] = "Robert";

      var tabla = document.querySelector("table");
      document.querySelector("div").removeChild(tabla);

      crearTabla(matriz);
      jaime(0);
    }

    if ((matriz[posiportaactual1][posiportaactual2] == matriz[aleexamenes1][aleexamenes2]) && (examnesrecogidos == false)) {

      examnesrecogidos = true;

      alert("Exámenes recogidos.\n\n Robet: Toma esa mostri. \n\n Jaime: Ya te pillare!!!!!!.");

      document.querySelectorAll("span")[1].textContent="Exámenes Recogidos: SI";

      var salida = document.querySelectorAll("td");
      salida[salida.length-1].style.backgroundColor = 'red';  
    }

    if ((matriz[posiportaactual1][posiportaactual2] == matriz[7][7]) && (examnesrecogidos == true)) {

      alert("Ganaste, has ayudado a Robert a escapar con los exámenes.");
      alert("Robert se sale con la suya y roba los exámenes finales del ciclo. \n\n Se hace rico vendiéndolos a sus compañeros pero se gasta “su fortuna” en skins del Fortnite y en intentar quitarle lanovia a illojuan. \n\n Al final no le queda dinero para ir a Howards y se hace cantante de series de anime.");

      var opcion = confirm("¿Quieres volver a jugar?");
      if (opcion == true) {
          
        location.href = "Pantalla_carga.html";
      } 
      else {

        location.href = "Despedida.html";
      }
    }
  }


  //Creamos una función para mover a al malo
  function jaime(e){
    
    if (matriz[aleJaime1][aleJaime2] != matriz[posiportaactual1][posiportaactual2]) {

        //arriba
        if(e==0){

          if (matriz[aleJaime1][aleJaime2] != matriz[aleexamenes1][aleexamenes2]) {

            if(aleJaime1 != 0){

              matriz[aleJaime1][aleJaime2] = ".";
              aleJaime1--;
              matriz[aleJaime1][aleJaime2] = "Jaime";
        
              var tabla = document.querySelector("table");
              document.querySelector("div").removeChild(tabla);
        
              crearTabla(matriz);
            }
          }
          else if ((matriz[aleJaime1][aleJaime2] == matriz[aleexamenes1][aleexamenes2]) && (examnesrecogidos == false)){

            if(aleJaime1 != 0){

              matriz[aleJaime1][aleJaime2] = "Examenes";
              aleJaime1--;
              matriz[aleJaime1][aleJaime2] = "Jaime";
        
              var tabla = document.querySelector("table");
              document.querySelector("div").removeChild(tabla);
        
              crearTabla(matriz);
            }
          }
        }


        //izquierda
        else if(e==1){

          if (matriz[aleJaime1][aleJaime2] != matriz[aleexamenes1][aleexamenes2]) {

            if (aleJaime2 != 0) {
              
              matriz[aleJaime1][aleJaime2] = ".";
              aleJaime2--;
              matriz[aleJaime1][aleJaime2] = "Jaime";
        
              var tabla = document.querySelector("table");
              document.querySelector("div").removeChild(tabla);
        
              crearTabla(matriz);
            }
          }
          else if ((matriz[aleJaime1][aleJaime2] == matriz[aleexamenes1][aleexamenes2]) && (examnesrecogidos == false)){

            if (aleJaime2 != 0) {
              
              matriz[aleJaime1][aleJaime2] = "Examenes";
              aleJaime2--;
              matriz[aleJaime1][aleJaime2] = "Jaime";
        
              var tabla = document.querySelector("table");
              document.querySelector("div").removeChild(tabla);
        
              crearTabla(matriz);
            }
          }
        }
          

        //derecha
        else if(e==2){

          if (matriz[aleJaime1][aleJaime2] != matriz[aleexamenes1][aleexamenes2]) {

            if (aleJaime2 != 7) {

              matriz[aleJaime1][aleJaime2] = ".";
              aleJaime2++;
              matriz[aleJaime1][aleJaime2] = "Jaime";
        
              var tabla = document.querySelector("table");
              document.querySelector("div").removeChild(tabla);
        
              crearTabla(matriz);
            }
          }
          else if ((matriz[aleJaime1][aleJaime2] == matriz[aleexamenes1][aleexamenes2]) && (examnesrecogidos == false)){

            if (aleJaime2 != 7) {

              matriz[aleJaime1][aleJaime2] = "Examenes";
              aleJaime2++;
              matriz[aleJaime1][aleJaime2] = "Jaime";
        
              var tabla = document.querySelector("table");
              document.querySelector("div").removeChild(tabla);
        
              crearTabla(matriz);
            }
          }
        }


        //abajo
        else{
          
          if (matriz[aleJaime1][aleJaime2] != matriz[aleexamenes1][aleexamenes2]) {

            if(aleJaime1 != 7){

              matriz[aleJaime1][aleJaime2] = ".";
              aleJaime1++;
              matriz[aleJaime1][aleJaime2] = "Jaime";
        
              var tabla = document.querySelector("table");
              document.querySelector("div").removeChild(tabla);
        
              crearTabla(matriz);
            }
          }
          else if ((matriz[aleJaime1][aleJaime2] == matriz[aleexamenes1][aleexamenes2]) && (examnesrecogidos == false)){

            if(aleJaime1 != 7){

              matriz[aleJaime1][aleJaime2] = "Examenes";
              aleJaime1++;
              matriz[aleJaime1][aleJaime2] = "Jaime";
        
              var tabla = document.querySelector("table");
              document.querySelector("div").removeChild(tabla);
        
              crearTabla(matriz);
            }
          }
        }
      
    }

    else{

      alert("Perdiste, Jaime a pillado a Robert. \n\n Robert: Mierda aaaaaaaaa \n\n Jaime: Te pille  Muahahahahahaha!! (lease con entonación de risa malévola).");
      alert("El malvado Jaime Hormiga atrapa a Robert y le obliga a recibir clases de PHP en inglés con Araceli. \n\n Muahahahahahaha!! (lease con entonación de risa malévola).");

      var opcion = confirm("¿Quieres volver a jugar?");
      if (opcion == true) {
          
        location.href = "Pantalla_carga.html";
      } 
      else {

        location.href = "Despedida.html";
      }
    }
  }
}