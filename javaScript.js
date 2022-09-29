//muda a classe das pecas pretas(encima) para mostrar imgens das pecas
document.getElementById("t11").innerHTML = "&#9820;";
document.getElementById("t12").innerHTML = "&#9822;";
document.getElementById("t13").innerHTML = "&#9821;";
document.getElementById("t14").innerHTML = "&#9819;";
document.getElementById("t15").innerHTML = "&#9818;";
document.getElementById("t16").innerHTML = "&#9821;";
document.getElementById("t17").innerHTML = "&#9822;";
document.getElementById("t18").innerHTML = "&#9820;";

document.getElementById("t21").innerHTML = "&#9823;";
document.getElementById("t22").innerHTML = "&#9823;";
document.getElementById("t23").innerHTML = "&#9823;";
document.getElementById("t24").innerHTML = "&#9823;";
document.getElementById("t25").innerHTML = "&#9823;";
document.getElementById("t26").innerHTML = "&#9823;";
document.getElementById("t27").innerHTML = "&#9823;";
document.getElementById("t28").innerHTML = "&#9823;";

//muda a classe das pecas brancas(embaixo) para mostrar imgens das pecas
document.getElementById("t81").innerHTML = "&#9814;";
document.getElementById("t82").innerHTML = "&#9816;";
document.getElementById("t83").innerHTML = "&#9815;";
document.getElementById("t84").innerHTML = "&#9813;";
document.getElementById("t85").innerHTML = "&#9812;";
document.getElementById("t86").innerHTML = "&#9815;";
document.getElementById("t87").innerHTML = "&#9816;";
document.getElementById("t88").innerHTML = "&#9814;";

document.getElementById("t71").innerHTML = "&#9817;";
document.getElementById("t72").innerHTML = "&#9817;";
document.getElementById("t73").innerHTML = "&#9817;";
document.getElementById("t74").innerHTML = "&#9817;";
document.getElementById("t75").innerHTML = "&#9817;";
document.getElementById("t76").innerHTML = "&#9817;";
document.getElementById("t77").innerHTML = "&#9817;";
document.getElementById("t78").innerHTML = "&#9817;";	


criar_array()


// DEFINE A POSIÇÃO DE CADA CASA CRIANDO UM ARRAY MULTIDIMENSIONAL

function criar_array(){
    var x,y;

    casa = [];

    for (x = 1; x <= 8; x++){
        casa[x] = new Array();

    for (y = 1; y <= 8; y++){
        casa[x][y] = new Array();
        casa[x][y]['peca'] = false; // INICIA COM FALSO PARA NÃO DAR ERRO DE NULL
        casa[x][y]['cor'] = false;	// INICIA COM FALSO PARA NÃO DAR ERRO DE NULL
    }

    filtro = new Array();
    filtro['preto'] = new Array();
    filtro['branco'] = new Array();
}
}


// POSICIONA AS PEÇAS pretas NO ARRAY
casa[1][1]['peca'] = "torre"; casa[1][1]['cor'] = "preto"; casa[1][1]['movi'] = "0"; filtro['preto']['torre'] = "&#9820;";
casa[1][2]['peca'] = "cavalo"; casa[1][2]['cor'] = "preto"; casa[1][2]['movi'] = "0"; filtro['preto']['cavalo'] = "&#9822;";
casa[1][3]['peca'] = "bispo"; casa[1][3]['cor'] = "preto"; casa[1][3]['movi'] = "0"; filtro['preto']['bispo'] = "&#9821;";
casa[1][4]['peca'] = "rainha"; casa[1][4]['cor'] = "preto"; casa[1][4]['movi'] = "0"; filtro['preto']['rainha'] = "&#9819;";
casa[1][5]['peca'] = "rei"; casa[1][5]['cor'] = "preto"; casa[1][5]['movi'] = "0"; filtro['preto']['rei'] = "&#9818;";
casa[1][6]['peca'] = "bispo"; casa[1][6]['cor'] = "preto"; casa[1][6]['movi'] = "0"; 
casa[1][7]['peca'] = "cavalo"; casa[1][7]['cor'] = "preto"; casa[1][7]['movi'] = "0"; 
casa[1][8]['peca'] = "torre"; casa[1][8]['cor'] = "preto"; casa[1][8]['movi'] = "0"; 

