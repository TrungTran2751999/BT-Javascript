let arrNewProduct = ['Sony Xperia']
function addNewProduct(){
    let newProduct = document.querySelector('.new-product-input').value
    //Xoa khoang trang
    newProduct = newProduct.trim();
    if(newProduct !=''){
        console.log(arrNewProduct)
        document.querySelector('tbody').innerHTML = ''
        arrNewProduct.unshift(newProduct);
        for(let i=0; i<arrNewProduct.length; i++){
            document.querySelector('tbody').insertAdjacentHTML('beforeend', `<tr class="product-${i}">
                                                                                <td class="${i}-product-name">${arrNewProduct[i]}</td>
                                                                                <td class="${i}-product-edit"><button id="${i}-index-edit" onclick=editProduct(this.id) class="class-button">Edit</button></td>
                                                                                <td><button id="${i}-delete-index" onclick=deleteProduct(this.id) class="class-button">Delete</button></td>
                                                                            </tr>`)
        }
        document.querySelector('.count-product').innerHTML = `${arrNewProduct.length} products`
        document.querySelector('.new-product-input').value = ''
        document.querySelector('#warning').innerHTML = ''
    }else{
        document.querySelector('#warning').style.color = 'red'
        document.querySelector('#warning').innerHTML = 'Tên sản phẩm không hợp lệ'
    }
}
function deleteProduct(id){
    let dicsionDelete = confirm(`Are you sure delete ${arrNewProduct[id[0]]}`)
    if(dicsionDelete){
        arrNewProduct.splice(id[0],1)
        document.querySelector('tbody').innerHTML = ''
        for(let i=0; i<arrNewProduct.length; i++){
            document.querySelector('tbody').insertAdjacentHTML('beforeend', `<tr class="product-${i}">
                                                                                <td class="${i}-product-name">${arrNewProduct[i]}</td>
                                                                                <td class="${id[0]}-product-edit"><button id="${i}-index-edit" class="class-button" onclick=editProduct(id)>Edit</button></td>
                                                                                <td><button id="${i}-delete-index" onclick=deleteProduct(this.id) class="class-button">Delete</button></td>
                                                                            </tr>`)
        }
        document.querySelector('.count-product').innerHTML = `${arrNewProduct.length} products`
        console.log(arrNewProduct)
    }
}
function editProduct(id){
    console.log(id[0])
    document.getElementsByClassName(`${id[0]}-product-edit`)[0].innerHTML = `<button id="${id[0]}-index-save" class="class-button" onclick=saveUpdateProduct(this.id)>Save</button>`
    document.getElementsByClassName(`${id[0]}-product-name`)[0].innerHTML = `<input type="text" id="${id[0]}-product-input" class="edit-product-input" placeholder="New product" oninput=scanProductName(this.id)>
                                                                             <div id="warning-edit-${id[0]}"></div>`
    document.getElementById(`${id[0]}-product-input`).value = arrNewProduct[id[0]]
}
function saveUpdateProduct(id){
    let textEdit = document.getElementById(`${id[0]}-product-input`).value
    textEdit = textEdit.trim();
    if(textEdit !=''){
        arrNewProduct[id[0]] = textEdit
        document.getElementsByClassName(`${id[0]}-product-edit`)[0].innerHTML = `<button id="${id[0]}-index-edit" class="class-button" onclick=editProduct(this.id)>Edit</button>`
        document.getElementsByClassName(`${id[0]}-product-name`)[0].innerHTML = `${arrNewProduct[id[0]]}`
    }
}
function scanProductName(id){
    let newProduct = document.getElementById(id).value
    let idEdit =''
    document.getElementById(id).classList.contains('class-add') ? idEdit= 'warning':idEdit = `warning-edit-${id[0]}`
    let isSpace = false
    newProduct == '' ? isSpace = true:''
    for(let i=0; i<newProduct.length; i++){
        if(newProduct[i] != ' '){
            console.log('ccc')
            isSpace = false
            break
        }
        if(i == newProduct.length-1){
            isSpace = true
        }
    }
    if(isSpace){
        document.getElementById(idEdit).style.color = 'red'
        document.getElementById(idEdit).innerHTML= 'Tên sản phẩm không hợp lệ'
    }else{
        document.getElementById(idEdit).style.color = 'green'
        document.getElementById(idEdit).innerHTML= 'Tên sản phẩm hợp lệ'
    }
}