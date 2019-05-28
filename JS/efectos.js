var letra_1 = ["#r1-3","#r1-4","#r1-5","#r1-6","#r1-7","#r1-8","#r1-9"];
var indice_letra_1 = 0;

var  letra_2 = ["#r3-1","#r4-1","#r5-1","#r6-1","#r7-1","#r8-1"];
var indice_letra_2 = 0; 

var id_1 = [["#r2-3","#r2-4","#r2-5","#r2-6","#r2-7","#r2-8","#r2-9"],
        ["#r3-3","#r3-4","#r3-5","#r3-6","#r3-7","#r3-8","#r3-9"],
        ["#r4-3","#r4-4","#r4-5","#r4-6","#r4-7","#r4-8","#r4-9"],
        ["#r5-3","#r5-4","#r5-5","#r5-6","#r5-7","#r5-8","#r5-9"],
        ["#r6-3","#r6-4","#r6-5","#r6-6","#r6-7","#r6-8","#r6-9"],
        ["#r7-3","#r7-4","#r7-5","#r7-6","#r7-7","#r7-8","#r7-9"]];


var id_2 = [["#r3-2","#r3-3","#r3-4","#r3-5","#r3-6","#r3-7","#r3-8"],
        ["#r4-2","#r4-3","#r4-4","#r4-5","#r4-6","#r4-7","#r4-8"],
        ["#r5-2","#r5-3","#r5-4","#r5-5","#r5-6","#r5-7","#r5-8"],
        ["#r6-2","#r6-3","#r6-4","#r6-5","#r6-6","#r6-7","#r6-8"],
        ["#r7-2","#r7-3","#r7-4","#r7-5","#r7-6","#r7-7","#r7-8"],
        ["#r8-2","#r8-3","#r8-4","#r8-5","#r8-6","#r8-7","#r8-8"]];

var next = [["#r3-3","#r3-4","#r3-5","#r3-6","#r3-7","#r3-8","#r3-9"],
        ["#r4-3","#r4-4","#r4-5","#r4-6","#r4-7","#r4-8","#r4-9"],
        ["#r5-3","#r5-4","#r5-5","#r5-6","#r5-7","#r5-8","#r5-9"],
        ["#r6-3","#r6-4","#r6-5","#r6-6","#r6-7","#r6-8","#r6-9"],
        ["#r7-3","#r7-4","#r7-5","#r7-6","#r7-7","#r7-8","#r7-9"],
        ["#r8-3","#r8-4","#r8-5","#r8-6","#r8-7","#r8-8","#r8-9"]];

var iteracion = 0;
var pos_id_1 = 0;
var pos_id_2 = 0;
var pos_next = 0;

var audio = document.createElement("audio");
audio.setAttribute("src","https://firebasestorage.googleapis.com/v0/b/prueba-77144.appspot.com/o/3p.mp3?alt=media&token=51ed2fb1-6718-4b39-9e1b-dbc16c0a5695");

async function Anima(letra1,letra2,id1,id2,nexxt)
{
  $(letra1).animate(iluminaNaranja(),2000,function(){});
  $(letra2).animate(iluminaNaranja(),2000,function(){
      document.querySelector("#mensaje").innerText = "Comparamos si ambas letras son iguales";
  });
  /*$(letra1).delay(8000);
  $(letra2).delay(8000);
  $(id1).delay(2000);
  $(id2).delay(2000);*/
  $(id1).animate(iluminaAzul(),2000,function(){});

  $(id2).animate(iluminaAzul(),2000,function(){
    var l1 = document.querySelector(letra1).innerText;
    var l2 = document.querySelector(letra2).innerText;
    if(l1==l2)
    {
        audio.pause();
        audio.play();
        var m1 = "Las letras son iguales, obtenemos el máximo de los 2 números marcados en azul y le sumamos 1";
        if((pos_id_1>pos_id_2) || (pos_id_1<pos_id_2))
        {
            document.querySelector("#mensaje").innerText =m1+ "\nNo podemos sumar por que el tamaño de la subsecuencia no puede ser mayor al de la cadena actual";
        }
        else
        {
            document.querySelector("#mensaje").innerText =m1;
        }
        
    }
   
    else
    document.querySelector("#mensaje").innerText = "Como son diferentes simplemente escogemos el máximo de los 2 números en azul y lo colocamos en seguida";
  });
  /*$(id2).delay(1000);
  $(id1).delay(3000);*/
  $(id2).animate(iluminaRojo(),2000,function(){
    var a = document.querySelector(id1).innerText;
    var b = document.querySelector(id2).innerText;
    
    if(parseInt(a)>parseInt(b))
        document.querySelector("#mensaje").innerText = "Como "+a+" es mayor a "+b+" entonces escogemos "+a;
    else if(parseInt(b)>parseInt(a))
        document.querySelector("#mensaje").innerText = "Como "+b+" es mayor a "+a+" entonces escogemos "+b;
    else
        document.querySelector("#mensaje").innerText = "Como ambos son iguales escogemos el que sea";
      $(nexxt).show(1000);
  });
  $(id1).animate(iluminaBlanco(),2000,function(){});
  $(id2).animate(iluminaBlanco(),2000,function(){});
  $(letra1).animate(iluminaBlanco(),2000,function(){});
  $(letra2).animate(iluminaBlanco(),2000,async function(){
    
    await ajustarParametros()
    
    var a = parseInt(document.querySelector(id_2[iteracion][pos_id_2]).innerText);
    var b = parseInt(document.querySelector(id_1[iteracion][pos_id_1]).innerText);
    
    if(indice_letra_2!=-1)
    {
        if(a>=b)
        Anima(letra_1[indice_letra_1],letra_2[indice_letra_2],id_2[iteracion][pos_id_2],id_1[iteracion][pos_id_1],next[iteracion][pos_next]);
        else
        Anima(letra_1[indice_letra_1],letra_2[indice_letra_2],id_1[iteracion][pos_id_1],id_2[iteracion][pos_id_2],next[iteracion][pos_next]);
    }

        
  });

}

