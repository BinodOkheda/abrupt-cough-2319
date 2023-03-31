const container = document.getElementById("container")

fetch("https://mushy-baseball-cap-clam.cyclic.app/fitness")
.then(res=>res.json())
.then(data=>{
    display(data)
})

const display = (data)=>{
    console.log(data)
    container.innerHTML="";
    data.forEach(element => {

        const card = document.createElement("div")
        const image = document.createElement("img");
        image.src = element.image
        const title = document.createElement("p");
        title.textContent = element.title;
        const price = document.createElement("p");
        price.textContent = element.price
        const rating = document.createElement("p");
        rating.textContent = element.rating;
        const color = document.createElement("p");
        color.textContent= element.color;
        const cartBtn = document.createElement("button")
        cartBtn.textContent="ADD TO CART"

        cartBtn.addEventListener("click",()=>{
            console.log("hi",element.id)
        })

        card.append(image,title,price,rating,color,cartBtn)
        container.append(card)

    });
}
