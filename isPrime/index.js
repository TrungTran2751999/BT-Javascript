function isPrime(number){
    for(let i=1; i<number; i++){
        if(number % i==0){
            console.log('number is not prime')
            break
        }
        if(i == number-1){
            console.log('number is prime')
        }
    }
}
isPrime(13)