const shippingInfo = {
    username: '',
    address: '',
    city: '',
    state: '',
    contact: '',
    pin: ''
}

// Function validate() to observe each input in input fields
function validate(e){
    let name = e.name;
    let value = e.value;

    if(name == "username"){
        shippingInfo.username = value;
    }
    if(name == "address"){
        shippingInfo.address = value;
    }
    if(name == "city"){
        shippingInfo.city = value;
    }
    if(name == "state"){
        shippingInfo.state = value;
    }
    if(name == "contact"){
        shippingInfo.contact = value;
    }
    if(name == "pin"){
        shippingInfo.pin = value;
    }
}


function handleSubmitShipping(){
    console.log(shippingInfo)
    localStorage.setItem("shippingInfo",JSON.stringify(shippingInfo));
    return false;
}