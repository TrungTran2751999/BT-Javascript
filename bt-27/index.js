let time = 0
function handle(){
    let id = event.srcElement.id
    switch(id){
        case 'bt-1':
            for(let i=0; i<=99; i++){
                if(i == 99){
                    alert('đã hoàn thành')
                }
            }
            break
        case 'bt-2':
            let value = prompt("Nhập nhiệt độ:", '')
            if(value > 100){
                alert('Nhiệt độ cao hơn 100. Hãy nhập lại nhiệt độ thấp hơn')
            }else if(value < 20){
                alert('Nhiệt độ nhỏ hơn 20. Hãy nhập lại nhiệt độ cao hơn')
            }
            break
        case 'bt-3':{
            let arr = [1,1]
            let inputFibo = parseInt(document.querySelector('.bt-3-input').value)
            if(inputFibo > 0){
                    while(arr.length < inputFibo){
                    let sum = arr[arr.length-2] +arr[arr.length-1]
                    arr.push(sum)
                }
                document.querySelector('.bt-3-result').innerHTML = `<b>${inputFibo} số đầu tiên trong dãy Pibonacci là:</b> ${arr.join(', ')}`
            break
            }
        }
        case 'bt-4':{
            let begin = parseInt(document.querySelector('.bt-4-begin').value)
            let finish = parseInt(document.querySelector('.bt-4-finish').value)
            let arr = [1,1]
            if(begin > 0 && finish > 0 && begin < finish){
                while(arr.length < finish){
                    let sum = arr[arr.length-2] +arr[arr.length-1]
                    arr.push(sum)
                }
            }
            arr=arr.splice(begin-1, finish-1)
            let alert = ''
            for(let i=0; i< arr.length; i++){
                if(arr[i] % 5 == 0){
                    alert = `Số đầu tiên chia hết trong dãy fibonacci bắt đầu từ ${begin} đến ${finish}: ${arr[i]}`
                    break
                }else if(i == arr.length-1){
                    alert = `Không có số chia hết cho 5 trong dãy fibonacci bắt đầu từ ${begin} đến ${finish}`
                }
            }
            document.querySelector('.bt-4-result').innerHTML = alert
            break
        }
        case 'bt-5':{
            let begin = parseInt(document.querySelector('.bt-5-begin').value)
            let sum = 0
            if(begin > 0){
                for(let i=begin; i<=30; i++){
                    if(i % 7 == 0){
                        sum = sum + i
                    }
                }
                document.querySelector('.bt-5-result').innerHTML = `Tổng của 30 số chia hết cho 7 đầu tiên trong dãy số bắt đầu từ ${begin} là: ${sum}`
            }
        }
            break
        case 'bt-7':{
            let begin = parseInt(document.querySelector('.bt-7-begin').value)
            let arr = [1,1]
            let total = 0
            if(begin > 0){
                while(arr.length < begin+20){
                    let sum = arr[arr.length-2] +arr[arr.length-1]
                    arr.push(sum)
                }
                for(let i=begin-1; i<arr.length; i++){
                    total = total + arr[i]
                }
                document.querySelector('.bt-7-result').innerHTML = `Tính tổng của 20 số đầu tiên trong dãy fibonacci từ ${begin} là: ${total}`
            }
        }
            break
        case 'bt-8':{
            let arr =[]
            for(let i=0; i<=99; i++){
                if(i % 3 == 0){
                    arr[i] = 'Fizz'
                }else if(i % 5 == 0){
                    arr[i] = 'Buzz'
                }else if(i % 3 == 0 && i % 5 == 0){
                    arr[i] = 'FizzBuzz'
                }else{
                    arr[i] = i
                }
            }
            console.log(arr)
            document.querySelector('.bt-8-result').innerHTML = `<b>PRINT</b>: ${arr.join(', ')}`
            break
        }
        case 'bt-9':
            {
            time = time + 1
            let input =  document.querySelector('.bt-9-input').value
            if(input > 0){
                if(time > 3){
                    document.querySelector('.container-bt-9').innerHTML = 'Bạn đã hết lượt'
                }else{
                        let LuckyNumber = Math.random()+input*2
                    if(input == LuckyNumber){
                        alert('Bạn may mắn vl')
                    }else{
                        alert(`Chúc bạn may mắn lần sau. Bạn còn ${3-time} lượt chơi`)
                    }
                }
                console.log(time)
            }
        }
        }
    }