casa[2][1]['peca'] = "peao"; casa[2][1]['cor'] = "preto"; casa[2][1]['movi'] = "0"; filtro['preto']['peao'] = "&#9823;";
casa[2][2]['peca'] = "peao"; casa[2][2]['cor'] = "preto"; casa[2][2]['movi'] = "0";
casa[2][3]['peca'] = "peao"; casa[2][3]['cor'] = "preto"; casa[2][3]['movi'] = "0";
casa[2][4]['peca'] = "peao"; casa[2][4]['cor'] = "preto"; casa[2][4]['movi'] = "0";
casa[2][5]['peca'] = "peao"; casa[2][5]['cor'] = "preto"; casa[2][5]['movi'] = "0";
casa[2][6]['peca'] = "peao"; casa[2][6]['cor'] = "preto"; casa[2][6]['movi'] = "0";
casa[2][7]['peca'] = "peao"; casa[2][7]['cor'] = "preto"; casa[2][7]['movi'] = "0";
casa[2][8]['peca'] = "peao"; casa[2][8]['cor'] = "preto"; casa[2][8]['movi'] = "0";


// POSICIONA AS PEÇAS brancas NO ARRAY
casa[8][1]['peca'] = "torre"; casa[8][1]['cor'] = "branco"; casa[8][1]['movi'] = "0"; filtro['branco']['torre'] = "&#9814;";
casa[8][2]['peca'] = "cavalo"; casa[8][2]['cor'] = "branco"; casa[8][2]['movi'] = "0"; filtro['branco']['cavalo'] = "&#9816;";
casa[8][3]['peca'] = "bispo"; casa[8][3]['cor'] = "branco"; casa[8][3]['movi'] = "0";  filtro ['branco']['bispo'] = "&#9815;";
casa[8][4]['peca'] = "rainha"; casa[8][4]['cor'] = "branco"; casa[8][4]['movi'] = "0"; filtro ['branco']['rainha'] = "&#9813;";
casa[8][5]['peca'] = "rei"; casa[8][5]['cor'] = "branco"; casa[8][5]['movi'] = "0"; filtro ['branco']['rei'] = "&#9812;";
casa[8][6]['peca'] = "bispo"; casa[8][6]['cor'] = "branco"; casa[8][6]['movi'] = "0";
casa[8][7]['peca'] = "cavalo"; casa[8][7]['cor'] = "branco"; casa[8][7]['movi'] = "0";
casa[8][8]['peca'] = "torre"; casa[8][8]['cor'] = "branco"; casa[8][8]['movi'] = "0";

casa[7][1]['peca'] = "peao"; casa[7][1]['cor'] = "branco"; casa[7][1]['movi'] = "0"; filtro['branco']['peao'] = "&#9817;"; 
casa[7][2]['peca'] = "peao"; casa[7][2]['cor'] = "branco"; casa[7][2]['movi'] = "0";
casa[7][3]['peca'] = "peao"; casa[7][3]['cor'] = "branco"; casa[7][3]['movi'] = "0";
casa[7][4]['peca'] = "peao"; casa[7][4]['cor'] = "branco"; casa[7][4]['movi'] = "0";
casa[7][5]['peca'] = "peao"; casa[7][5]['cor'] = "branco"; casa[7][5]['movi'] = "0";
casa[7][6]['peca'] = "peao"; casa[7][6]['cor'] = "branco"; casa[7][6]['movi'] = "0";
casa[7][7]['peca'] = "peao"; casa[7][7]['cor'] = "branco"; casa[7][7]['movi'] = "0";
casa[7][8]['peca'] = "peao"; casa[7][8]['cor'] = "branco"; casa[7][8]['movi'] = "0";


// MOVIMENTAR AS PEÇAS 

movimenta = [];
casasMarcadas = [];
	
movimenta['selecionada'] = new Array();
movimenta['selecionada']['x'] =0;
movimenta['selecionada']['y'] =0;
movimenta['selecionada']['peca']="0";
movimenta['selecionada']['cor']="0";

movimenta['destino'] = new Array();
movimenta['destino']['x'] =0;
movimenta['destino']['y'] =0; 
movimenta['destino']['peca'] ="0";
movimenta['destino']['cor']="0";


vez = 'branco';
let posicaoA;
let posicaoB;
let color;

