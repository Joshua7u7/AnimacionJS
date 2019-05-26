

function Anima_2(letra_1,letra_2,id_1,id_2,next)
{
  $(letra_1).animate(iluminaNaranja(),3000,function(){});
  $(letra_2).animate(iluminaNaranja(),3000,function(){});
  $(letra_1).delay(8000);
  $(letra_2).delay(7000);
  $(id_1).delay(2000);
  $(id_2).delay(2000);
  $(id_1).animate(iluminaAzul(),3000,function(){});
  $(id_2).animate(iluminaAzul(),3000,function(){});
  $(id_2).delay(3000);
  $(id_1).delay(6000);
  $(id_2).animate(iluminaRojo(),3000,function(){
      $(next).show(1000);
  });
  $(id_1).animate(iluminaBlanco(),3000,function(){});
  $(id_2).animate(iluminaBlanco(),3000,function(){});
  $(letra_1).animate(iluminaBlanco(),3000,function(){});
  $(letra_2).animate(iluminaBlanco(),3000,function(){
      //Anima_2("#r1-4","#r3-1","#r2-4","#r3-3","#r3-4");
  });
}

