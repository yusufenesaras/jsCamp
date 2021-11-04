const isPrime = num => {

    if (num < 2){
        return false
    }
    for (var i = 2; i < num; i++) {
        if (num % i === 0){
            return false;
        } 
    }
    return true
}

function primeNumber(...numbers){

    numbers.forEach(number => {
        console.log(isPrime(number) ? `${number} sayısı asal.` : `${number} sayısı asal değil.`)
    });

    return true;
}

function isFriendNumber(number1,number2){
    let number1Sum = 0;
    let number2Sum = 0;

    for(let i = 0; i<number1; i++){
        if(number1%i == 0)
        number1Sum+=i;
    }
    for(let i=0; i<number2; i++){
        if(number2%i==0)
        number2Sum+=i;
    }

    if(number1 === number2Sum && number2 === number1Sum){
        console.log("Arkadaş sayıdır.")
    }else{
        console.log("Arkadaş değildir.")
    }
}


function findPerfectNumbers(){
    for (let sayi=1; sayi<=1000; sayi++)
    {
    let toplam = 0;
    for (let i = 1 ; i < sayi ; i++) {
      if(sayi %i == 0)  
        toplam += i;
    }

    if (toplam == sayi)
      console.log(sayi + " Mükemmel sayidir");
	
    }
}


const primeNumberOneThousandList = () => {
    for (let i = 0; i < 1000; i++) {
        if(isPrime(i)){
            console.log(i);
        } 
    }

}
// isFriendNumber(220,284)
// primeNumber(3,4,5,6,7,3,24,234,345,34)
//findPerfectNumbers()
//primeNumberOneThousandList()

