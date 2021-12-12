const form = document.querySelector("#container");
var male = [ 'Kwasi',  'Kwadwo','Kwabena','Kwaku', 'Yaw', 'Kofi', 'Kwame']
var female = ['Akosua', 'Adwoa','Abenaa','Akua', 'Yaa', 'Afua', 'Ama']
form.addEventListener("submit", function(button){
    button.preventDefault();
    var jsform = new FormData(form);
    const b = new Date(jsform.get("tyr")).getDay()
    console.log(b)
    if(jsform.get("gender") == "female" && b == 1){
        alert("your akan name is " + female[1] )
    }
    else if(jsform.get("gender") == "female" && b == 2){
        alert("your akan name is " + female[2] )
    }
    else if(jsform.get("gender") == "female" && b == 3){
        alert("your akan name is " + female[3] )
    }
    else if(jsform.get("gender") == "female" && b == 4){
        alert("your akan name is " + female[4] )
    }
    else if(jsform.get("gender") == "female" && b == 5){
        alert("your akan name is " + female[5] )
    }
    else if(jsform.get("gender") == "female" && b == 6){
        alert("your akan name is " + female[6] )
    }
    else if(jsform.get("gender") == "female" && b == 7){
        alert("your akan name is " + female[7] )
    }
    else if(jsform.get("gender") == "female" && b == 0){
        alert("your akan name is " + female[0] )
    }
    else if (jsform.get("gender") == "male" && b == 1){
        alert("your akan name is " + male[1] )
    }
    else if(jsform.get("gender") == "male" && b == 2){
        alert("your akan name is " + male[2] )
    }
    else if(jsform.get("gender") == "male" && b == 3){
        alert("your akan name is " + male[3] )
    }
    else if(jsform.get("gender") == "male" && b == 4){
        alert("your akan name is " + male[4] )
    }
    else if(jsform.get("gender") == "male" && b == 5){
        alert("your akan name is " + male[5] )
    }
    else if(jsform.get("gender") == "male" && b == 6){
        alert("your akan name is " + male[6] )
    }
    else if(jsform.get("gender") == "male" && b == 7){
        alert("your akan name is " + male[7] )
    }
    else if(jsform.get("gender") == "male" && b == 0){
        alert("your akan name is " + male[0] )
    }
    
    else{
        alert("Please provide details in every field  ")
    }
    console.log(jsform.get("tyr"))

})
