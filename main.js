    //primer movimiento
        function startGame(){
            for (var i = 1; i <=9; i=i+1) {
                clearBox(i);       
          }
            
            document.turn = "X";
            if(Math.random() < 0.5){
                document.turn ="O";
            }
            document.patty = null;
            setMessage( "Empieza el juego << " + document.turn + " >>");
        }
    //envia el mensaje
        function setMessage(msg){
            document.getElementById("message").innerText = msg;
        }
    //segundo movimiento y si la casilla esta  llena o si gano
        function nextMove(square){
            if(document.patty != null){
                setMessage("<< "+ document.patty + " >>, Ya ha ganado el juego");
            }else if (square.innerText=="") {
                square.innerText=document.turn;
                switchTurn();}
            else{
                setMessage("<< Disculpa >>, pero esta casilla ya se fue ocupada");
            }   
        }
    //comprueba si gano y aquien le toca
        function switchTurn(){
            if(checkForpatty(document.turn)){
                setMessage("Felicitaciones , << " + document.turn + " >> fue el ganador!");
                document.patty = document.turn;
            }else if (document.turn == "X") {
                document.turn = "O";
                setMessage("Es el turno de << " + document.turn +" >>");
            } else {
                document.turn = "X";
                setMessage("Es el turno de << " + document.turn +" >>" );
            }            
        }
        function checkForpatty(move){
            var result = false;
            if (checkRow(1, 2 ,3 ,move)|| checkRow(4 ,5 ,6 ,move)|| checkRow(7 ,8 ,9 ,move) || checkRow(1 ,4 ,7 ,move) || checkRow(2 ,5 ,8 ,move) || checkRow(3 ,6 ,9 ,move) || checkRow(1, 5, 9,move)|| checkRow( 3, 5, 7,move)) {
                result = true;
                 } 
            return result;            
                }
        function checkRow(a, b, c, move){
            var result = false;
            if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
                
                result = true;
            }
            return result;
        }

        function getBox(number){

           return document.getElementById("s"+ number).innerText;

        }
        function clearBox(number){
            document.getElementById("s"+ number).innerText="";
        }
