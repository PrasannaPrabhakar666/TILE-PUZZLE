//alert("working");

//document.getElementById("m1").style.backgroundColor = "#ff449f";
 var randomPosition=Math.floor(Math.random()*25+1);
  var randomMainTile;
  var c1=0,c2=0,c3=0,c4=0,c5=0,c6=0;
  var d1=0,d2=0,d3=0,d4=0,d5=0,d6=0;
  var j=10;
  var p=0;
  var q=0;
  var r=0;
  var s=0;
var temp;
var pos;
var temp2;
var te;
var t;
var t1;
var tee;
var ti;
var count=0;
                      // color choosing for main tile starts

for(var i=1; i<26; i++)
{


   randomMainTile=Math.floor(Math.random()*6+1);
  if( i === randomPosition)
{
  document.getElementById("m"+i).style.backgroundColor = "#cc9b6d";
    document.getElementById("m"+i).style.borderColor  = "#cc9b6d";
    }
  else{
    colorMatcher(randomMainTile);

  }

}

function colorMatcher(n)
{
  switch(n)
  {
    case 1:
    c1+=1;
    return  document.getElementById("m"+i).style.backgroundColor = "#ff449f";
    break;
    case 2:
    c2+=1;
    return  document.getElementById("m"+i).backgroundColor = "#04009a";
     break;
    case 3:
     c3+=1;
     return document.getElementById("m"+i).style.backgroundColor = "#72147e";
    break;
    case 4:
    c4+=1;
   return document.getElementById("m"+i).style.backgroundColor = "#81b214";
   break;
    case 5:
      c5+=1;
      return  document.getElementById("m"+i).style.backgroundColor = "#fff600";
     break;
    case 6:
      c6+=1;
    return  document.getElementById("m"+i).style.backgroundColor = "#6ddccf";
    break;
  }
}
//alert(c1+" " +" "+c2+" "+c3+" "+c4+" "+c5+" "+c6);

           //color choosing for main tile ends




           // Color choosing for samll tile starts

   while(j>0)
   {
     var modelTile=Math.floor(Math.random()*6+1);
   //if(d1<=c1 && d2<=c2 && d3<=c3 && d4<=c4 && d5<=c5 && d6<=c6  )
  if(modelTile===1 && d1<c1)
  {
    j=j-1;
    colorMatcherForModel(modelTile);
  }
  else if(modelTile===2 && d2<c2)
  {
    j=j-1;
    colorMatcherForModel(modelTile);
  }
  else if(modelTile===3 && d3<c3)
  {
    j=j-1;
    colorMatcherForModel(modelTile);
  }
  else if(modelTile===4 && d4<c4)
  {
    j=j-1;
    colorMatcherForModel(modelTile);
  }
  else if(modelTile===5 && d5<c5)
  {
    j=j-1;
    colorMatcherForModel(modelTile);
  }
else if(modelTile===6 && d6<c6)
  {
    j=j-1;
    colorMatcherForModel(modelTile);
  }




}

   function colorMatcherForModel(m)
   {
     switch(m)
     {
       case 1:

      d1+=1;
       return  document.getElementById("mo"+j).style.backgroundColor = "#ff449f";

       break;
       case 2:

       d2+=1;
       return  document.getElementById("mo"+j).backgroundColor = "#04009a";

     break;
       case 3:

        d3+=1;
        return document.getElementById("mo"+j).style.backgroundColor = "#72147e";

      break;
       case 4:


      d4+=1;
      return document.getElementById("mo"+j).style.backgroundColor = "#81b214";

    break;
       case 5:

         d5+=1;
         return  document.getElementById("mo"+j).style.backgroundColor = "#fff600";

       break;
       case 6:

      d6+=1;
       return  document.getElementById("mo"+j).style.backgroundColor = "#6ddccf";

     break;
     }
   }


         //color choosing for small tile ends



           //function to find movable neighbour
/*function gameon()
{   t=1;
  return t;
}
 */

