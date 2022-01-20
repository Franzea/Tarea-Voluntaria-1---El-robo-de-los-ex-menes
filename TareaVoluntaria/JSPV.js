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

    //Cambiar
    matriz[0][0] = "h";
    
    var Arribar = document.createElement('button'); 
    Arribar.type = 'button'; 
    Arribar.className = 'boton';
    Arribar.innerText = 'Arribar'; 
    document.body.appendChild(Arribar); 

    var Izquierda = document.createElement('button'); 
    Izquierda.type = 'button'; 
    Izquierda.className = 'boton';
    Izquierda.innerText = 'Izquierda'; 
    document.body.appendChild(Izquierda); 

    var Derecha = document.createElement('button'); 
    Derecha.type = 'button'; 
    Derecha.className = 'boton';
    Derecha.innerText = 'Derecha'; 
    document.body.appendChild(Derecha); 

    var Abajo = document.createElement('button'); 
    Abajo.type = 'button'; 
    Abajo.className = 'boton';
    Abajo.innerText = 'Abajo'; 
    document.body.appendChild(Abajo); 
}