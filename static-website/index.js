currentIndex=0
images=["first.jpg","second.jpeg","third.jpeg","fourth.jpeg",
"fifth.jpeg",
"sixth.jpg"]

setInterval(
    function() {
     currentIndex=Math.round(Math.random()*5)
     document.getElementById("img1").src = 
     images[ currentIndex ]
    },10000 
)




function changeImage(arrowtype){
    console.log (arrowtype)
    if(arrowtype=="right"){
       currentIndex = currentIndex==5?0:++currentIndex
    }
    else if(arrowtype=="left"){
        currentIndex = currentIndex==0?5:--currentIndex
    }
    // else if(arrowtype=="up"){

    //     const rotated = document.getElementById('rotated');
    //     rotated.style.rotate = 'rotate(90deg)';
    // }
    document.getElementById("img1").src=images[currentIndex]
 
}

function up_down_Image(arrowtype){
    console.log (arrowtype)
    if(arrowtype=="up"){
       currentIndex = currentIndex==5?0:++currentIndex
    }
    else if(arrowtype=="down"){
        currentIndex = currentIndex==0?5:--currentIndex
    }

    document.getElementById("img1").src=images[currentIndex]
 
}


button_chk:Boolean=false

function on_click(value) {
    
        if (value=="up"){
            this.button_chk=false
        } else if(value="down") {
            this.button_chk=true
        }
    
    
}

function moveUp() {
    setTimeout(() => {
        currentIndex = currentIndex==5?0:++currentIndex
        document.getElementById("img1").src=images[currentIndex]
        var image = document.getElementById('img1');
        var currentPosition = parseInt(image.style.top) || 0;
        var newPosition = currentPosition - 1000    ; // Adjust the value as needed
        image.style.top = newPosition + 'px';
    }, 100);
   
    
    
  }
  
  function moveDown() {
    
        var image = document.getElementById('myImage');
        var currentPosition = parseInt(image.style.down) || 0;
        var newPosition = currentPosition + 100; // Adjust the value as needed
        image.style.top = newPosition + 'px';
  }
  
  function hideContainer() {
    var slideArea = document.getElementById('slide-area');
    slideArea.style.display = 'none';
    
    var upIcon = document.getElementById('up-icon');
    upIcon.style.display = 'none';
  }

  function showContainer() {
    var slideArea = document.getElementById('slide-area');
    slideArea.style.display = 'block';

    var upIcon = document.getElementById('up-icon');
    upIcon.style.display = 'block';
  }

 

  function shareOnFacebook() {
    window.open("https://www.facebook.com/profile.php?id=100014939951559&mibextid=LQQJ4d", "windowName");
  }
  function shareOnInsta() {
    window.open("https://www.instagram.com/thamos_michael.25/", "windowName");
  }
  