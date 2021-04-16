var rangeslider = document.getElementById("sliderRange");
var output = document.getElementById("demo");
var pageViews = document.getElementById("number");
var progressBar = document.getElementById("progressBar");
var when = document.getElementById("when");

output.innerHTML = rangeslider.value;
pageViews.innerHTML = "1K PAGEVIEWS";

function check(){

  if (document.getElementById('checkboxRange').checked){
    if (rangeslider.value === "25") {
      output.innerHTML = ("$20.00")
    } else if (rangeslider.value === "50"){
      output.innerHTML = ("$40.00")
    } else if (rangeslider.value === "75"){
      output.innerHTML = ("$60.00")
    } else if (rangeslider.value === "100"){
      output.innerHTML = ("$80.00")
    } else if (rangeslider.value === "0"){
      output.innerHTML = ("0")
    }
  } else {
    if (rangeslider.value === "25") {
      output.innerHTML = ("$16.00")
    } else if (rangeslider.value === "50"){
      output.innerHTML = ("$32.00")
    } else if (rangeslider.value === "75"){
      output.innerHTML = ("$48.00")
    } else if (rangeslider.value === "100"){
      output.innerHTML = ("$64.00")
    } else if (rangeslider.value === "0"){
      output.innerHTML = ("0")
    }
  }
}

rangeslider.oninput = function() {

  if (this.value === "0") {
    pageViews.innerHTML = ("1k PAGEVIEWS");
    progressBar.style.width = "0%";
  } else if (this.value === "25") {
    pageViews.innerHTML = ("100k PAGEVIEWS")
    progressBar.style.width = "25%";
  } else if (this.value === "50") {
    pageViews.innerHTML = ("150k PAGEVIEWS")
    progressBar.style.width = "50%";
  } else if (this.value === "75") {
    pageViews.innerHTML = ("200k PAGEVIEWS")
    progressBar.style.width = "75%";
  } else if (this.value === "100") {
    pageViews.innerHTML = ("250k PAGEVIEWS")
    progressBar.style.width = "100%";
  }
}
