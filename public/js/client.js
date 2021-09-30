console.log("Client Side log")

//submit button clicked
document.getElementById("btnsubmit").addEventListener("click", () =>{

    //get our coordinates from the user
    let long = document.getElementById("txtlongitude").value 
    let lat = document.getElementById("txtlatitude").value

    //build our api call
    let weatherUrl = `${window.location.href}weather?coords=${long},${lat}`

    //log user input
    console.log(`long:${long}`)
    console.log(`lat:${lat}`)
    console.log(weatherUrl)
    
    //make our api call
    fetch(weatherUrl).then((response) => {
        response.json().then((data) =>{
            console.log(data)
        })
    })
})