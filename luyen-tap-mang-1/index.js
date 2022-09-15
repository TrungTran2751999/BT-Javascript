function handle(){
    let id = event.srcElement.id
    switch(id){
        case 'bt-1':{
            let arr = [];
            let sumPositive = 0;
            for(let i=0; i<=10; i++){
                let randomPush = Math.floor(Math.random()*100)
                arr.push(randomPush)
            }
            for(let i=0; i<=arr.length; i++){
                if(arr[i] >= 10){
                    sumPositive++
                }
            }
            document.querySelector('.result-bt-1').innerHTML = `Có ${sumPositive} số >= 10 trong mảng [${arr.join(', ')}]`
            break
        }
        case 'bt-2':{
            let arr = [];
            for(let i=0; i<=10; i++){
                let randomPush = Math.floor(Math.random()*100)
                arr.push(randomPush)
            }
            let max = arr[0]
            for(let i=0; i<=arr.length; i++){
                if(arr[i] >= max){
                    max = arr[i]
                }
            }
            document.querySelector('.result-bt-2').innerHTML = `số ${max} là số lớn nhất trong mảng [${arr.join(', ')}] tại vị trí ${arr.indexOf(max)}`
            break
        }
        case 'bt-3':{
            let arr = [];
            for(let i=0; i<=10; i++){
                let randomPush = Math.floor(Math.random()*100)
                arr.push(randomPush)
            }
            let max = arr[0]
            let sum = 0
            for(let i=0; i<arr.length; i++){
                if(arr[i] >= max){
                    max = arr[i]
                }
                sum  = sum + arr[i]
            }
            let average = sum/(arr.length)
            document.querySelector('.result-bt-3').innerHTML = `<div>số ${max} là số lớn nhất trong mảng [${arr.join(', ')}] tại vị trí ${arr.indexOf(max)}</div>
                                                                <div>Giá trị trung bình của các phần tử trong mảng [${arr.join(', ')}] là ${average}</div>`
            break
        }
        case 'bt-4':{
            let arr = [];
            for(let i=0; i<5; i++){
                let randomPush = Math.floor(Math.random()*100)
                arr.push(randomPush)
            }
            let arrPhu = arr
            document.querySelector('.result-bt-4').innerHTML = `<div>[${arr}] là giá trị đảo ngược của [${arr.reverse()}] </div>`
            break
        }
        case 'bt-5':{
            let arr = [];
            let sumNegative = 0
            for(let i=0; i<10; i++){
                let randomPush = Math.floor((Math.random()*2-1)*5)
                arr.push(randomPush)
            }
            for(let i=0; i<arr.length; i++){
                if(arr[i] < 0){
                    sumNegative++
                }
            }
            document.querySelector('.result-bt-5').innerHTML = `Mảng [${arr.join(', ')}] có ${sumNegative} số nguyên âm`
            break
        }
        case 'bt-6':{
            let arr = [];
            let target = Math.floor((Math.random()*2-1)*5);
            let result = ''

            for(let i=0; i<10; i++){
                let randomPush = Math.floor((Math.random()*2-1)*5)
                arr.push(randomPush)
            }
            for(let i=0; i<arr.length; i++){
                if(arr[i] == target){
                    result = 'in';
                    break;
                }
                if(i == arr.length-1){
                    result = 'not in';
                }
            }
            document.querySelector('.result-bt-6').innerHTML = ` ${target} is ${result} the array [${arr}]`;
            break
        }
        case 'bt-7':{
            let number = Number(document.querySelector('.bt-7-input').value);
            let arr = [];
            let result = '';
            let arrPre = arr
            if(number !=''){
                for(let i=0; i<10; i++){
                    let randomPush = Math.floor((Math.random()*2-1)*5)
                    arr.push(randomPush)
                }
                let result2 = `[${arr}]`
                for(let i=0; i<arr.length; i++){
                    if(number == arr[i]){
                        arrPre.splice(i,1)
                        result = `Xóa phần tử ${number} ở vị trí  trong mảng ${result2} thành [${arrPre}]`
                    }
                }
                document.querySelector('.result-bt-7').innerHTML = result
            }
            break
        }
        case 'bt-8':{
            let arr = []
            for(let i=0; i<10; i++){
                let randomPush = Math.floor((Math.random()*2-1)*5)
                arr.push(randomPush)
            }
            let result = `${arr}`
            let arrSort = arr.sort((a,b)=>{
                return b-a
            })
            document.querySelector('.result-bt-8').innerHTML = `Mảng ${result} sắp xếp theo thứ tự giảm dần thành ${arrSort}`
            break
        }
        case 'bt-9':{
            let arrA = []
            let arrB = []
            let arrC = []
            for(let i=0; i<10; i++){
                let randomPush = Math.floor((Math.random()*2-1)*5)
                arrA.push(randomPush)
            }
            for(let i=0; i<10; i++){
                let randomPush = Math.floor((Math.random()*2-1)*5)
                arrB.push(randomPush)
            }
            arrC = arrA.concat(arrB)
            document.querySelector('.result-bt-9').innerHTML = `<div>array A: [${arrA.join(' ,')}]</div>
                                                                <div>array B:[${arrB.join(' ,')}]</div>
                                                                <div>array C = array A + array B = [${arrC.join(' ,')}]</div>`
        }   
    }
}