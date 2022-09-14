let arrBt3=[]
function handle(){
    let id = event.srcElement.id
    switch(id){
        case 'bt-1':{
            let input = document.querySelector('.bt-1-input').value
            let arrayInput = input.split('')
            for(let i=0; i<arrayInput.length; i++){
                if(parseInt(arrayInput[i]) % 2 === 0 && parseInt(arrayInput[i+1]) % 2 === 0){
                    arrayInput.splice(i+1, 0, '-')
                }
            }

           document.querySelector('.result-bt-1').innerHTML = `Result: ${arrayInput.join('')}`
           break
        }
        case 'bt-2':{
            let input = document.querySelector('.bt-2-input').value
            let text = input.split(' ')
            let arrayWord = []
            let arrayResult = []
            for(let i=0; i<text.length; i++){
                for(j=0; j<text[i].length; j++){
                    if(text[i][j] === text[i][j].toUpperCase()){
                        arrayWord.push(text[i][j].toLowerCase())
                    }else{
                        arrayWord.push(text[i][j].toUpperCase())
                    }
                }
                arrayResult.push(arrayWord.join(''))
                arrayWord = []
            }
            document.querySelector('.result-bt-2').innerHTML = arrayResult.join(' ')
            break
        }
        case 'bt-3':{
            let input = document.querySelector('.bt-3-input').value
            arrBt3.push(input)
            document.querySelector('.result-bt-3').innerHTML = `[${arrBt3}] chuyển thành ${arrBt3.join(',')}`
        }
    }
}