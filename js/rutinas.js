var texto = document.getElementById('caja_texto');
var boton = document.getElementById('botoncito');
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById('dibujo');
var lienzo = d.getContext("2d");


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick()
{
    var lineas = parseInt(texto.value);
    var x0 = 0; 
    var y0 = 0;
    color = "#FAA";
    
    for (var cont= 0; cont <= lineas; cont++)
    {
        dibujarLinea(color, 0, x0, y0, 500);
        dibujarLinea(color, x0, 500, 500, 500 - y0);
        dibujarLinea(color, 500, 500 - x0, 500 - y0, 0);
        dibujarLinea(color, 500 - x0, 0, 0, y0);
        x0 = x0 + 5;
        y0 = x0 + 5;
    }
}