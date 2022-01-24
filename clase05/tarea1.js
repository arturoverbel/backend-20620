let arrayRandom = {};
for (let i=0; i<10000; i++){
    let number = Math.random()*20
    let numberRed= Math.ceil(number)
    //arrayRandom.push(numberRed)
    if (arrayRandom [numberRed])
        {arrayRandom[numberRed] +=1}  
    else{
        arrayRandom[numberRed]=1  
    }
};