async function ajustarParametros()
{
    var bandera = 0;
    if(indice_letra_1==6)
    {
        indice_letra_1=0;
        iteracion+=1;
        bandera=1;
        pos_id_1=0;
        pos_id_2=0;
        pos_next=0;
    }
    else
    {
        indice_letra_1+=1;
        pos_id_1+=1;
        pos_id_2+=1;
        pos_next+=1;
    }

    if(bandera==1)
    {
        if(indice_letra_2==6)
            indice_letra_2=-1;
        else
            indice_letra_2+=1;
    }

}

var s_fila_2=8, s_col_2=9;
var s_fila_1=7, s_col_1=8;
var sub_aux="";
var cont=0;
var subsecuencia_final = ['Z','D','C','A'];
var band = true;
function subsecuencia()
{
    var _2 = "#r"+s_fila_2+"-"+s_col_2;
    var _1 = "#r"+s_fila_1+"-"+s_col_1;
    $(_2).animate(iluminaAzul(),3000,function(){});
    $(_1).animate(iluminaAzul(),3000,function(){});

    $(_2).animate(iluminaBlanco(),3000,function(){});
    $(_1).animate(iluminaBlanco(),3000,function(){
        var valor_1 = parseInt(document.querySelector(_2).innerText);
        var valor_2 = parseInt(document.querySelector(_1).innerText);

        if(valor_1!=valor_2)
        {
            if(s_fila_1>=2)
            {
                if(band)
                {
                    sub_aux+=subsecuencia_final[cont];
                    cont+=1;
                    document.querySelector("#mensaje").innerText = sub_aux;
                }
                else
                    band=true;
                
                s_fila_2-=1; s_col_2-=1;
                s_fila_1-=1; s_col_1-=1;
            }
        }

        else
        {
            if(s_col_1>=2)
            {
                s_col_1-=1;
                s_col_2-=1;
            }
            band=false;
        }
        if((s_col_1!=1))
        subsecuencia();
    });
    
}

$(document).ready(function(){

    $("#clean").click(function(){
        for(var i=1;i<=8;i++)
            for(var j=1;j<=9;j++)
                $("#r"+i+"-"+j).fadeOut(1000);
    });

    $("#play").click(function(){
        
        $("#clean").prop("disabled",true);

        for(var i=1;i<=9;i++)
            $("#r1-"+i).show(4000);
            
        for(var i=1;i<=8;i++)
            $("#r"+i+"-"+1).show(4000);

        for(var i=1;i<=9;i++)
            $("#r2-"+i).show(4000);

        for(var i=1;i<=8;i++)
            $("#r"+i+"-"+2).show(4000);

        
        Anima(letra_1[indice_letra_1],letra_2[indice_letra_2],id_1[iteracion][pos_id_1],id_2[iteracion][pos_id_2],next[iteracion][pos_next]);

      
    });

    $("#sub").click(function(){
        subsecuencia();
    });
  });


  function iluminaNaranja()
  {
    data = {
        "background-color":"#94D30C"
      };
      return data;
  }
  
  function iluminaAzul()
  {
      data = {
        "background-color":"#4A9DC3"
      };
      return data;
  }
  
  function iluminaRojo()
  {
      data ={
        "background-color":"#CA1414"
      };
      return data;
  }
  
  function iluminaBlanco()
  {
      data = {
        "background-color":"#000000"
      };
  
      return data;
  }

  function alerta()
  {
      alert("Hola");
  }