function neighbour(randomPosition)
{
  tee=randomPosition;
//  alert(tee);
if(tee===7||tee===8||tee===9||tee===12||tee===13||tee===14||tee===17||tee===18||tee===19)
{
  p=tee-1;
  q=tee+1;
  r=tee-5;
  s=tee+5;
}
else if (tee===2||tee===3||tee===4) {
  p=tee-1;
  q=tee+1;
  r=0;
  s=tee+5;
}
else if (tee===10||tee===15||tee===20) {
  p=tee-1;
  q=0;
  r=tee-5;
  s=tee+5;
  }
  else if (tee===6||tee===11||tee===16) {
    p=0;
    q=tee+1;
    r=tee-5;
    s=tee+5;
    }
    else if (tee===22||tee===23||tee===24) {
      p=tee-1;
      q=tee+1;
      r=tee-5;
      s=0;
      }
  else if (tee===1) {
    p=0;
    q=tee+1;
    r=0;
    s=tee+5;
  }
  else if (tee===5) {
    p=tee-1;
    q=0;
    r=0;
    s=tee+5;
  }
  else if (tee===21) {
    p=0;
    q=tee+1;
    r=tee-5;
    s=0;
  }
  else if (tee===25) {
    p=tee-1;
    q=0;
    r=tee-5;
    s=0;
  }
  // alert(""+p+""+q+""+r+""+s) ;
     return p,q,r,s ;
}

//neighbour(tee);


//alert(" "+p+" "+q+" "+r+" " +s);


 //document.getElementById("start").addEventListener("click",starting);
function starting(clicked_id)
{
  //alert("working" + clicked_id);

if(count===0)
{
  neighbour(randomPosition);
  count+=1;
}
else
{
  neighbour(tee);
  count+=1;
}


  if(clicked_id==="m"+p && p!=0)
  {
    document.getElementById("correctmove").play();
    swap(clicked_id);
    tee=p;
  }

  else if (clicked_id==="m"+q && q!=0)
  {
    document.getElementById("correctmove").play();
    swap(clicked_id);
    tee=q;
  }
  else if (clicked_id==="m"+r && r!=0)
  {
    document.getElementById("correctmove").play();
    swap(clicked_id);
    tee=r;
  }
  else if (clicked_id==="m"+s && s!=0)
  {
    document.getElementById("correctmove").play();
    swap(clicked_id);
    tee=s;
  }
  else{
    document.getElementById("wrongmove").play();
    alert("Tile can't be moved");
  }

return tee;
//alert(tee);

}
//neighbour(tee);

 function swap(clicked_id)
{
//  alert(te);
  //  var   temp = clicked_id;
    //  clicked_id = tee;
    //  tee = temp;
      //document.getElementById("")
    //  alert(clicked_id );
    //  alert(tee);

      ti=document.getElementById("m"+tee).style.backgroundColor;
     var tb=document.getElementById("m"+tee).style.borderColor;
     document.getElementById("m"+tee).style.backgroundColor=document.getElementById(clicked_id).style.backgroundColor ;
     document.getElementById("m"+tee).style.borderColor= document.getElementById(clicked_id).style.borderColor ;
      document.getElementById(clicked_id).style.backgroundColor= ti;
     document.getElementById(clicked_id).style.borderColor= tb;
      //randomPosition=tee;
     return clicked_id.slice(1);



//neighbour();
    // clicked_id="m"+t1;
    // alert(tee);
}

function playcheer()
{
    document.getElementById("cheer").play();
}
function gameover()
{



  if(document.getElementById("mo1").style.backgroundColor===document.getElementById("m7").style.backgroundColor && document.getElementById("mo2").style.backgroundColor===document.getElementById("m8").style.backgroundColor  && document.getElementById("mo3").style.backgroundColor===document.getElementById("m9").style.backgroundColor &&  document.getElementById("mo4").style.backgroundColor===document.getElementById("m12").style.backgroundColor && document.getElementById("mo5").style.backgroundColor===document.getElementById("m13").style.backgroundColor && document.getElementById("mo6").style.backgroundColor===document.getElementById("m14").style.backgroundColor && document.getElementById("mo7").style.backgroundColor===document.getElementById("m17").style.backgroundColor && document.getElementById("mo8").style.backgroundColor===document.getElementById("m18").style.backgroundColor && document.getElementById("mo9").style.backgroundColor===document.getElementById("m19").style.backgroundColor  )
  {
    document.getElementById("winsound").play();
   alert("Steps taken :   "+count +"YoU WoN" );
  }
  else{
    document.getElementById("giveup").play();
    alert("You Lose");

  }
}

// starting();
// swap();
