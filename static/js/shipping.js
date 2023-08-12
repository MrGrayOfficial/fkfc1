const shippingInfo = {
    username: '',
    address: '',
    city: '',
    state: '',
    contact: '',
    pin: ''
}
let tempContactValue;
let tempPinValue;

let btnStatus = document.querySelector('.btnStatus');
btnStatus.disabled = true;

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
        let contact = document.querySelector('#CONTACT');
        let contactErrorMessage = document.querySelector('#contactErrorMessage');
        let tempStringValue = `${value}`;
        if(tempStringValue.length<=10){
            tempContactValue = value;
            shippingInfo.contact = value;
        }
        else{
            contact.value = tempContactValue;
        }
        if(tempStringValue.length<10){
            contactErrorMessage.innerHTML = `<p>*contact no. must be 10 digit</p>`;
            btnStatus.disabled = true;
        }
        else{
            contactErrorMessage.innerHTML = '';
        }
    }
    if(name == "pin"){
        let contact = document.querySelector('#PIN');
        let pinErrorMessage = document.querySelector('#pinErrorMessage');

        let tempStringValue = `${value}`;
        if(tempStringValue.length<=6){
            tempPinValue = value;
            shippingInfo.pin = value;
        }
        else{
            contact.value = tempPinValue;
        }
        if(tempStringValue.length<6){
            pinErrorMessage.innerHTML = `<p>*pin code must be 6 digit</p>`;
            btnStatus.disabled = true;
        }
        else{
            pinErrorMessage.innerHTML = '';
        }
    }

    if(shippingInfo.username.length<1||shippingInfo.address.length<1||shippingInfo.city.length<1||shippingInfo.state.length<1||shippingInfo.contact.length<10||shippingInfo.pin.length<6){
        btnStatus.disabled = true;
    }
    else{
        btnStatus.disabled = false;
    }
}



function handleSubmitShipping(){
    console.log(shippingInfo)
    localStorage.setItem("shippingInfo",JSON.stringify(shippingInfo));

    location.href=`/shipping/order/${JSON.parse(localStorage.getItem("userInfo")).token}`;

    return false;
}