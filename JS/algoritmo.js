var link_python = "https://firebasestorage.googleapis.com/v0/b/prueba-77144.appspot.com/o/Subsecuencia.ipynb?alt=media&token=b69cd6a0-4603-4bb8-8518-a83ae387058c";
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
    subsecuencia(matriz,cad1,cad2);
    escribirTaba(matriz,cad1,cad2);
}

function esDiferente(n1,n2,n3,n4)
{
    if(n1!=n4 && n2!=n4 && n3!=n4)
        return 1
    else if(n1==n4 && n2==n4 && n3==n4)
        return 2
    else if(n3==n4 && n2!=n4)
        return 3
    else if(n1==n4 && n3!=n4 && n2!=n4)
        return 4
    else
        return 4
}
    
      

function subsecuencia(matriz,cadena_1,cadena_2)
{
    fila_2 = (matriz.length)-1; 
    fila_1 = (matriz.length)-2;
    izquierdo = (matriz[1].length)-2;
    derecho = (matriz[1].length)-1;
    pos = (cadena_2.length)-1; 
    subsecuencia = [];
    index=0;

    while( (fila_1-1)>=-1 )
    {
        n1 = matriz[fila_1][izquierdo]; 
        n2 = matriz[fila_1][derecho];
        n3 = matriz[fila_2][izquierdo]; 
        n4 = matriz[fila_2][derecho];
        opcion = esDiferente(n1,n2,n3,n4);
        if(opcion==1)
        {
            subsecuencia[index]=cadena_2[pos]
            index+=1;
            fila_2-=1; fila_1-=1;
            izquierdo-=1; derecho-=1;
            if(pos>=0)
                pos-=1;
            else
                fila_1=-2;
        }
        else if(opcion==2 || opcion==3)
        {
              izquierdo-=1; 
              derecho-=1;
        }

        else if(opcion==4)
        {
            fila_1-=1; 
            fila_2-=1;
            if(pos>=0)
                pos-=1;
            else
                fila_1=-2;
        }
    }
    subsecuencia = subsecuencia.reverse();

    document.getElementById("subb").value = (subsecuencia.join(''));
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
    var tabla = "<table class='table' style='color:white;'>";
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

/*
function modalJuez(){
    $('.modal-body').load('link_python',function () {
        $('#modalJuez').modal({
            show: true
        });
    });
}
*/

window.onload = poner;
function poner()
{
    document.querySelector("#jupyter").innerHTML = "<embed src='../Subsecuencia.html#toolbar=0' width='100%' height='100%'>";  
}
//Access-Control-Allow-Origin: https://amazing.site
//var link_python = "https://firebasestorage.googleapis.com/v0/b/prueba-77144.appspot.com/o/Subsecuencia.ipynb?alt=media&token=b69cd6a0-4603-4bb8-8518-a83ae387058c";
