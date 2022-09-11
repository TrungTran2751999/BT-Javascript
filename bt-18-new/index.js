function handle(){
    let id = event.srcElement.id
    switch(id){
        case 'bt-1':
            let numberCel = document.querySelector('.bt-1-number').value
            let numberFar = (numberCel*9/5)+32
            if(numberCel > 0){
                document.querySelector('.bt-1-result').innerHTML = `${numberCel}<sup>o</sup>C bằng ${numberFar}<sup>o</sup>F`
            }else{
                document.querySelector('.bt-1-result').innerHTML = ''
            }
            break
        case 'bt-2':
            let numberMet = document.querySelector('.bt-2-met').value
            let numberFeet = numberMet * 3.2808
            if(numberMet > 0){
                document.querySelector('.bt-2-result').innerHTML = `${numberMet} m bằng ${numberFeet} feet`
            }else{
                document.querySelector('.bt-2-result').innerHTML = ''
            }
            break
        case 'bt-3':
            let canhVuong = document.querySelector('.bt-3-canh-a').value
            let dientichVuong = Math.pow(canhVuong,2)
            if(canhVuong > 0){
                document.querySelector('.bt-3-result').innerHTML = `Diện tích hình vuông có cạnh ${canhVuong} m là ${dientichVuong} m<sup>2<sup>`
            }else{
                document.querySelector('.bt-3-result').innerHTML = ''
            }
            break
        case 'bt-4':
            let chieuRong = document.querySelector('.bt-4-chieu-rong').value
            let chieuDai = document.querySelector('.bt-4-chieu-dai').value
            let dienTichChuNhat = chieuRong * chieuDai
            if(chieuRong > 0 && chieuDai > 0){
                document.querySelector('.bt-4-result').innerHTML = `Diện tích hình chữ nhật có chiều dài ${chieuDai} m và ${chieuRong} m là ${dienTichChuNhat} m<sup>2<sup>`
            }else{
                document.querySelector('.bt-4-result').innerHTML = ''
            }
            break
        case 'bt-5':
            let chieuCao = document.querySelector('.bt-5-chieu-cao').value
            let canhDay = document.querySelector('.bt-5-canh-day').value
            let DienTich = chieuCao * canhDay/2
            if(chieuCao > 0 && canhDay > 0){
                document.querySelector('.bt-5-result').innerHTML = `Diện tích hình tam giác vuông có chiều cao ${chieuCao} m và cạnh đáy ${canhDay} m là ${DienTich} m<sup>2<sup>`
            }else{
                document.querySelector('.bt-5-result').innerHTML = ''
            }
            break
        case 'bt-6':
            let a6 = document.querySelector('.bt-6-a').value
            let b6 = document.querySelector('.bt-6-b').value
            let PT1 = `${a6}x + ${b6} = 0`
            if(b6 < 0){
                PT1 = `${a6}x ${b6} = 0`
            }else if(b6 == 0){
                PT1 = `${a6}x = 0`
            }
            let x6 = -b6/a6
            if(a6 != 0 && a6 != '' && b6 != ''){
                document.querySelector('.bt-6-result').innerHTML = `Nghiệm của phương trình ${PT1} là ${x6}`
            }else{
                document.querySelector('.bt-6-result').innerHTML = ''
            }
        case 'bt-7':
            let a7 = document.querySelector('.bt-7-a').value
            let b7 = document.querySelector('.bt-7-b').value
            let c7 = document.querySelector('.bt-7-c').value

            let ax7 = `${a7}x<sup>2</sup>`
            let bx7 = `+ ${b7}x`
            let cx7 = `+ ${c7}`

            if(a7 == 1){
                ax7 = `x<sup>2</sup>`
            }else if(a7 == -1){
                ax7 = `-x<sup>2</sup>`
            }
            if(b7 == 1){
                bx7 = `+ ${b7}x`
            }else if(b7 == -1){
                bx7 = `- x`
            }else if(b7 < -1){
                bx7 = `${b7}x`
            }
            if(c7 == -1){
                cx7 = ` ${c7}`
            }else if(c7 == 0){
                cx7 = ''
            }
            let PT2 = `${ax7} ${bx7} ${cx7} = 0`

            let delta = Math.pow(b7,2)-4*a7*c7
            let x17 = (-b7 + Math.pow(delta,1/2))/(2*a7)
            let x27 = (-b7 - Math.pow(delta,1/2))/(2*a7)
            let x7 = -b7/(2*a7)
            if(a7 != 0){
                if(delta < 0){
                    document.querySelector('.bt-7-result').innerHTML = `Phương trình ${PT2} vô nghiệm`
                }else if(delta > 0){
                    document.querySelector('.bt-7-result').innerHTML = `Phương trình ${PT2} có 2 nghiệm là x<sub>1</sub> = ${x17} và x<sub>2</sub> = ${x27}`
                }else{
                    document.querySelector('.bt-7-result').innerHTML = `Phương trình ${PT2} có nghiệm kép là x = ${x7}`
                }
            }else{
                ocument.querySelector('.bt-7-result').innerHTML = ''
            }
            break
        case 'bt-8':
            let age8 = document.querySelector('.bt-8-age').value
            if(age8 < 120 && age8 > 0){
                document.querySelector('.bt-8-result').innerHTML = `${age8} là tuổi một người`
            }else{
                document.querySelector('.bt-8-result').innerHTML = ''
            }
        case 'bt-9':
            let a9 = parseInt(document.querySelector('.bt-9-a').value)
            let b9 = parseInt(document.querySelector('.bt-9-b').value)
            let c9 = parseInt(document.querySelector('.bt-9-c').value)
            if(a9>0 && b9>0 && c9>0){
                if(a9 + b9 > c9 && b9 + c9 > a9 && a9 + c9 > b9){
                    document.querySelector('.bt-9-result').innerHTML = `3 số thực (${a9},${b9},${c9}) nhập vào là cạnh của một tam giác`
                }else{
                    document.querySelector('.bt-9-result').innerHTML = `3 số thực (${a9},${b9},${c9}) nhập vào không phải là cạnh của một tam giác`
                }
            }else{
                document.querySelector('.bt-9-result').innerHTML = ``
            }
        case 'bt-10':
            let soKw = parseInt(document.querySelector('.bt-10-kW').value)
            let Rank = [[0, 50], [51, 100], [101, 200], [201, 300], [301, 400]]
            let RankMoney = [1678, 1734, 2014, 2536, 2834, 2927]
            let RankKW = [50, 50, 100, 100, 100, 100]
            let sumMoneyRank = 0
            if(soKw >= 401){
                for(let j=0; j<=5; j++){
                    sumMoneyRank += RankMoney[j] * RankKW[j]- RankMoney[5] * RankKW[j]
                }
                sumMoneyRank += soKw*RankMoney[5]
            }
            for(let i=0; i<Rank.length; i++){
                if(soKw >= Rank[i][0] && soKw <= Rank[i][1]){
                    for(let j=0; j<i; j++){
                        sumMoneyRank += RankMoney[j] * RankKW[j] - RankMoney[i] * RankKW[j]
                    }
                    sumMoneyRank += soKw*RankMoney[i]
                    break
                }
            }
            document.querySelector('.bt-10-result').innerHTML = `Giá tiền điện là ${sumMoneyRank} VND`
        break
        case 'bt-11':
            let TN = document.querySelector('.bt-11-TN').value
            let dep = document.querySelector('.bt-11-dep').value
            let trD = Math.pow(10,6)
            let arrTN = [[0, 5*trD], [5*trD, 10*trD], [10*trD, 18*trD], [18*trD, 32*trD], [32*trD, 52*trD], [52*trD, 80*trD]]
            let arrTS = [5/100, 10/100, 15/100, 20/100, 25/100, 30/100, 35/100]
            let ChiuThue = TN-11*trD-dep*4.4*trD
            if(TN > 0 && dep >= 0){
                if(ChiuThue <= 0){
                    document.querySelector('.bt-11-result').innerHTML = `<div>Thuế TNCN phải nộp: 0 VND</div>
                                                                        <div>Thực lãnh: ${TN} VND</div>`
                }else{
                    let sum = 0
                    for(let i=0; i<arrTN.length; i++){
                        if(ChiuThue > arrTN[i][0] && ChiuThue <= arrTN[i][1]){
                            for(let j=0; j<i; j++){
                                sum += (arrTN[j][1] - arrTN[j][0]) * arrTS[j]
                                console.log(sum)
                            }
                            sum += (ChiuThue-arrTN[i][0])*arrTS[i]
                            break
                        }
                    }
                    if(ChiuThue > 80*trD){
                        for(let j=0; j<arrTN.length; j++){
                            sum += (arrTN[j][1] - arrTN[j][0]) * arrTS[j]
                            console.log((arrTN[j][1] - arrTN[j][0]) * arrTS[j])
                        }
                        sum += (ChiuThue-arrTN[5][1])*arrTS[6]
                    }
                    document.querySelector('.bt-11-result').innerHTML = `<div>Thuế TNCN phải nộp: ${sum} VND</div>
                                                                        <div>Thực lãnh: ${TN-sum} VND</div>`
                }
            }else{
                document.querySelector('.bt-11-result').innerHTML = ''
            }
            break
            case 'bt-12':
                let begin = document.querySelector('.bt-12-begin').value
                let interest = document.querySelector('.bt-12-interest').value
                let month = document.querySelector('.bt-12-month').value
                let laiKep = begin * Math.pow((1+(interest/100)), month)
                if(begin > 0 && interest > 0 && month > 0){
                    document.querySelector('.bt-12-result').innerHTML = `Sau ${month} tháng phải trả cả vốn lẫn lãi là: ${laiKep} VND`
                }else{
                    document.querySelector('.bt-12-result').innerHTML = ''
                }
    }
}