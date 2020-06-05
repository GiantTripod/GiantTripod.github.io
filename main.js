function showPage1() {
    document.querySelector('#page-1').style.display = '';
    document.querySelector('#page-2').style.display = 'none';
    document.querySelector('#page-3').style.display = 'none';
    document.querySelector('#page-4').style.display = 'none';
    document.querySelector('#page-5').style.display = 'none';
}

function showPage2() {
    document.querySelector('#page-1').style.display = 'none';
    document.querySelector('#page-2').style.display = '';
    document.querySelector('#page-3').style.display = 'none';
    document.querySelector('#page-4').style.display = 'none';
    document.querySelector('#page-5').style.display = 'none';
}

function showPage3() {
    document.querySelector('#page-1').style.display = 'none';
    document.querySelector('#page-2').style.display = 'none';
    document.querySelector('#page-3').style.display = '';
    document.querySelector('#page-4').style.display = 'none';
    document.querySelector('#page-5').style.display = 'none';
}

function showPage4() {
    document.querySelector('#page-1').style.display = 'none';
    document.querySelector('#page-2').style.display = 'none';
    document.querySelector('#page-3').style.display = 'none';
    document.querySelector('#page-4').style.display = '';
    document.querySelector('#page-5').style.display = 'none';
}

function showPage5() {
    document.querySelector('#page-1').style.display = 'none';
    document.querySelector('#page-2').style.display = 'none';
    document.querySelector('#page-3').style.display = 'none';
    document.querySelector('#page-4').style.display = 'none';
    document.querySelector('#page-5').style.display = '';
}


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  } 