function seleciona(ax,ay){

    

    if (casa[ax][ay]['cor'] != movimenta['selecionada']['cor'] || casa[ax][ay]['peca'] == false){
        if(document.getElementById("t"+(ax)+(ay)).style.backgroundColor == "rgb(255, 64, 64)"){
            trocarPeca(ax,ay);
            return
        }
    }

    
    if (movimenta['selecionada']['x'] != 0 && movimenta['selecionada']['x'] == ax && movimenta['selecionada']['y'] == ay){ // VERIFICA SE O CLICK NAO FOI NA MESMA PEÇA
        console.log('clickou na mesma casa')
        return;
    }


    if(casa[ax][ay]['peca'] == false){ // VERIFICA SE A CASSA DO CLICK ESTA VAZIA
        if(document.getElementById("t"+(ax)+(ay)).style.backgroundColor == "rgb(255, 64, 64)"){ // verfica se a casa esta marcada
            console.log('casa vazia')
            return;
        }
        console.log('casa vazia')
        return;
    }

    if(casa[ax][ay]['peca'] && document.getElementById("t"+(ax)+(ay)).style.backgroundColor != "rgb(255, 64, 64)"){ // clique em nova casa da mesma cor
        if(casa[ax][ay]['cor'] == vez){
            document.getElementById("t"+(ax)+(ay)).style.backgroundColor = "rgb(255, 64, 64)"
            possivel_movimento(ax,ay);
        }
        return
    }
    
    if(casa[ax][ay]['peca'] && document.getElementById("t"+(ax)+(ay)).style.backgroundColor == "rgb(255, 64, 64)"){ // clique em nova casa, porem em vermelha
        if (casa[ax][ay]['cor'] == vez){
            document.getElementById("t"+(ax)+(ay)).style.backgroundColor = "rgb(255, 64, 64)"
            possivel_movimento(ax,ay);
            return
        }
    }
    if(document.getElementById("t"+(ax)+(ay)).style.backgroundColor == "rgb(255, 64, 64)"){
        console.log('trocarpeca')
    }

}

function possivel_movimento(ax,ay){

    limparFundoPeca()
    let x,y,i;
    let c = 0

    x = movimenta['selecionada']['x'] = ax;
    y = movimenta['selecionada']['y'] = ay;
    movimenta['selecionada']['x'] = ax;
    movimenta['selecionada']['y'] = ay;
    movimenta['selecionada']['cor'] = casa[ax][ay]['cor'];
    movimenta['selecionada']['peca'] = casa[ax][ay]['peca'];

    if (casa[ax][ay]['peca'] && movimenta['selecionada']['x'] != ax && movimenta['selecionada']['y'] != ay && document.getElementById("t"+(ax)+(ay)).style.backgroundColor == "#FF4040"){
        limparFundoPeca(x,y)
    }



    document.getElementById("t"+x+y).style.backgroundColor = "#FF4040";
    verificarJogadas(ax,ay)
}

function limparFundoPeca(){
    if (movimenta['selecionada']['peca'] != false){
        document.getElementById("t"+movimenta['selecionada']['x']+movimenta['selecionada']['y']).style.backgroundColor = '';
    }
    let c;
    if (0 < casasMarcadas.length){
        document.getElementById("t"+movimenta['selecionada']['x']+movimenta['selecionada']['y']).style.backgroundColor = '';
    for (c = 0; c < casasMarcadas.length; c++){
        casasMarcadas[c].style.backgroundColor = '';
        
    }
    casasMarcadas.length = 0;
    movimenta['selecionada']['x'] = 0;
    movimenta['selecionada']['y'] = 0;
    movimenta['selecionada']['cor'] = false;
    movimenta['selecionada']['peca'] = false;
}   
}

