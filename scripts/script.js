/*
 REGOLA GENERALE
Nella matrice, 1 significa sempre croce e -1 sempre cerchio.
Qualsiasi cambiamento deve rispettare questa regola.

Cio permettera di usare il valore assoluto nel metodo di controllo sulla serie da 3


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




let messaggio;
let i = 0;
const campo = [[0, 0, 0],[0, 0, 0],[0, 0 ,0]];





function bottone1() {
    if (i < 9 && controllo() == false) {
        if (i % 2 == 0) {
            image1.src = "assets/croce.png";        //cambio del source nel campo <img> in base al giocatore
            campo[0][0] = 1;                        //posizionamento del numero secondo la convenzione sulla matrice
        }
        else {
            image1.src = "assets/cerchio.png";
            campo[0][0] = -1;
        }                
        
        i++;}                                      //incremento della variabile responsabile alla fine della partita (pareggio) e al cambio giocatore
        check_vittoria();  
    }
    

function bottone2() { 
    if (i < 9 && controllo() == false) {
        if (i % 2 == 0) {
            image2.src = "assets/croce.png";
            campo[0][1] = 1;
        }
        else {
            image2.src = "assets/cerchio.png";
            campo[0][1] = -1;
        }
        
        i++;}
        check_vittoria();  
    }                                              
    


function bottone3() {
    if (i < 9 && controllo() == false) {
        if (i % 2 == 0) {
            image3.src = "assets/croce.png";
            campo[0][2] = 1;
        }
        else {
            image3.src = "assets/cerchio.png";
            campo[0][2] = -1;
        }
    
        i++;}
        check_vittoria();  
    }                                              
    


function bottone4() {   
    if (i < 9 && controllo() == false) {
        if (i % 2 == 0) {
            image4.src = "assets/croce.png";
            campo[1][0] = 1;
        }
        else {
            image4.src = "assets/cerchio.png";
            campo[1][0] = -1;
        }
    
        i++;}
        check_vittoria();  
    }                                                
    


function bottone5() {   
    if (i < 9 && controllo() == false) {
        if (i % 2 == 0) {
            image5.src = "assets/croce.png";
            campo[1][1] = 1;
        }
        else {
            image5.src = "assets/cerchio.png";
            campo[1][1] = -1;
        }
    
        i++;}  
        check_vittoria();         
    }                                                
   


function bottone6() {  
    if (i < 9 && controllo() == false) {
        if (i % 2 == 0) {
            image6.src = "assets/croce.png";
            campo[1][2] = 1;
        }
        else {
            image6.src = "assets/cerchio.png";
            campo[1][2] = -1;
        }
    
        i++;}  
        check_vittoria();       
    }                                                 
    


function bottone7() { 
    if (i < 9 && controllo() == false) {
        if (i % 2 == 0) {
            image7.src = "assets/croce.png";
            campo[2][0] = 1;
        }
        else {
            image7.src = "assets/cerchio.png";
            campo[2][0] = -1;
        }
    
        i++;}     
        check_vittoria();   
    }                                                  
    


function bottone8() {
    if (i < 9 && controllo() == false) {
        if (i % 2 == 0) {
            image8.src = "assets/croce.png";
            campo[2][1] = 1;
        }
        else {
            image8.src = "assets/cerchio.png";
            campo[2][1] = -1;
        }
    
        i++;} 
        check_vittoria();          
    }                                                   
   


function bottone9() {
    if (i < 9 && controllo() == false) {
        if (i % 2 == 0) {
            image9.src = "assets/croce.png";
            campo[2][2] = 1;
        }
        else {
            image9.src = "assets/cerchio.png";
            campo[2][2] = -1;
        }   
        i++;}
        check_vittoria();  
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

    function check_vittoria() {
        if (controllo() == true) {
            if (i % 2 == 1) {
                creazione("Vincono le croci!!!!");                                                           //metodo della schermata, firmato croci
                let punteggio_croci = localStorage.getItem("Punteggio croci") + 1;                           //conteggio del punteggio, richiamando il local storage (altrimenti sarebbe sempre 1)
                localStorage.setItem("Punteggio croci", punteggio_croci);                                    //salvataggio del punteggio nel local storage
            }
            else {
                creazione("Vincono i cerchi!!!!");                                                           //metodo della schermata, firmato cerchi
                let punteggio_cerchi = localStorage.getItem("Punteggio cerchi") + 1;                         //conteggio del punteggio, richiamando il local storage (altrimenti sarebbe sempre 1)
                localStorage.setItem("Punteggio cerchi", punteggio_cerchi);                                  //salvataggio del punteggio nel local storage
            }
        }                                               
        else if(i == 9) {creazione("pareggio!!!!!");

        }
    }


    function refresh() {location.reload();}
    function close() {window.close()}






    function creazione(messaggio) {
        const body = document.getElementById("body");                          //dichiarazionie del body
        const bottone01 = document.createElement("button");                    //creazione dell'elemento bottone01 (rigioca)
        const bottone02 = document.createElement("button");                    //creazione dell'elemento bottone02 (esci)
        const schermo = document.createElement("div");                         //creazione del div (schermata di fine partita)
        const contenitore = document.createElement("div");                     //creazione del contenitore di bottone01 e bottone02
        const testo = document.createElement("h1");                            //creazione dell'header contenente la scritta del vincitore
        const contenuto = document.createTextNode(messaggio);                  //creazione del nodo di testo contenente la scritta del vincitore

        const contenutoB1 = document.createTextNode("⟳ Rigioca");              //creazione del nodo di testo del bottone 1
        const testoB1 = document.createElement("h2");                          //creazione dell'header contenente il testo di bottone01

        const contenutoB2 = document.createTextNode("⇾∏ Esci");                //creazione del nodo di testo del bottone 2
        const testoB2 = document.createElement("h2");                          //creazione dell'header contenente il testo di bottone02




        bottone01.onclick = function() {refresh()};                            //funzione di refresh assegnata a bottone01
        bottone02.onclick = function() {close()};                              //funzione di close assegnata a bottone02






        schermo.className = "schermo";                                         //dichiarazioni class per il css
        bottone01.className = "bottoniSchermo01";                           
        bottone02.className = "bottoniSchermo02";
        contenitore.className = "contenitoreSchermo";
        testo.className = "testoSchermo";
        testoB1.className = "B1";












        testoB2.appendChild(contenutoB2);    //aggiunta del testo all'header e successivamente al bottone 2
        bottone02.appendChild(testoB2);



        testoB1.appendChild(contenutoB1);    //aggiunta del testo all'header e successivamnete al bottone 1
        bottone01.appendChild(testoB1);



        testo.appendChild(contenuto);        //aggiunta all'header della scritta del vincitore (tramite la variabile messaggio, contenuta nel nodo di testo, argomento di funzione)



        contenitore.appendChild(bottone01);  //aggiunta al contenitore di fine partita bottone 1
        contenitore.appendChild(bottone02);  //aggiunta al contenitore di fine partita bottone 2

        schermo.appendChild(testo);          //aggiunta dell'header con il vincitore alla schermata di fine partita
        schermo.appendChild(contenitore);    //aggiunta del contenitore con i bottoni alla schermata di fine partita

        body.appendChild(schermo);           //aggiunta al body della schermata di fine partita
    }
