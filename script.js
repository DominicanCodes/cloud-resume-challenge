let counterContainer = document.querySelector("#visitCount");
let visitCount = localStorage.getItem("page_view");

if (visitCount == undefined){
    visitCount = 1;
    //Add entry for key="page_view"
    localStorage.setItem("page_view", 1);
} else {
    visitCount = Number(visitCount) + 1;
    // Update local storage value
    localStorage.setItem("page_view", visitCount);
}

counterContainer.innerHTML = visitCount;