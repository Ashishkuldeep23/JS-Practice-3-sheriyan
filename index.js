
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
        "https://res.cloudinary.com/dlvq8n2ca/image/upload/v1692032164/utemmzfh8jy0w4bufdp4.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtSyt2AuaENY8PrFMU_e2VKzSkDFj6w5wqdQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpip3aneCiD5G9DGvLl_9aCVkciA3rlt1RXw&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsik0vIMpdJlFgf3ElDxQJKYqlNNc4yICcV6O6FoMHevwhineR_aslFq0QUUq4gsvqxYc&usqp=CAU",
        "https://img.freepik.com/premium-photo/realistic-image-eye-iris-cornea-retina-with-luminous-flash-light-blue-eye-3d-illustration_508524-254.jpg?w=2000",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu_fpPmbK-bebEeX036y7frmW06amtCkG1ew&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpcd08Atj6O4yBZDzCJp7H0msdHXc10gNr10KT9zyAthRC58FXlfArta_6fYDq0RIBcEo&usqp=CAU" ,
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9IFzxKtkXWiPakqTSyEIUsxf3qrTvksRPPw&usqp=CAU",

    ];


    return images[Math.floor(Math.random() * images.length)];

}



function getAnimationClassNmaeRandom(){
    let animationClassNamesAre = [
        "animate__slideInUp" ,
        "animate__rotateInUpRight" ,
        "animate__tada" ,
        "animate__fadeInDownBig",
        "animate__shakeX" ,
        "animate__rotateIn",
        "animate__wobble" ,
        "animate__heartBeat",
        "animate__rubberBand",
        "animate__bounce" ,
        

    ]

    return animationClassNamesAre[Math.floor(Math.random() * animationClassNamesAre.length)];
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
    img.classList.add( "animate__animated" );
    img.classList.add( getAnimationClassNmaeRandom() );

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

} , 270))