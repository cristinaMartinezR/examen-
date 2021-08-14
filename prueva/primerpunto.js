function multiplicar(a,b){
    if (b==0){
        return 0;
    }else if (b==1){
        return a;
    }else{
        return a + multiplicar(a,b -1);
    }

    resultado=multiplicar(2,4); //cambiar numeros aqui


    


}