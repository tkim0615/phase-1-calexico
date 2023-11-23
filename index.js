const numberInCart = document.getElementById('number-in-cart')
const currentCart = Number(numberInCart.textContent)
const numberToAddInput = document.getElementById('cart-amount')
const numberToAdd = Number(numberToAddInput.value)
const total = Number(currentCart + numberToAdd)

const dishImageElement = document.getElementById('dish-image')
    const dishNameElement = document.getElementById('dish-name')
    const dishDescriptionElement = document.getElementById('dish-description')
    const dishPriceElement = document.getElementById('dish-price')


fetch('http://localhost:3000/menu')
.then(response => response.json())
.then(menuArray => {
   
    menuArray.forEach(menu => {
        addMenuItem(menu) //deliverable 1
    })

    displayMenuDetail(menuArray[0])


    const formElement = document.getElementById('cart-form')
    formElement.addEventListener('submit', (e) => {
        e.preventDefault()
        cartSum()
        formElement.reset()

    })

})


//deliverabl1 refactored
function addMenuItem(menu){
    const span = document.createElement('span')
    const menuItemElement = document.querySelector('#menu-items')
    span.innerText = menu.name
    menuItemElement.appendChild(span)

    span.addEventListener('click', (e) => {
        displayMenuDetail(menu)
    })
}

function displayMenuDetail(menu){
    dishImageElement.src = menu.image
    dishNameElement.textContent = menu.name
    dishDescriptionElement.textContent = menu.description
    dishPriceElement.textContent = '$' + menu.price
    numberInCart.textContent = currentCart
}

function cartSum(){
        const numberInCart = document.getElementById('number-in-cart')
        const currentCart = Number(numberInCart.textContent)
        const numberToAddInput = document.getElementById('cart-amount')
        const numberToAdd = Number(numberToAddInput.value)
        const total = Number(currentCart + numberToAdd)
        numberInCart.textContent = Number(total)

}








































// // Write your code here...

//     const dishImageElement = document.getElementById('dish-image')
//     const dishNameElement = document.getElementById('dish-name')
//     const dishDescriptionElement = document.getElementById('dish-description')
//     const dishPriceElement = document.getElementById('dish-price')

//     const cartFormElement = document.getElementById('cart-form')
//     const numberInCartElement = document.getElementById('number-in-cart')
//     const numberToAddElement = document.getElementById('cart-amount')




// fetch('http://localhost:3000/menu')
// .then(resp => resp.json())
// .then(menus => {

//     //deliverable 1 Fetch all the menu items. For each menu item create a span element that contains the name of the menu item, and add it to the #menu-items div.
//     menus.forEach(menuItem => {
//         const spanElement = document.createElement('span')
//         const menuItemDivElement = document.getElementById('menu-items')
//         spanElement.textContent = menuItem.name

//         menuItemDivElement.appendChild(spanElement)
//         //deliverable 4 when user clicks menu items on left, see all details of specific menu item
//         spanElement.addEventListener('click', (e) => {
//             displayFoodDetail(menuItem) 
//         }
//         );

        
//     });
//     //deliverable 2 - When the page loads, display the first menu item. You should set the image, name, description, and price. All the correct elements to set are located in the #dish section element.
//     displayFoodDetail(menus[0])    

//     //deliverable 4  form submission event
//     cartFormElement.addEventListener('submit', (e) =>{
//         e.preventDefault()
    
//     let cartAmount = parseInt(numberInCartElement.textContent)
//     let numberToAdd = parseInt(numberToAddElement.value)
//         if(isNaN(numberToAdd)){
//             alert ("Not a number!")
//         }else{
//             let sum = cartAmount + numberToAdd
//             numberInCartElement.textContent = sum
//         }
        
    
//     cartFormElement.reset()
// })

    





























    
//     // const cartFormElement = document.getElementById('cart-form')
//     // const numberInCartElement = document.getElementById('number-in-cart')
//     // const cartAmountElement = document.getElementById('cart-amount')
//     // cartFormElement.addEventListener('submit', (e) => {
//     //     e.preventDefault()
//     //     let numberinCartValue = parseInt(numberInCartElement.textContent)
//     //     let numbertoAddToCart = parseInt(cartAmountElement.value)
//     //     let newCartAmount = numberinCartValue + numbertoAddToCart
//     //      numberInCartElement.textContent = newCartAmount
         
//     //     cartFormElement.reset()
        
//     // })
    


// })
// //refactoring deliverable 2 -- these are in global scope(moved out from for each scope)
// function displayFoodDetail(food){
//     dishImageElement.src = food.image
//     dishNameElement.textContent = food.name
//     dishDescriptionElement.textContent = food.description
//     dishPriceElement.textContent = '$' + food.price
    

//     const numberInCartElement = document.getElementById('number-in-cart')
//     numberInCartElement.textContent = 0

// }



// //deliverable 2 code before making into function
// // const dishImageElement = document.getElementById('dish-image')
// // const dishNameElement = document.getElementById('dish-name')
// // const dishDescriptionElement = document.getElementById('dish-description')
// // const dishPriceElement = document.getElementById('dish-price')

// // dishImageElement.src = menus[0].image
// // dishNameElement.textContent = menus[0].name
// // dishDescriptionElement.textContent = menus[0].description
// // dishPriceElement.textContent = menus[0].price
























// // const menuItemElement = document.getElementById('menu-items')
// // fetch('http://127.0.0.1:3000/menu')
// // .then(response => response.json())
// // .then(menu => {
// //     menu.forEach(item => {
// //     const spanElement = document.createElement('span')
// //     spanElement.textContent = item.name
// //     menuItemElement.appendChild(spanElement)
      

// //     spanElement.addEventListener('click', () => {
// //         displayMenudetails(item)
// //     })

// //     const numberInCartElement = document.getElementById('number-in-cart')
// //     const formElement = document.getElementById('cart-form')
// //     const cartAmountElement = document.getElementById('cart-amount')
// //     formElement.addEventListener('submit', (e) => {e.preventDefault()

      
// //         numberInCartElement.textContent = cartAmountElement.value
// //     }
// //     )
    
    
// //     }
// //     )

// //     const dishSectionElement = document.getElementById('dish')

// //     const dishImageElement = document.getElementById('dish-image')
// //     const dishNameElement = document.getElementById('dish-name')
// //     const dishDescriptionElement = document.getElementById("dish-description")
// //     const dishPriceElement = document.getElementById('dish-price')
        
// //     displayMenudetails(menu[0])
  

// //     function displayMenudetails (item){
// //         dishImageElement.src = item.image
// //         dishNameElement.textContent = item.name
// //         dishDescriptionElement.textContent = item.description
// //         dishPriceElement.textContent = item.price
// //     }




// // })

