data = {
    services:[
    {
        name: "Application Services",
        image: "images/application.png",
        features: ["Latest Technology", "Micro Service Architectiure"
         ,"Cloud Native","Test Driven Development"]

    },
    {
        name: "Testing Services",
        image: "images/testing.png",
        features: ["End to End Testing", "Performance Analysis"
         ,"Quality Assurance","Powerful tools"]
    },
    {
        name: "Infrastructure Services",
        image: "images/infrastructure.png",
        features: ["Cloud Services", "Low Cost"
         ,"Premium Hardware","High Performance"]
    }

]
}

let code =""

for(let service of data.services){
    code+= "<div class='service-box'>"
    code+="<h3>"+service.name+"</h3>"
    code+="<img class='service-box1' src='"+service.image+"'>"
    code+="<div class='features'> <ul>"
    // code+="<a class= 'clickable-link' onclick= showAlert()'"+ service.name + "'</a>'"
    for(let feature of service.features){
        code+="<li>"+feature+"</li>"
    }

    code+="</ul></div></div>"
}



function showAlert() {
  alert("Hello!");
}



document.getElementById("services-wrapper").innerHTML=code