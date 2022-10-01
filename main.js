canvas = document.getElementById('myCanvas');
ctx = canvas.gatContext("2d");

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keypressed = e.Keycode;
    console.log(keypressed);
         
       if((keypressed >=97 && keypressed<=122)   (keypressed >=65 && keypressed<=90))
       {
        alphabetkey();
        document.getElementById("d1").innerHTML="You pressed alphabet key";
        console.log("alphabetkey");
       }
}


function alphabetkey() 
{
      img_image="Alpkey.png";
    add();
  
}