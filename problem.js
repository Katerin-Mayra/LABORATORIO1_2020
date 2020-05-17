
class cadena1{
    constructor(cad){
        this.cad= cad;
    } 
}
class CadenaMan{
    constructor(){
        this.listcad=[]
    }
    addProducts(cadena){
        this.listcad.push(cadena);
    }
    showCadena(){
        return this.listcad;
    }

/////////////////////////////////// __PROBLEMA 1____///////////////////////////////////////////////
    //Dada una matriz de cadenas, devuelve otra matriz que contiene todas sus cadenas más largas.

    longCadenaT(cadena){
        var valor1="";
        var mayor=this.longCadena(cadena);
        var pos=this.posmayorCadena(cadena);
        var vector = [];
        var posi = 0;
        for(var y=0; y<cadena.length;y++){
            valor1=cadena[y];
            if((valor1.length == mayor.length))
            {
                vector [posi] = cadena[y]; 
                posi ++;
            }
        }
        return vector;/////////////////////////////////
    }
    /////////////////////////////// funciones///////////////////////////////
    longCadena(cadena){
        var str=cadena;
        var long=0;
        var result= null;
        str.forEach(function(str) {
            if(long< str.length){
                long=str.length;
                result=str;
            }    
        });
        return result;
    }
    posmayorCadena(cadena){
        var valor0=this.longCadena(cadena);
        for(var y=0; y<cadena.length;y++){
            var valor2=cadena[y];
            if(valor2.length==valor0.length){
                return y;
            }
        }
    }
/////////////////////////////////// __PROBLEMA 2____///////////////////////////////////////////////
//Escriba una función que invierta los caracteres entre paréntesis (posiblemente anidados) en la cadena de entrada
    invertir(cadena){
        var cadOrigen = cadena;
        var cantidadP = this.cantidadDeParent(cadena);
        while(cantidadP > 0){
            var invertido = "";
            var cad=this.invertirP(cadena);
            var inicio=this.iniParent(cadena);
            var final=this.finalParent(cadena);
            for(var i=cad.length -1; i>=0; i--){   
                invertido += cad[i];
            }
        for(var j=0; j<cadena.length;j++){
            if(j>inicio){
                var inicioC=cadena.substr(0,inicio);
            }
            else{
            }
            if(j>final){
                var finalC=cadena.substr(final+1);
            }
            else{
            }
        }
        if(cantidadP == 1 && cadOrigen[cadOrigen.length-1] == ')'){
            var cadena1 = inicioC+invertido;
        }
        else{
            var cadena1 = inicioC+invertido+finalC;
        }   
        cadena=cadena1;
        cantidadP--;
        } 
        return [cadOrigen,cadena1];////////////////////////////////
    }
    /////////////////////////////// funciones///////////////////////////////
    invertCadena(cadena){
        var regExp = /\(([^)]+)\)/; 
        var cadena = regExp.exec(cadena);
        return this.invertir(cadena);
    }
    cantidadDeParent(cadena){
       var dato=0;  
        for(var j=0;j<cadena.length;j++){
            if(cadena[j]=="("){
                dato=dato+1; 
            }
        }
        return dato;
    }
    finalParent(cadena){
        var dato1=0;
        for(var j=0;j<cadena.length;j++){
            if(cadena[j]==")"){
                var pos=j;
                return pos;
                break; 
            }
        }
    }
    iniParent(cadena){
        var pos=this.finalParent(cadena);
        for( var i=pos; i>=0; i--){
        if(cadena[i] =="("){
            var ini = i;
            return ini;
            break;
        }
    }
    }
    invertirP(cadena){
        var gt="";
        var inicio=this.iniParent(cadena);
        var final=this.finalParent(cadena);
        for(var i=0; i<cadena.length;i++){
            if(i==inicio ){
                var dato3=cadena.substr(inicio+1,final-inicio-1);
                return dato3;
            } 
        }
    }
    verficar(cadena){
        for (var i=0; i<cadena.length; i++){
            if(cadena[i] == "(" || cadena[i] == ")")
                return true;
        }
        return false;
    }
/////////////////////////////////// __PROBLEMA 3____///////////////////////////////////////////////
//Dada una cadena, averigua si sus caracteres se pueden reorganizar para formar un palíndromo
    palindrome(cadena){
        var t=cadena.length;
        //si la cadena esta vacia no espalindromo
        if(t==0){
            return false;

        } 
        for(var i=0;i<t/2;i++){
            if(cadena[i] ==cadena[t-1-i]){
                return false;
            }
        }
        return true;
    }

}

export{cadena1,CadenaMan}
