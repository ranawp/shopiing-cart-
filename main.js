let shop = document.getElementById('shop');
// console.log(shop)

let shopItemsData = [{
    id: "1",
    name: "T-shirt",
    price: "55",
    desc: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    img: "images/img-1.jpg"
},
{
    id: "2",
    name: "Man's shirt",
    price: "25",
    desc: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    img: "images/img-2.jpg"
},
{
    id: "3",
    name: "shirt",
    price: "35",
    desc: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    img: "images/img-3.jpg"
},
{
    id: "4",
    name: "coat",
    price: "55",
    desc: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    img: "images/img-4.jpg"
}]

let gnerateShop = () => {

    return (shop.innerHTML = shopItemsData.map((e) => {
        const { img, desc, price, name, id } = e
        return ` 
        <div id=product-id-${id} class="item">
                   <img width="220" src=${img} alt="">
                   <div class="details">
                       <h3>${name}</h3>
                       <p>${desc}</p>
                       <div class="price-quantity">
                           <h4>$${price}</h4>
                           <div class="buttons">
                               <i onclick="increment(${id})" class="bi bi-plus"></i>
                               <div id=${id} class="quantity">0</div>
                               <i onclick="decrement(${id})" class="bi bi-dash"></i>
                           </div>
                       </div>
                   </div>
               </div>
        `
    }).join(" "))
}

gnerateShop()


let basket = [];

let increment = (id) => {
    console.log("id", id)
    let search = basket.find((x) => x.id === id)

    if (search === undefined) {
        basket.push({
            id: id,
            item: 1
        })
    } else {
        search.item += 1
    }
    update(id)

}

let decrement = (id) => {
    console.log('dec')
    let search = basket.find((x) => x.id === id)
    if (search.item === 0) return;
    else {
        search.item -= 1;
    }
    update(id)
}

let update = (id) => {
    let search = basket.find((x) => x.id === id)
    document.getElementById(id).innerHTML = search.item

}



// let increment = (id) => {

//     let selectedItem = id;
//     let search = basket.find((x) => x.id === selectedItem);

//     if (search === undefined) {
//         basket.push({
//             id: selectedItem,
//             item: 1

//         })
//     } else {
//         search.item += 1;
//     }

//     console.log(search)


//     // console.log(basket)
// }
