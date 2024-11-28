canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Define el ancho y alto de la imagen del explorador.
pezazul_ancho=100;
pezazul_alto=90;

background_image = "agua.jpg";

pezazul_image = "pezazul.png";

pezazul_x = 10;
pezazul_y = 10;

//Crea la función "add()"
 
background_imgTag= new Image();              //Define la variable con una nueva imagen
background_imgTag.onload=uploadBackground;	  // Define una función para cargar esta variable
background_imgTag.src= background_image;	 // Carga la imagen

pezazul_imgTag= new Image();                 //Define la variable con una nueva imagen
pezazul_imgTag.onload=uploadPezazul;	     // Define una función para cargar esta variable
pezazul_imgTag.src=pezazul_image;            // Carga la imagen

//Crea una función "uploadBackground()".
function uploadBackground(){
   ctx.drawImage(background_imgTag,0,0,canvas.width, canvas.height);    //Dibuja la imagen de fondo                        
}                                       

//Crea una función "uploadpezazul()".
function uploadPezazul(){
    ctx.drawImage(pezazul_imgTag, pezazul_x, pezazul_y, pezazul_ancho, pezazul_alto ); //Dibuja la imagen del explorador
}
                                        

window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
    //Escribe el codigo si keypressed es up (arriba). El valor ASCIII para "arriba" es 38.
	if(keyPressed=='38'){
        up();
    }
    if(keyPressed=='40'){
        down();
    }	
    if(keyPressed=='37'){
        left();
    }
    if(keyPressed=='39'){
        right();
    }

    //Escribe el código para cuando las teclas derecha e izquierda sean presionadas. 
}

function up(){
if (pezazul_y >=0){
    pezazul_y= pezazul_y -10; //cada que se presiona la tecla flecha arriba,
    uploadBackground();// aca se recarga la imagen de fondo
    uploadPezazul();// aca se recarga la imagen del pezazul
}
}
function down(){
    if(pezazul_y <=500){
        pezazul_y= pezazul_y + 10;//cada que se presiona la tecla flecha
        uploadBackground();//aca se recarga la imagen de fondo
        uploadPezazul();
    }
}
function right(){ 
    if (pezazul_x >=0){
        pezazul_x= pezazul_x +10; //cada que se presiona la tecla flecha arriba,
        uploadBackground();// aca se recarga la imagen de fondo
        uploadPezazul();// aca se recarga la imagen del pezazul
    } 
}
function left(){
    if(pezazul_x <=900){
        pezazul_x= pezazul_x - 10;//cada que se presiona la tecla flecha
        uploadBackground();//aca se recarga la imagen de fondo
        uploadPezazul();
    }
	
}