function verificarJogadas(x,y){
    if (casa[x][y]['peca'] == 'peao'){

        if (casa[x][y]['cor'] == 'branco' && vez == 'branco'){

            if(!casa[x-1][y]['peca']){
                possivelLance(x-1,y);
            }

            if((y - 1) > 0  && (y+1) < 9 && (x -1) > 0 && (x + 1) < 9 &&casa[x-1][y+1]['cor'] == 'preto'){
                possivelLance(x-1,y+1);
            }

            if((y - 1) > 0  && (y+1) < 9 && (x -1) > 0 && (x + 1) < 9 && casa[x-1][y-1]['cor']  == 'preto'){
                possivelLance(x-1,y-1);
            }
            
            if(x == 7 && !casa[x-2][y]['peca'] && !casa[x-1][y]['peca']){
                possivelLance(x-2,y)
            }
        }

        if (casa[x][y]['cor'] == 'preto' && vez == 'preto'){

            if(!casa[x+1][y]['peca']){
                possivelLance(x+1,y);
            }

            if((y - 1) > 0  && (y+1) < 9 && (x -1) > 0 && (x + 1) < 9 && casa[x+1][y-1]['cor'] == 'branco'){
                possivelLance(x+1,y-1);
            }

            if((y - 1) > 0  && (y+1) < 9 && (x -1) > 0 && (x + 1) < 9 && casa[x+1][y+1]['cor'] == 'branco'){
                possivelLance(x+1,y+1);
            }

            if(x == 2){
                if (!casa[x+2][y]['peca'] && !casa[x+1][y]['peca']){

                    possivelLance(x+2,y);

                }
           
            }
                
            }
        
        }
    
            ///////////////////////////////////////////////////////////////////////////////////////FIM PEAO//////////////////////////////
    
    //////////////////////////////////////////////////////////////////////////////////////CAVALO ////////////////////////////////
    
    if(casa[x][y]['peca']=='cavalo'){
            
        possivelLance(x-1,y-2);
        possivelLance(x+1,y+2);
        possivelLance(x+1,y-2);
        possivelLance(x-1,y+2);
        possivelLance(x-2,y-1);
        possivelLance(x+2,y+1);
        possivelLance(x+2,y-1);
        possivelLance(x-2,y+1);
        
    }
//////////////////////////////////////////////////////////////////////////////////////FIM CAVALO ////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////REI ///////////////////////////////////
    if(casa[x][y]['peca']=='rei'){
        possivelLance(x-1,y);
        possivelLance(x,y-1);
        possivelLance(x-1,y-1);
        possivelLance(x+1,y);
        possivelLance(x,y+1);
        possivelLance(x+1,y+1);
        possivelLance(x-1,y+1);
        possivelLance(x+1,y-1);
    }
//////////////////////////////////////////////////////////////////////////////////////FIM REI ////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////TORRE ///////////////////////////////////
    if(casa[x][y]['peca']=='torre'){
        
        for(i=1;possivelLance(x-i,y);i++);
        for(i=1;possivelLance(x+i,y);i++);
        for(i=1;possivelLance(x,y-i);i++);
        for(i=1;possivelLance(x,y+i);i++);
    }
//////////////////////////////////////////////////////////////////////////////////////FIM TORRE ////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////BISPO ///////////////////////////////////
    if(casa[x][y]['peca']=='bispo'){
        
        for(i=1;possivelLance(x-i,y-i);i++);
        for(i=1;possivelLance(x+i,y+i);i++);
        for(i=1;possivelLance(x-i,y+i);i++);
        for(i=1;possivelLance(x+i,y-i);i++);
    }
//////////////////////////////////////////////////////////////////////////////////////FIM BISPO ////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////RAINHA ///////////////////////////////////
    if(casa[x][y]['peca']=='rainha'){
        
        for(i=1;possivelLance(x-i,y-i);i++);
        for(i=1;possivelLance(x+i,y+i);i++);
        for(i=1;possivelLance(x-i,y+i);i++);
        for(i=1;possivelLance(x+i,y-i);i++);
        for(i=1;possivelLance(x-i,y);i++);
        for(i=1;possivelLance(x+i,y);i++);
        for(i=1;possivelLance(x,y-i);i++);
        for(i=1;possivelLance(x,y+i);i++);
        
    }

    }


function possivelLance(x,y){
    if (x < 9 && x > 0 && y < 9 && y > 0){
        if (casa[x][y]['cor'] == movimenta['selecionada']['cor']){
            return false;
        }
        document.getElementById("t"+x+y).style.backgroundColor = '#FF4040';
        casasMarcadas.push(document.getElementById("t"+x+y));

        return true
    }
    
}

