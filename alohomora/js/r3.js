var c1 = document.querySelector(".q1");
var c2 = document.querySelector(".q2");
var c3 = document.querySelector(".q3");
  var xPos1 = 0;
  var xPos2=0;
  var xPos3=0;
  function animate1() {
    xPos1 += 8;
    
    c1.style.transform = `translate3d(${xPos1}px, 0, 0)`;
    
    if (Math.abs(xPos1) >= 500) {
      xPos1 = -500;
    }
    
    requestAnimationFrame(animate1);
  }
  
  animate1();

  function animate2() {

    xPos2+=8;
    ;
    c2.style.transform = `translate3d(${xPos2}px, 0, 0)`;
    
    if (Math.abs(xPos2) >=500) {
        xPos2 = -500;
    }
  
    requestAnimationFrame(animate2);
  }
  animate2();

  
  function animate3() {

     xPos3+=8;

     c3.style.transform = `translate3d(${xPos3}px, 0, 0)`;
    
     if (Math.abs(xPos3) >= 500) {
         xPos3 = -500;
     }
    
     requestAnimationFrame(animate3);
   }
   animate3();