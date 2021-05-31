document.getElementById("btnsoLonNhat").onclick = function (event) {
    event.preventDefault();
    var so = document.getElementById("txt3KySo").value ;
    var soA = Math.floor(so/100);
    var soB = Math.floor(so%100/10);
    var soC =Math .floor (so%100%10);
    //     if (soA>soB,soA>soC) {
    //     var soLonNhat = soA ;
    // }else if (soB>soA,soB>soC){
    //     var soLonNhat = soB ;
    // } else if(soC>soA,soC>soB){
    //     var soLonNhat = soC ;
    // }
    var soLonNhat = Math.max(soA,soB,soC)
    var info = "<div class='alert alert-warning'>"+ soLonNhat +"</div>";
document.getElementById("footercard").innerHTML= info;
}