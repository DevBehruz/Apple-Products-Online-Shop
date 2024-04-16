let products = {
    data:[
        {
            productName: "IPHONE 12 PRO",
            category:"Phone",
            price:"999",
            image:"ip-2.png"
        },
        {
            productName: "MAC BOOK AIR",
            category:"Computer",
            price:"1999",
            image:"mac.jpg"
        },
        {
            productName: "APPLE WATCH",
            category:"Watch",
            price:"9",
            image:"watch-3.jpg "
        },
        {
            productName: "APPLE TV",
            category:"Tv",
            price:"199",
            image:"tv-2.png"
        },
        {
            productName: "IPHONE 13 PRO",
            category:"Phone",
            price:"1999",
            image:"44444.png"
        },
        {
            productName: "MAC BOOK M1",
            category:"Computer",
            price:"3999",
            image:"maccc.png"
        },
        {
            productName: "APPLE WATCH V",
            category:"Watch",
            price:"99",
            image:"watchch.jpg"
        },
        {
            productName: "APPLE TV",
            category:"Tv",
            price:"199",
            image:"tv-2.png"
        },
        {
            productName: "IPHONE 13 PRO MAX",
            category:"Phone",
            price:"1999",
            image:"1111.png"
        },
        {
            productName: "IPHONE 14 PRO",
            category:"Phone",
            price:"1999",
            image:"iphoneaa.jpg"
        },
        {
            productName: "APPLE WATCH v-2",
            category:"Watch",
            price:"199",
            image:"watch-3.jpg"
        },
        {
            productName: "APPLE WATCH V-3",
            category:"Watch",
            price:"299",
            image:"watch-2.jpg"
        },
    ]
}
for(let i of products.data){
    let card = document.createElement('div');
    card.classList.add('card',i.category,'hide');
    let imgContainer = document.createElement('div');
    imgContainer.classList.add('image-container');
    let image = document.createElement('img');
    image.setAttribute('src',i.image)
    imgContainer.appendChild(image);
    // container 
    let container = document.createElement('div');
    container.classList.add('container');
    // product name
    let name = document.createElement('h5');
    name.classList.add('product-name');
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name)
    // product price
    let price = document.createElement('h6')
    price.innerText = '$' + i.price;
    container.appendChild(price)

    card.appendChild(imgContainer);
    card.appendChild(container)
    document.getElementById('products').appendChild(card);
}

function filterProduct(value){
    let btns = document.querySelectorAll('.btn-value');
    btns.forEach(button =>{
        if(value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add('active')
        }else{
            button.classList.remove('active')
        }
    });
    let elements = document.querySelectorAll('.card');
    elements.forEach((element) =>{
        if(value == 'all'){
            element.classList.remove('hide');
        }
        else{
            if(element.classList.contains(value)){
                element.classList.remove('hide')
            }
            else{
                element.classList.add('hide')
            }
        }
    })
}

document.getElementById('search').addEventListener('click',()=>{
    let searchInput = document.getElementById('search-input').value;
    let elements = document.querySelectorAll('.product-name');
    let cards = document.querySelectorAll('.card');
    elements.forEach((element,index) => {
        if(element.innerText.includes(searchInput.toUpperCase())){
            cards[index].classList.remove('hide');
        }else{
            cards[index].classList.add('hide');
        }
    })
})

window.onload = () =>{
    filterProduct('all');
}

