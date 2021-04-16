var rangeslider = document.getElementById("sliderRange");
var output = document.getElementById("demo");
var pageViews = document.getElementById("number");
var progressBar = document.getElementById("progressBar");

output.innerHTML = rangeslider.value;
pageViews.innerHTML = rangeslider.value;

function calc(){

  if (document.getElementById('checkboxRange').checked){
      document.getElementById('sliderRange').min = 0;
      document.getElementById('sliderRange').max = 80;
      document.getElementById('sliderRange').step = 20;
  } else {
    document.getElementById('sliderRange').min = 0;
    document.getElementById('sliderRange').max = 64;
    document.getElementById('sliderRange').step = 16;
  }
}

rangeslider.oninput = function() {
  output.innerHTML = ("$" + this.value + ".00");

  if (this.value === "0") {
    pageViews.innerHTML = ("0");
    progressBar.style.width = "0%";
  } else if (this.value === "16" || this.value === "20") {
    pageViews.innerHTML = ("100k PAGEVIEWS")
    progressBar.style.width = "25%";
  } else if (this.value === "32" || this.value === "40") {
    pageViews.innerHTML = ("150k PAGEVIEWS")
    progressBar.style.width = "50%";
  } else if (this.value === "48" || this.value === "60") {
    pageViews.innerHTML = ("200k PAGEVIEWS")
    progressBar.style.width = "75%";
  } else if (this.value === "64" || this.value === "80") {
    pageViews.innerHTML = ("250k PAGEVIEWS")
    progressBar.style.width = "100%";
  }
}

function calc(){

  if (document.getElementById('checkboxRange').checked){
      document.getElementById('sliderRange').min = 0;
      document.getElementById('sliderRange').max = 80;
      document.getElementById('sliderRange').step = 20;
  } else {
    document.getElementById('sliderRange').min = 0;
    document.getElementById('sliderRange').max = 64;
    document.getElementById('sliderRange').step = 16;
  }
}
