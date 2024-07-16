//// docment //
const  gamecontainer = document.querySelector(".main-content");

const userResult = document.querySelector(".user-result img");

const computerResult = document.querySelector(".computer-result img");

const result = document.querySelector(".result");

let option = document.querySelectorAll(".option-image");

option.forEach((image,index) =>
{
    ///  looping the image using for each

    image.addEventListener("click" , (e) =>
    {

    image.classList.add("active");

    option.forEach((image2,index2) =>
    {
    // if the current index and index 2 is not same means the other active class will removed

    index !== index2 && image2.classList.remove("active");

    result.textContent = "wait...bro"

    });

     gamecontainer.classList.add("start");


    /// set a timeout to delay the result calculation 

    let time  = setTimeout(() =>{

        gamecontainer.classList.remove("start");

        /// get source of image which is clicked
   
     const store = image.querySelector("img").src;
     
     userResult.src = store;

     //// genrate a random number 0 and 2 ;

     const randomNumber = Math.floor(Math.random() *3);

     /// create a array of computer option 

     let computerarray = ["rock.png","scissors.png","paper.png"];

     computerResult.src = computerarray[randomNumber];

     /// assign a letter value to a random number option 

     let cpuvalue = ["R","S","P"][randomNumber];

     // assign the value index for user oder choice da 

     let uservalue = ["R","S","P"][index];

     /// create a object with all possible outcomes;

     let outcomes = {

        RR : "Draw",
        RS : "Computer win",
        RP : "User Win",
        SS : "Draw",
        SR : "User Win",
        SP : "Computer Win",
        PP :  "Draw",
        PR : "Computer Win",
        PS : "User Win"  
     }


     /// Look up the outcome vlaue based on user and cpu options

     let  outcomevalue = outcomes[cpuvalue + uservalue];
    
     console.log(outcomevalue);
     
     /// display the result 

     result.textContent = uservalue === cpuvalue ? "Match Draw" :  `${outcomevalue}`;


     

    },2500
)



    

 
});


});







