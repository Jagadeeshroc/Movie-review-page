let reviewsContainerEl = document.getElementById("reviewsContainer");
let tittleInputEl = document.getElementById("tittleInput");
let reviewsTextareaEl = document.getElementById("reviewTextarea");

function onAddReview(){
    let movieTittle = tittleInputEl.value;
    
    let movieReview = reviewsTextareaEl.value;

    if (movieTittle=== "") { 
        alert ("please enter a movie tittle");
        return;

    }  

    let movieTittleEl = document.createElement('h1');
    movieTittleEl.textContent="movie Tittle: "+ movieTittle;
    movieTittleEl.classList.add("movie-tittle");
    reviewsContainerEl.appendChild(movieTittleEl);

    let movieReviewEl= document.createElement("p");
    movieReviewEl.textContent = "Review: "+ movieReview;
    reviewsContainerEl.appendChild(movieReviewEl);

    let horizontalLineEl = document.createElement("hr");
    horizontalLineEl.style.border = "1px dotted #7b8794"; 
    reviewsContainerEl.appendChild(horizontalLineEl);


    tittleInputEl.value="";
    reviewsTextareaEl.value=""; 

}