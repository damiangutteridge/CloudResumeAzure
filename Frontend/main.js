window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const localApiUrl = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(localApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count =  response.count;
        document.getElementById("VisitorCounter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}