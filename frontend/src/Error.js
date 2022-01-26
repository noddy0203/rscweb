const Error = (state)=>{
    var error = {};

if(!state.fullname){
    error.fullname = "enter your name"
}

if(!state.phone){
    error.phone = "enter contact number"
} else if(! /^[6-9][0-9]{9}$/.test(state.phone)){
error.phone = "its not indian mobile number formate"
} else if (!/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/) {
    error.phone = "its not us mobile number formate"
}
if(!state.email){
    error.email = "enter email address"
} else if(! /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(state.email)){
    error.email = "mention valid email address"
}

return error
}

export default Error;