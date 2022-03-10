function hello_() { 
    return 'Hello World!';
}
    
function sayHello_(name) { 
    return "Hello " + name; 
}
    
function speak_(phrase, name, punctuation) { 
    let message = phrase + " " + name + "" + punctuation;
    console.log("message: ", message);
    return message;
}
    
//using arrow functions
let hello = () => "Hello World!"; 

let sayHello1 = (name) => "Hello " + name;
 /* if you have only one parameter, you can skip the parentheses*/
let sayHello2 = name => "Hello " + name; 

let speak = (phrase, name, punctuation) => { 
    let message = phrase + " " + name + "" + punctuation;
    console.log("message: ", message);
    return message;
}
