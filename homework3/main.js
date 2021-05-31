document.getElementById("btnsoLeChan").onclick = function (event) {
    event.preventDefault() ;
    var so = document.getElementById("txt3SoNguyen").value ;
    var soA = Math.floor(so/100);
    var soB = Math.floor(so%100/10);
    var soC = Math.floor(so%100%10);
    console.log(soA,soB,soC);
     var tongSoChan =0;
     var tongSoLe = 0;
  if (soA % 2 == 0) {
  ++tongSoChan;
} else {
    ++tongSoLe;
}
   if (soB % 2 == 0) {
   ++tongSoChan;
       
} else {
    ++tongSoLe;
}
  if (soC % 2 == 0) {
    ++tongSoChan;
      
} else {
   ++tongSoLe;
  
}
 
  var info = "<div>Tổng số chẵn là :" + tongSoChan +"</div>";
    info += "<div> Tổng số lẽ là :" + tongSoLe +"</div>";
    document.getElementById("footercard2").innerHTML= info;
}



 