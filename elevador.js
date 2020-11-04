var pisos_totales=6;
var piso_act=1;
var piso_destino;
var puerta_estado;//0 equivale a cerrado y 1 equivale a abierto


function subir_piso(){
    if(puerta_estado=0){//0 equivale a cerrado
        if(piso_act<pisos_totales){
            piso_act++;            
        }
    }
}

function bajar_piso(){
    if(puerta_estado==1){
        console.log("cerrar puerta");
    }
    else if(puerta_estado==0){
        if(piso_act<=pisos_totales){
            piso_act--;
        }
    }
}

function ir_piso(){
    if(piso_destino>piso_act){
        subir_piso();
    }
}

function state(){
    if(puerta_estado==1){
        return piso_act  + "puerta abierta";
    }
    else if(puerta_estado==0){
        return piso_act  + "puerta cerrada";
    }
}

