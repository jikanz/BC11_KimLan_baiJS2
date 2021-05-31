

document.getElementById("btnSoNgay").onclick = function () {
    var  mont = document.getElementById("txtThang1").value;
switch (mont) {
    case 1 : 
   mont= "Jan"
        break;
    case 2 :
    mont="Feb"
        break;
    case 3 :
    mont="Mar"
        break;
    case 4 :
    mont="Apr"
        break;
    case 5 :    
    mont="May"
        break;
    case 6 :
    mont="Jun"
        break;
    case 7 :
    mont="Jul"
        break;
    case 8 :
    mont="Aug"
        break;
    case 9 :
    mont="Sep"
        break;
    case 10 :
    mont="Oct"
        break;       
    case 11 :
    mont="Nov"
        break;
    case 12 :
    mont="Dec"
        break;    
}
       document.getElementById("footerCard5").innerHTML = "Tháng: " + mont;
}