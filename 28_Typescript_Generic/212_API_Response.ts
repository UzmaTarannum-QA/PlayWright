function wrap<T>(statuscode:number, data:T):{statuscode:number, data:T}{
    return {statuscode, data};
}

let userdata =wrap<string>(200, "api");
console.log(userdata);

let flagresp = wrap<boolean>(200,true);
console.log(flagresp);