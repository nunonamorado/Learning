function sayHello(name) {
    var message = "Olá, ";    
    var completeMessage = message + name + " e amigos!!!!!";    
    
    var p = document.createElement("p");
    
    var text = document.createTextNode(completeMessage);
    p.appendChild(text);
    
    var container = document.querySelector(".container");
    container.appendChild(p);
};


sayHello("Sara");
sayHello("Manuel");
sayHello("João");
sayHello("Joana");
sayHello("Nora");
sayHello("Nuno");