document.getElementById('btnChao').onclick = function () {
    var select= document.getElementById("select").value;
          if (select == 1) {
            var loiChao = "Con Chào Bố Ạ";
   }
   else if (select == 2) { var loiChao = "Con Chào Mẹ Ạ";
   }
   else if(select == 3) {
      var loiChao ="Em Chào Anh ạ";
   }
   else {
   var loiChao ="Mau chào Anh đi em";

   }
document.getElementById("footercard1").innerHTML = "Chào : " + loiChao;
}
