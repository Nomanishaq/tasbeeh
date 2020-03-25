$(document).ready(function(){
	setTimeout(function(){
	    $("#myModal").modal('show'); }, 5000);
});

let countfunc = ()=> {
      tasbeehVal += 1;
      tasbeeh.innerHTML = tasbeehVal;
      tasbeeh.style.color = "red";
      if (tasbeehVal === 3 && contentTitle.innerHTML == "Darood Pak") {
            tasbeehVal = 0;
            contentTitle.innerHTML = "Dua";
            limit.innerHTML = "11";
            mainContent.innerHTML = "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْبَرَصِ وَالْجُنُونِ وَالْجُذَامِ وَمِنْ سَيِّئِ الأَسْقَامِ";
      }
      else if (tasbeehVal === 11 && contentTitle.innerHTML == "Dua") {
            tasbeehVal = 0;
            contentTitle.innerHTML = "Ayat-e-Kareema";
            limit.innerHTML = "100";
            mainContent.innerHTML =" لاَّ إِلَـهَ إِلاَّ أَنتَ سُبْحَـنَكَ إِنِّى كُنتُ مِنَ الظَّـلِمِينَ";
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
      tasbeehVal += 1;
      tasbeehVal = 0;
      tasbeeh.innerHTML = tasbeehVal;
      contentTitle.innerHTML = "Astaghfirullah";
      tasbeeh.style.color = "red";
      limit.innerHTML = "No Limit";
      mainContent.innerHTML = "أَسْتَغْفِرُ اللّٰهَ";
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