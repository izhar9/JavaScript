const factor = (num) =>{
    if(num < 0){
        console.log('Please enter positive number');
    }else{

        console.log(`factor of ${num} is `);
        for(let i = 0 ; i <= num ; i++){
            if(num % i == 0){
                console.log(i);
            }
        }
    }
}
factor(0)