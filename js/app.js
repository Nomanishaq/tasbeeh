$(document).ready(function(){
	setTimeout(function(){
	    $("#myModal").modal('show'); }, 5000);
});

let content = (tasbeehValue,title,limits,Contet)=>{
      tasbeehVal = tasbeehValue
      contentTitle.innerHTML = title;
      limit.innerHTML = limits;
      mainContent.innerHTML = Contet;
}

let countfunc = ()=> {
      tasbeehVal += 1;
      tasbeeh.innerHTML = tasbeehVal;
      tasbeeh.style.color = "red";
      if (tasbeehVal === 3 && contentTitle.innerHTML == "Darood Pak") {
            content(0,'Dua','11','اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْبَرَصِ وَالْجُنُونِ وَالْجُذَامِ وَمِنْ سَيِّئِ الأَسْقَامِ');
      }
      else if (tasbeehVal === 11 && contentTitle.innerHTML == "Dua") {
            content(0,'Ayat-e-Kareema','100',' لاَّ إِلَـهَ إِلاَّ أَنتَ سُبْحَـنَكَ إِنِّى كُنتُ مِنَ الظَّـلِمِينَ');
      }
      else if (tasbeehVal === 100 && contentTitle.innerHTML == "Ayat-e-Kareema") {
            $("#Modal").modal('show');
      }
}

let countdisplay = ()=> {
      container.className = "hidden";
      contentContainer.className = "display"
}

let randomly = ()=>{
      content(0,'Astaghfirullah','No Limit','أَسْتَغْفِرُ اللّٰهَ');
}

let reset = ()=>{
      location.reload();
}

astagfar.addEventListener('click',randomly);
resetbtn.addEventListener('click',reset);
count.addEventListener("click",countfunc);
btn.addEventListener("click",countdisplay);

if ("serviceWorker" in navigator){
    navigator.serviceWorker.register("./serviceWorker.js").then(function() {
      })
      .catch(function() {
            console.log('error');       
      });
}