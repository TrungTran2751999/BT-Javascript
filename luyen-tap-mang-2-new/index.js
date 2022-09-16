function handle(){
    let id = event.srcElement.id
    switch(id){
        case 'bt-1':{
            document.querySelector('.result-bt-1').innerHTML = ''
            let arr = []
            for(let i=0; i<=5; i++){
                arr.push([])
                for(let a=0; a<=10; a++){
                    arr[i].push(Math.floor(Math.random()*30))
                }
            }
            for(let i=0; i<arr.length; i++){
                document.querySelector('.result-bt-1').insertAdjacentHTML('beforeend', `<div>Arr[${i}]: [${arr[i].join(', ')}]</div>`)
            }
            break
        }
        case 'bt-2':{
            document.querySelector('.result-bt-2').innerHTML = ''
            let arrWordBegin = []
            for(let i = 1; i<=5; i++){
                let Word = String.fromCharCode(Math.floor(Math.random() * (122 - 97)) + 97)
                arrWordBegin.push(Word)
            }
            let arr = `${arrWordBegin.join(', ')}`
            let arrWordBeginReverse = arrWordBegin.reverse()
            document.querySelector('.result-bt-2').innerHTML = `Mảng [${arr}] đảo ngược thành ${arrWordBeginReverse.join('')}`
            break
        }
        case 'bt-3':{
            document.querySelector('.result-bt-3').innerHTML = ''
            let arr = []
            let randomNumber = Math.floor(Math.random()*(50-5) + 5)
            for(let i=0; i <= randomNumber; i++){
                let Word = String.fromCharCode(Math.floor(Math.random() * (122 - 97)) + 97)
                arr.push(Word)
            }
            document.querySelector('.result-bt-3').innerHTML = `Mảng [${arr.join(', ')}] có ${arr.length} kí tự`
            break
        }
        case 'bt-4':{
            let text = document.querySelector('.bt-4-input').value
            let arrText = text.split('')
            if(text != 0){
                document.querySelector('.result-bt-4').innerHTML = `Mảng [${arrText.join(', ')}] có ${arrText.length} kí tự`
            }
            break
        }
        case 'bt-5':{
            let text1 = document.querySelector('.bt-5-input-1').value
            let text2 = document.querySelector('.bt-5-input-2').value
            let output = document.querySelector('.result-bt-5')
            if(text1 != '' && text2 != ''){
                if(text1 == text2){
                    output.innerHTML = `"${text1}" giống với "${text2}"`
                }else{
                    output.innerHTML = `"${text1}" không giống với "${text2}"`
                }
            }else{
                output.innerHTML = ''
            }
            break
        }
        case 'bt-6':{
            let text = document.querySelector('.bt-6-input').value
            let arr = text.split('')
            if(text != ''){
                for(let i=0; i<arr.length; i++){
                    if(arr[i] == '-'){
                        arr[i] = '_'
                    }
                }
                document.querySelector('.result-bt-6').innerHTML = `<div>${text} sau khi chuyyển đổi "-" sang "_" là ${arr.join('')}</div>`
            break
            }
        }
        case 'bt-7':{
            let text = document.querySelector('.bt-7-input').value
            let arr = text.split('')
            let thuong = Math.floor(arr.length/2)
            let arr1 = []
            let arr2 = []
            if(arr.length % 2 == 0){
                arr1 = arr.slice(0,thuong)
                arr2 = arr.slice(thuong, arr.length).reverse()
            }else{
                arr1 = arr.slice(0,thuong)
                arr2 = arr.slice(thuong+1, arr.length).reverse()
            }
            if(arr1.join('') == arr2.join('')){
                document.querySelector('.result-bt-7').innerHTML = `${text} is palindrome`
            }else{
                document.querySelector('.result-bt-7').innerHTML = `${text} is not palindrome`
            }
        }
    }
}