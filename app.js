var rangeslider = document.getElementById("sliderRange");
var output = document.getElementById("demo");
var pageViews = document.getElementById("number");
var progressBar = document.getElementById("progressBar");

output.innerHTML = rangeslider.value;
pageViews.innerHTML = rangeslider.value;

rangeslider.oninput = function() {
  output.innerHTML = ("$" + this.value + ".00");
  progressBar.style.width = this.value + "%" ;

  if (this.value === "0") {
    pageViews.innerHTML = ("0");
  } else if (this.value === "16" || this.value === "20") {
    pageViews.innerHTML = ("100k PAGEVIEWS")
  } else if (this.value === "32" || this.value === "40") {
    pageViews.innerHTML = ("150k PAGEVIEWS")
  } else if (this.value === "48" || this.value === "60") {
    pageViews.innerHTML = ("200k PAGEVIEWS")
  } else if (this.value === "64" || this.value === "80") {
    pageViews.innerHTML = ("250k PAGEVIEWS")
  }
}

function calc(){

  if (document.getElementById('checkboxRange').checked){
      document.getElementById('sliderRange').min = 0;
      document.getElementById('sliderRange').max = 80;
      document.getElementById('sliderRange').step = 20;
  } else {
    document.getElementById('sliderRange').min = 0;
    document.getElementById('sliderRange').max = 64
    document.getElementById('sliderRange').step = 16;
  }
}
