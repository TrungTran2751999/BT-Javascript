function handle(){
    let id = event.srcElement.id
    switch(id){
        case 'bt-1':{
            let arr = [1,1]
            let inputFibo = parseInt(document.querySelector('.bt-1-input').value)
            if(inputFibo > 0){
                    while(arr.length < inputFibo){
                    let sum = arr[arr.length-2] +arr[arr.length-1]
                    arr.push(sum)
                }
            document.querySelector('.bt-1-result').innerHTML = `<b>${inputFibo} số đầu tiên trong dãy Pibonacci là:</b> ${arr.join(', ')}`
            }
        }
            break
        case 'bt-2':{
            let input = parseInt(document.querySelector('.bt-2-input').value)
            let result = 1
            if(input > 0){
                for(let i=input; i > 1; i--){
                    console.log(i)
                    result = result * i
                }
                document.querySelector('.bt-2-result').innerHTML = `<b>Result: </b>${input}! = ${result}`
            }
            break
        }
        case 'bt-3':{
            document.querySelector('.bt-3-result').innerHTML = ''
            let textOut = ''
            let input = parseInt(document.querySelector('.bt-3-input').value)
            let star = '*'
            let space= '&ensp;'
            let for1
            let for2
            for(i=1; i<=input; i++){
                document.querySelector('.bt-3-result').insertAdjacentHTML('beforeend', `<div class="in-${i} margin-in"></div>`)
                    for(let j=1; j<=5; j++){
                        if((i-1) % 4 == 0){
                            document.querySelector(`.in-${i}`).insertAdjacentHTML('beforeend', `<div class=in-${i}-${j}>&ensp;</div>`)
                        }else{
                            document.querySelector(`.in-${i}`).insertAdjacentHTML('beforeend', `<div class=in-${i}-${j}></div><div></div>`)
                        }
                        // tam giac xuoi doi nghich trai-phai
                        if((i-1) % 4 == 0){
                            for1 = j
                            for2 = 5-j
                        }else if((i-3) % 4 == 0){
                            for1 = 5-j
                            for2 = j
                        }
                        // dao vong dieu kien vong lap de thuc hien dao chieu cua tam giac xuoi 
                            for(let x=1; x<=for1; x++){
                                if((i-1) % 4 == 0){
                                    document.querySelector(`.in-${i}-${j}`).insertAdjacentHTML('beforeend', star)
                                }else if((i-3) % 4 == 0){
                                    document.querySelector(`.in-${i}-${j}`).insertAdjacentHTML('beforeend', space)
                                }
                            }
                            for(let x=1; x<=for2; x++){
                                if((i-1) % 4 == 0){
                                    document.querySelector(`.in-${i}-${j}`).insertAdjacentHTML('beforeend', space)
                                }else if((i-3) % 4 == 0){
                                    document.querySelector(`.in-${i}-${j}`).insertAdjacentHTML('beforeend', star)
                                }
                            }
                        // tam giac nguoc doi nghich trai-phai
                        if((i-2) % 4 == 0){
                            for1 = 5-(j-1)
                            for2 = j-1
                        }else if((i-4) % 4 == 0){
                            for1 = j-1
                            for2 = 5-(j-1)
                        }
                            if((i-2) % 4 == 0 || (i-4) % 4 == 0){
                                for(let x=1; x<=for1; x++){
                                    if((i-2) % 4 == 0){
                                        document.querySelector(`.in-${i}-${j}`).insertAdjacentHTML('beforeend', star)
                                    }else if((i-4) % 4 == 0){
                                        document.querySelector(`.in-${i}-${j}`).insertAdjacentHTML('beforeend', space)
                                    }
                                }
                                for(let x=1; x<=for2; x++){
                                    if((i-2) % 4 == 0){
                                        document.querySelector(`.in-${i}-${j}`).insertAdjacentHTML('beforeend', space)
                                    }else if((i-4) % 4 == 0){
                                        document.querySelector(`.in-${i}-${j}`).insertAdjacentHTML('beforeend', star)
                                    }
                                }
                            }
                    
                    }
            }
            break
        }
        case 'bt-4':{
            document.querySelector('.bt-4-result').innerHTML = ''
            let width = parseInt(document.querySelector(".width-bt-4").value)
            let height = parseInt(document.querySelector(".height-bt-4").value)
            let start = '*'
            let space = '&ensp;'
            if(width > 0 && height > 0){
                for(let i=1; i<=height; i++){
                    document.querySelector('.bt-4-result').insertAdjacentHTML('beforeend', `<div class="script-bt-${i}"></div>`)
                    for(let j=1; j <= width; j++){
                        if(i > 1 && i < height){
                            if(j==1 || j==width){
                                document.querySelector(`.script-bt-${i}`).insertAdjacentHTML('beforeend', start)
                            }else{
                                document.querySelector(`.script-bt-${i}`).insertAdjacentHTML('beforeend', space)
                            }
                        }else{
                            document.querySelector(`.script-bt-${i}`).insertAdjacentHTML('beforeend', start)
                        }
                        
                    }
                }
            }
            break
        }
        case 'bt-5':{
                let begin = document.querySelector('.bt-5-begin').value
                let interest = document.querySelector('.bt-5-interest').value
                let month = document.querySelector('.bt-5-month').value
                let laiKep = begin * Math.pow((1+(interest/100)), month)
                if(begin > 0 && interest > 0 && month > 0){
                    document.querySelector('.bt-5-result').innerHTML = `Sau ${month} tháng phải trả cả vốn lẫn lãi là: ${laiKep} VND`
                }else{
                    document.querySelector('.bt-5-result').innerHTML = ''
                }
        }
        case 'bt-6':{
               for(let i=0; i<=9; i++){
                
               }
        }
    }
}