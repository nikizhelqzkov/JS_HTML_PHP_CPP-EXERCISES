let stars = document.getElementsByClassName('star');
let divZone = document.getElementsByClassName('star-zone')[0];
function clickF() {
    document.onkeydown = function (evt) {
      evt = evt || window.event;
      if (evt.keyCode == 27) {
        for (let i = 0; i < stars.length; i++) {
          stars[i].style.backgroundColor = 'transparent';
        }
      }
    };
  var ind = 0;
  for (let i = 0; i < stars.length; ++i) {
    stars[i].onclick = function () {
        let text = document.createTextNode(`Thanks for your ${i+1} stars`);
        let p = document.createElement('p');
        p.style.backgroundColor = 'gold';
        p.appendChild(text);

        divZone.appendChild(p);
      

      for (let i = 0; i < stars.length; i++) {
        stars[i].style.backgroundColor = 'transparent';
      }
      for (let j = 0; j <= i; ++j) {
        stars[j].style.backgroundColor = 'gold';
      }
    };
  }
}

//  p.style.cssText = 'backgroundColor: gold; color: white; fontSize: 20px';
