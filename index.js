
const throttleFunction = (func, delay) => {

    // Previously called time of the function
    let prev = 0;
    return (...args) => {
        // Current called time of the function
        let now = new Date().getTime();

        // Logging the difference between previously
        // called and current called timings
        // console.log(now - prev, delay);

        // If difference is greater than delay call
        // the function again.
        if (now - prev > delay) {
            prev = now;

            // "..." is the spread operator here
            // returning the function with the
            // array of arguments
            return func(...args);
        }
    }
}




function randomImg() {
    let images = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCe96xcjYnpr4twMSox-dSbJraEvvknk2wjg&usqp=CAU",
        "https://cdn.w600.comps.canstockphoto.com/colorful-flower-on-black-background-drawing_csp8445899.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3E7HfWciCppTVj2EGrBUt34FtRgsfNMfYzw&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDAVof4m0fMjXXItHlKeAchup0UEcpOZlTxQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeHfzNV8NN2-Qkwk1nQP-mLqHJ0hv6sh6vsQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFUQmeEdv_i7t0ojA0UbzTg9XhKIz4FQPtVA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL4EZYAyZmo19iI-KwaW4X_Zj6ZyJ34ywKaA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtSyt2AuaENY8PrFMU_e2VKzSkDFj6w5wqdQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpip3aneCiD5G9DGvLl_9aCVkciA3rlt1RXw&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsik0vIMpdJlFgf3ElDxQJKYqlNNc4yICcV6O6FoMHevwhineR_aslFq0QUUq4gsvqxYc&usqp=CAU",
    ];


    return images[Math.floor(Math.random() * images.length)];

}




let CenterDiv = document.querySelector("#center")

CenterDiv.addEventListener("mousemove", throttleFunction( (d)=>{


    
    let div = document.createElement("div")


    div.classList.add("caretedDiv")



    div.style.left = d.clientX-50 + "px"
    div.style.top = d.clientY-170 + "px"
    // console.log(div)


    let img = document.createElement("img");

    img.setAttribute( "src" , randomImg() )

    div.appendChild(img)

    // img.style.transform = "translateY(0%)"

    // img.style.transform = "rotate(50deg)"

    gsap.to( img  , {
        y : 0 ,
        ease : "power1"
    })


    document.body.appendChild(div)



    setTimeout(() => {
        div.remove()
    }, 1000)


 

} , 250))