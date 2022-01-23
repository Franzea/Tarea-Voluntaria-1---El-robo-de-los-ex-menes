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

    //Definimos los números aleatorios para paccionar al malo
    var aleJaime1 = parseInt(Math.random() * (7 - 1) + 1); 
    var aleJaime2 = parseInt(Math.random() * (7 - 1) + 1); 

    matriz[aleJaime1][aleJaime2] = "x";

    //Definimos los números aleatorios para paccionar los exámenes 
    var aleexamenes1 = parseInt(Math.random() * (7 - 1) + 1); 
    var aleexamenes1 = parseInt(Math.random() * (7 - 1) + 1); 

    matriz[aleexamenes1][aleexamenes1] = "y";

    //Esto es una prueba (no es definitivo)
    movarribar();

    //Creamos la tabla
    crearTabla(matriz);

    function crearTabla(datosTabla) {

        var tabla = document.createElement('table');
        var cuerpoTabla = document.createElement('tbody');
      
        datosTabla.forEach(function(datosFilas) {
          var fila = document.createElement('tr');
      
          datosFilas.forEach(function(datosCeldas) {
            var celda = document.createElement('td');
            celda.appendChild(document.createTextNode(datosCeldas));
            fila.appendChild(celda);
          });
      
          cuerpoTabla.appendChild(fila);
        });
      
        tabla.appendChild(cuerpoTabla);
        document.querySelector("body").appendChild(tabla);
    }

    function movarribar() {

      posiportaactual2++;
    }


    var Arribar = document.createElement('button'); 
    Arribar.type = 'button'; 
    Arribar.className = 'boton';
    Arribar.innerText = 'Arribar'; 
    document.querySelector("body").appendChild(Arribar); 

    var Izquierda = document.createElement('button'); 
    Izquierda.type = 'button'; 
    Izquierda.className = 'boton';
    Izquierda.innerText = 'Izquierda'; 
    document.querySelector("body").appendChild(Izquierda); 

    var Derecha = document.createElement('button'); 
    Derecha.type = 'button'; 
    Derecha.className = 'boton';
    Derecha.innerText = 'Derecha'; 
    document.querySelector("body").appendChild(Derecha); 

    var Abajo = document.createElement('button'); 
    Abajo.type = 'button'; 
    Abajo.className = 'boton';
    Abajo.innerText = 'Abajo'; 
    document.querySelector("body").appendChild(Abajo); 
}