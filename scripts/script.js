/*
 REGOLA GENERALE
Nella matrice, 1 significa sempre croce e -1 sempre cerchio.
Qualsiasi cambiamento deve rispettare questa regola.




[1, 2, 3]
[4, 5, 6]
[7, 8, 9]
 */





/*prima riga*/   /*ID IMG*/
var image1 = document.getElementById("img1");
var image2 = document.getElementById("img2");
var image3 = document.getElementById("img3");

/*seconda riga*/
var image4 = document.getElementById("img4");
var image5 = document.getElementById("img5");
var image6 = document.getElementById("img6");

/*terza riga*/
var image7 = document.getElementById("img7");
var image8 = document.getElementById("img8");
var image9 = document.getElementById("img9");






let i = 0;
const campo = [[0, 0, 0],[0, 0, 0],[0, 0 ,0]];





function bottone1() {
    if (i < 9 && controllo() == false) {
        console.log(controllo());
        console.log(campo[0]);
        console.log(campo[1]);
        console.log( campo[2]);
        if (i % 2 == 0) {
            image1.src = "assets/croce.png";        //cambio del source nel campo <img> in base al giocatore
            campo[0][0] = 1;                        //posizionamento del numero secondo la convenzione sulla matrice
        }
        else {
            image1.src = "assets/cerchio.png";
            campo[0][0] = -1;
        }                
        
        i++;}                                      //incremento della variabile responsabile alla fine della partita (pareggio) e al cambio giocatore
    
    }
    

function bottone2() { 
    if (i < 9 && controllo() == false) {
        console.log(controllo());
        console.log(campo[0]);
        console.log(campo[1]);
        console.log( campo[2]);
        if (i % 2 == 0) {
            image2.src = "assets/croce.png";
            campo[0][1] = 1;
        }
        else {
            image2.src = "assets/cerchio.png";
            campo[0][1] = -1;
        }
        
        i++;}
    }                                              
    


function bottone3() {
    if (i < 9 && controllo() == false) {
        console.log(controllo());
        console.log(campo[0]);
        console.log(campo[1]);
        console.log( campo[2]);
        if (i % 2 == 0) {
            image3.src = "assets/croce.png";
            campo[0][2] = 1;
        }
        else {
            image3.src = "assets/cerchio.png";
            campo[0][2] = -1;
        }
    
        i++;}
    }                                              
    


function bottone4() {   
    if (i < 9 && controllo() == false) {
        console.log(controllo());
        console.log(campo[0]);
        console.log(campo[1]);
        console.log( campo[2]);
        if (i % 2 == 0) {
            image4.src = "assets/croce.png";
            campo[1][0] = 1;
        }
        else {
            image4.src = "assets/cerchio.png";
            campo[1][0] = -1;
        }
    
        i++;}
    }                                                
    


function bottone5() {   
    if (i < 9 && controllo() == false) {
        console.log(controllo());
        console.log(campo[0]);
        console.log(campo[1]);
        console.log( campo[2]);
        if (i % 2 == 0) {
            image5.src = "assets/croce.png";
            campo[1][1] = 1;
        }
        else {
            image5.src = "assets/cerchio.png";
            campo[1][1] = -1;
        }
    
        i++;}
    }                                                
   


function bottone6() {  
    if (i < 9 && controllo() == false) {
        console.log(controllo());
        console.log(campo[0]);
        console.log(campo[1]);
        console.log( campo[2]);
        if (i % 2 == 0) {
            image6.src = "assets/croce.png";
            campo[1][2] = 1;
        }
        else {
            image6.src = "assets/cerchio.png";
            campo[1][2] = -1;
        }
    
        i++;}
    }                                                 
    


function bottone7() { 
    if (i < 9 && controllo() == false) {
        console.log(controllo());
        console.log(campo[0]);
        console.log(campo[1]);
        console.log( campo[2]);
        if (i % 2 == 0) {
            image7.src = "assets/croce.png";
            campo[2][0] = 1;
        }
        else {
            image7.src = "assets/cerchio.png";
            campo[2][0] = -1;
        }
    
        i++;}
    }                                                  
    


function bottone8() {
    if (i < 9 && controllo() == false) {
        console.log(controllo());
        console.log(campo[0]);
        console.log(campo[1]);
        console.log( campo[2]);
        if (i % 2 == 0) {
            image8.src = "assets/croce.png";
            campo[2][1] = 1;
        }
        else {
            image8.src = "assets/cerchio.png";
            campo[2][1] = -1;
        }
    
        i++;}
    }                                                   
   


function bottone9() {
    if (i < 9 && controllo() == false) {
    console.log(controllo());
    console.log(campo[0]);
    console.log(campo[1]);
    console.log( campo[2]);
        if (i % 2 == 0) {
            image9.src = "assets/croce.png";
            campo[2][2] = 1;
        }
        else {
            image9.src = "assets/cerchio.png";
            campo[2][2] = -1;
        }
    
        i++;}
    }                                                   
    






    //metodo di controllo (non cambiare il doppio &&)


    function controllo() {
        if      (campo[0][0] == campo[0][1] && campo[0][1] == campo[0][2] && campo[0][0] != 0 && campo[0][1] != 0 && campo[0][2] != 0) { return true; }
        else if (campo[1][0] == campo[1][1] && campo[1][1] == campo[1][2] && campo[1][0] != 0 && campo[1][1] != 0 && campo[1][2] != 0) { return true; }
        else if (campo[2][0] == campo[2][1] && campo[2][1] == campo[2][2] && campo[2][0] != 0 && campo[2][1] != 0 && campo[2][2] != 0) { return true; }
        else if (campo[0][0] == campo[1][0] && campo[1][0] == campo[2][0] && campo[0][0] != 0 && campo[1][0] != 0 && campo[2][0] != 0) { return true; }
        else if (campo[0][1] == campo[1][1] && campo[1][1] == campo[2][1] && campo[0][1] != 0 && campo[1][1] != 0 && campo[2][1] != 0) { return true; }
        else if (campo[0][2] == campo[1][2] && campo[1][2] == campo[2][2] && campo[0][2] != 0 && campo[1][2] != 0 && campo[2][2] != 0) { return true; }
        else if (campo[0][0] == campo[1][1] && campo[1][1] == campo[2][2] && campo[0][0] != 0 && campo[1][1] != 0 && campo[2][2] != 0) { return true; }
        else if (campo[2][0] == campo[1][1] && campo[1][1] == campo[0][2] && campo[2][0] != 0 && campo[1][1] != 0 && campo[0][2] != 0) { return true; }
        else { return false; }

        




    }
