document.getElementById("btnTinh").onclick = function () {
 var canh1 = document.getElementById("txtCanh1").value ;
  var canh2 = document.getElementById("txtCanh2").value ;
   var canh3 = document.getElementById("txtCanh3").value ;
   console.log(canh1,canh2,canh3)
   if ((canh1==canh2) && (canh2==canh3) && (canh1==canh3 )) {
       var tamGiac = "Tam giác Đều" 
          console.log("tamgiacdeu")
   }
   else if ((canh1==canh2) || (canh2==canh3) || (canh1==canh3 )) {
       var tamGiac = "Tam giác Cân"
   console.log("tamgiaccan")
   }
   else if((canh1*canh1)==(canh2*canh2)+(canh3*canh3) || (canh2*canh2)==(canh1*canh1)+(canh3*canh3) || (canh3*canh3)==(canh2*canh2)+(canh1*canh1) ) {
     var tamGiac = "Tam giác Vuông"
      console.log("tamgiacvuong")}
    else {
       var tamGiac = "có thành tam giác hay không thì vẽ thử xem được k"
   console.log("tamgiacthuong")
   
   }
   document.getElementById("footerCard3").innerHTML = "ĐÓ chính là : " + tamGiac;
}
