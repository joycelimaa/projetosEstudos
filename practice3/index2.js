// let myCourse = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// function course(myCourses){

//     for(let i =0; i<myCourses.length; i++){
//         console.log(myCourses[i]);
//     }
// }

// course(myCourse)

let button = document.getElementById("button");

let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
]

button.addEventListener("click", function(){
    console.log(data[0].score);
})

