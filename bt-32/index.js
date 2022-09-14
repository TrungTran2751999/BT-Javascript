let arrayBt8 = []
function handle(){
    let id = event.srcElement.id
    switch(id){
        case 'bt-1':{
            let input = document.querySelector('.bt-1-input').value
            let result = 0
            function BT1(x){
                result = Math.pow(x,2)
                return result
            }
            document.querySelector('.bt-1-result').innerHTML = `Bình phương của số ${input} là ${BT1(input)}`
            break
        }
        case 'bt-2':{
            let radius = parseInt(document.querySelector('.bt-2-input').value);
            function BT2(x){
                let arr = []
                let area = Math.floor(Math.PI*Math.pow(x,2));
                let perimeter = Math.floor(2*Math.PI*x);
                arr.push(area)
                arr.push(perimeter)
                return arr
            }
            if(radius > 0){
                document.querySelector('.bt-2-result').innerHTML = `<div>Diện tích của hình tròn có bán kính ${radius} là ${BT2(radius)[0]}</div>
                                                                <div>Chu vi của hình tròn có bán kính ${radius} là ${BT2(radius)[1]}</div>`
            }else{
                document.querySelector('.bt-2-result').innerHTML = ''
            }
            break
        }
        case 'bt-3':{
            let input = document.querySelector('.bt-3-input').value
            let result = 1
            function BT3(input){
                for(let i=input; i>1; i--){
                    result = result * i
                }
                return result
            }
            if(input > 0){
                document.querySelector('.bt-3-result').innerHTML = `<div><b>Ressut</b>: ${input}! = ${BT3(input)}</div>`
            }else{
                document.querySelector('.bt-3-result').innerHTML = ''
            }
            break
        }
        case 'bt-4':{
            let input = parseInt(document.querySelector('.bt-4-input').value)
            function BT(input){
                if(isNaN(input) == true){
                    return false
                }else{
                    return true
                }
            }
            if(isNaN(input) == false){
                document.querySelector('.bt-4-result').innerHTML = `${input} is number ? It's ${BT(input)}`
            }else{
                document.querySelector('.bt-4-result').innerHTML = `${document.querySelector('.bt-4-input').value} is number ? It's ${BT(input)}`
            }
            break
        }
        case 'bt-5':{
            let x = parseInt(document.querySelector('.bt-5-input-a').value)
            let y = parseInt(document.querySelector('.bt-5-input-b').value)
            let z = parseInt(document.querySelector('.bt-5-input-c').value)
            function BT(x, y, z){
                let arr = [x,y,z]
                let max = arr[0] 
                for(let i = 1; i<arr.length; i++){
                    if(arr[i] > max){
                        max = arr[i]
                    }
                }
                return max
            }
            document.querySelector('.bt-5-result').innerHTML = `Số lớn nhất trong 3 số ${x}, ${y}, ${z} là ${BT(x, y, z)} `
            break
        }
        case 'bt-6':{
            let input = parseInt(document.querySelector('.bt-6-input').value)
            function BT(input){
                if(input > 0){
                    return true
                }else if(input ==0){
                    return 'không phải là số nguyên dương cũng chẳng phải nguyên âm'
                }else{
                    return false
                }
            }
            document.querySelector('.bt-6-result').innerHTML = `${input} có phải là số nguyên dương không ? - ${BT(input)}`
            break
        }   
        case 'bt-7':{
            let a = parseInt(document.querySelector('.bt-7-input-a').value)
            let b = parseInt(document.querySelector('.bt-7-input-b').value)
            let c
            let arr = []
            function BT(a,b){
                document.querySelector('.bt-7-result').innerHTML = `Giá trị sau khi đảo a = ${a} và b = ${b} là a = ${b} và b = ${a}`
            }
            BT(a,b)
            break
        }
        case 'bt-8-add':{
            let input = document.querySelector('.bt-8-input').value
            let arrReverse = []
            function AddArray(){
                if(input != ''){
                    document.getElementsByName('bt-8-toggle').disabled = false
                    arrayBt8.push(input)
                    for(let i=0; i<arrayBt8.length; i++){
                        arrReverse[i] = arrayBt8[arrayBt8.length-1-i]
                    }
                    document.querySelector('#display-show').innerHTML = `Mảng [${arrayBt8}] chuyển thành [${arrReverse}]`
                    document.querySelector('.bt-8-input').value = ''
                }
            }
            AddArray()
            break
        }
        case 'bt-8-toggle':{
            function ToggleList(){
                let id = document.getElementById('display-show')
                if(id.classList.contains('index-hidden') == true){
                    id.classList.remove('index-hidden')
                    id.classList.add('index-show')
                }else{
                    id.classList.remove('index-show')
                    id.classList.add('index-hidden')
                }
                document.getElementsByName('bt-8-toggle').disabled = true
                return arrayBt8
            }
            
            ToggleList()
            break
         }
        case 'bt-9':{
            let array = []
            let input = document.querySelector('.bt-9-input').value
            let timeEscape = 0
            function CheckingNumberinArray(number){
                for(let i=1; i<=5; i++){
                    array.push(Math.floor(Math.random()*input*2))
                }
                for(let i=0; i<array.length; i++){
                    if(input == array[i]){
                        timeEscape +=1
                    }
                }
                return timeEscape
            }
            let result = CheckingNumberinArray(input)
            document.querySelector('.bt-9-result').innerHTML = `Số ${input} xuất hiện ${result} trong mảng [${array}]`
        }
    }
}