function trocarPeca(a,b){
    if (casa[a][b]['peca'] == 'rei'){
        if(casa[a][b]['cor'] == 'preto'){
            alert("Brancos venceram. Foi um ótimo jogo")
        } else{
            alert("Pretos venceram. Foi um ótimo jogo")
        }
    }
    casa[a][b]['peca'] = movimenta['selecionada']['peca'];
    casa[a][b]['cor'] = movimenta['selecionada']['cor'];
    if (movimenta['selecionada']['peca'] == 'peao'){
        if (movimenta['selecionada']['cor'] == 'preto'){
            document.getElementById("t"+a+b).innerHTML = filtro['preto']['peao'];
            if (a == 8){
                color = casa[a][b]['cor'];
                posicaoA = a;
                posicaoB = b;
                document.getElementById('hiddenn').classList.remove('promover-peao');
                document.getElementById('hiddenn').classList.add('promoverShow');
                return
            }
        }
        else{
            document.getElementById("t"+a+b).innerHTML = filtro['branco']['peao'];
            if (a == 1){
                color = casa[a][b]['cor'];
                posicaoA = a;
                posicaoB = b;
                document.getElementById('hiddenn').classList.remove('promover-peao');
                document.getElementById('hiddenn').classList.add('promoverShow');
                return
            }
        }
    }

    else if (movimenta['selecionada']['peca'] == 'torre'){
        if (movimenta['selecionada']['cor'] == 'preto'){
            document.getElementById("t"+a+b).innerHTML = filtro['preto']['torre'];
        }
        else{
            document.getElementById("t"+a+b).innerHTML = filtro['branco']['torre'];
        }
    }

    else if (movimenta['selecionada']['peca'] == 'bispo'){
        if (movimenta['selecionada']['cor'] == 'preto'){
            document.getElementById("t"+a+b).innerHTML = filtro['preto']['bispo'];
        }
        else{
            document.getElementById("t"+a+b).innerHTML = filtro['branco']['bispo'];
        }
    }

    else if (movimenta['selecionada']['peca'] == 'cavalo'){
        if (movimenta['selecionada']['cor'] == 'preto'){
            document.getElementById("t"+a+b).innerHTML = filtro['preto']['cavalo'];
        }
        else{
            document.getElementById("t"+a+b).innerHTML = filtro['branco']['cavalo'];
        }
    }

    else if (movimenta['selecionada']['peca'] == 'rainha'){
        if (movimenta['selecionada']['cor'] == 'preto'){
            document.getElementById("t"+a+b).innerHTML = filtro['preto']['rainha'];
        }
        else{
            document.getElementById("t"+a+b).innerHTML = filtro['branco']['rainha'];    
        }
    }

    else if (movimenta['selecionada']['peca'] == 'rei'){
        if (movimenta['selecionada']['cor'] == 'preto'){
            document.getElementById("t"+a+b).innerHTML = filtro['preto']['rei'];
        }
        else{
            document.getElementById("t"+a+b).innerHTML = filtro['branco']['rei'];
        }
    }
    document.getElementById("t"+movimenta['selecionada']['x']+movimenta['selecionada']['y']).innerHTML = '';

    casa [movimenta['selecionada']['x']][movimenta['selecionada']['y']]['peca'] = false;
    casa [movimenta['selecionada']['x']][movimenta['selecionada']['y']]['cor'] = false;

    if (vez == 'branco'){
        vez = 'preto'
    } else {
        vez = 'branco'
    }
    limparFundoPeca();
}

function promoverPeao(escolha){
    debugger
    switch (escolha){
        case 'torre':
            casa[posicaoA][posicaoB]['peca'] = 'torre';
            if(color == 'branco'){
                casa[posicaoA][posicaoB]['cor'] = 'branco';
                document.getElementById("t"+posicaoA+posicaoB).innerHTML = "&#9814;";
                
            } else if (color == 'preto'){
                casa[posicaoA][posicaoB]['cor'] = 'preto';
                document.getElementById("t"+posicaoA+posicaoB).innerHTML = "&#9820;";
            }
            break;
        case 'cavalo':
            casa[posicaoA][posicaoB]['peca'] = 'cavalo';
            if(color == 'branco'){
                casa[posicaoA][posicaoB]['cor'] = 'branco';
                document.getElementById("t"+posicaoA+posicaoB).innerHTML = "&#9816;";
            } else if (color == 'preto'){
            casa[posicaoA][posicaoB]['cor'] = 'preto';    
                document.getElementById("t"+posicaoA+posicaoB).innerHTML =  "&#9822;";
            }
            break;
        case 'bispo':
            casa[posicaoA][posicaoB]['peca'] = 'bispo';
            if(color == 'branco'){
                casa[posicaoA][posicaoB]['cor'] = 'branco';
                document.getElementById("t"+posicaoA+posicaoB).innerHTML = "&#9815;";
            } else if (color == 'preto'){
                casa[posicaoA][posicaoB]['cor'] = 'preto'; 
                document.getElementById("t"+posicaoA+posicaoB).innerHTML = "&#9821;";
            }
            break;
        case 'rainha':
            casa[posicaoA][posicaoB]['peca'] = 'rainha';
            if (color == 'branco'){
                casa[posicaoA][posicaoB]['cor'] = 'branco';
                document.getElementById("t"+posicaoA+posicaoB).innerHTML = "&#9813;";
            }  else if (color == 'preto'){
                casa[posicaoA][posicaoB]['cor'] = 'preto';
                document.getElementById("t"+posicaoA+posicaoB).innerHTML = "&#9819;";
            }
            
        }

    if (vez == 'branco'){
        vez = 'preto'
    } else {
        vez = 'branco'
    }

    document.getElementById("t"+movimenta['selecionada']['x']+movimenta['selecionada']['y']).innerHTML = '';
    document.getElementById('hiddenn').classList.add('promover-peao');
    document.getElementById('hiddenn').classList.remove('promoverShow');
    limparFundoPeca();

}
