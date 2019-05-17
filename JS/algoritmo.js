function begin()
{

    //var cadena1 = "ABACADZ";
    //var cadena2 = "AABCDZ";

    var cadena1= document.querySelector("#cad2").value;
    var cadena2= document.querySelector("#cad1").value;

    var matriz = new Array(cadena2.length+1);

    for(var i=0;i<matriz.length;i++)
        matriz[i] = new Array(cadena1.length+1);

    var cad1 = []
    for(var i=0;i<cadena1.length;i++)
        cad1[i]=cadena1[i]

    var cad2 = []
    for(var i=0;i<cadena2.length;i++)
        cad2[i]=cadena2[i]

    for(var y=0;y<matriz.length;y++)
    {
        for(var x=0;x<matriz[y].length;x++)
            matriz[y][x] = 0;
    }

    var regresa = [matriz,cad1,cad2];

    return regresa;
}

function rutina()
{
    var regresa = begin();
    var matriz = regresa[0];
    var cad1 = regresa[1];
    var cad2 = regresa[2];

    
    var fila = 0 , fila_2 = 1;

    /*matriz[fila][indice_1] = 2
    matriz[fila_2][indice_2] = 2*/

    for(var posicion_vertical=0;posicion_vertical<cad2.length;posicion_vertical++)
    {
        var indice_1 = 1 , indice_2 = 0;
        var pos = 1;

        for(var posicion_horizontal=0;posicion_horizontal<cad1.length;posicion_horizontal++)
        {   
            if(cad1[posicion_horizontal]==cad2[posicion_vertical])
            {   
                var aux = max(matriz[fila][indice_1],matriz[fila_2][indice_2])

                if( ( posicion_horizontal > aux ) && (posicion_vertical<aux))
                {
                    if(pos<=cad1.length)
                    {
                        if(fila_2<=cad2.length)
                        {
                            matriz[fila_2][pos] = aux;
                            pos+=1;
                        }   
                    }
                }

                else if((posicion_vertical>posicion_horizontal) && (posicion_horizontal<aux))
                {
                    if(pos<=cad1.length)
                    {
                        if(fila_2<=cad2.length)
                        {
                            matriz[fila_2][pos] = aux;
                            pos+=1;
                        }
                    }
                }
                
                else
                {
                    if(pos<=cad1.length)
                    {
                        if(fila_2<=cad2.length)
                        {
                            matriz[fila_2][pos] = aux+1;
                            pos+=1;
                        }
                    }
                }
            }

            else
            {
                var aux = max(matriz[fila][indice_1],matriz[fila_2][indice_2])
                matriz[fila_2][pos] = aux;
                pos+=1;
            }

            indice_1+=1; indice_2+=1;
        }
        fila+=1; fila_2+=1;
    }
    //imprimirMatriz(matriz);
    escribirTaba(matriz,cad1,cad2);
}

function max(n1,n2)
{
    if(n1==n2)
        return n2;
    else if(n1<n2)
        return n2;
    else
        return n1;
}
function imprimirMatriz(matriz)
{
    for(var y=0;y<matriz.length;y++)
    {
        for(var x=0;x<matriz[y].length;x++)
            process.stdout.write(matriz[y][x].toString() + " ")
        console.log(" ")
    }
}

function escribirTaba(matriz,cadena1,cadena2)
{
    var tabla = "<table class='table'>";
    tabla+= "<thead class='thead-light'>";
    tabla+= "<tr>";
    tabla+= "<th> </th>";
    tabla+= "<th> </th>";
    for(var i=0;i<cadena1.length;i++)
        tabla+="<th>"+cadena1[i]+"</th>";

    tabla+="</tr>";
    tabla+="</thead>";
    tabla+="<tbody>";

    for(var i = 0;i<cadena2.length+1;i++)
    {
        tabla+="<tr>";
        if(i==0)
            tabla+= "<td> </td>";
        else
            tabla+= "<td>"+cadena2[i-1]+"</td>"
        
        for(var j=0;j<matriz[i].length;j++)
                tabla+="<td>"+matriz[i][j].toString()+"</td>";
        tabla+="</tr>";
    }
      
    tabla+="</tbody>";
    tabla+="</table>";

    document.querySelector("#tabla").innerHTML = tabla;
}
