let x = 0;
let y = 0;
let z = 0;

function add(a, b){
    a += b;
    x = a;
    print();
    return x;
}

function multiply(a, b){
    x = a;
    y = a;
    for (let i = 1; i < b; i++){
        add(x, y)
    }
    print();
    return x;
}

function power(a, b){
    x = a;
    z = a;
    for (let i = 1; i < b; i++){
        multiply(x, z)
    }
    print();
    return x;
}

function factorial(a){
    x = a;
    z = a;
    for (let i = 0; i < a; i++){
        z -= 1;
        multiply(x, z);
    }
    print();
    return x;
}

function fibonacci(a){
    y = 1;
    x = 0;
    for (let i = 1; i < a; i++){
        z = x;
        add(x, y);
        y = z;
    }
    print();
    return x;
}

document.write('<br>' + add + '<br><br>' + multiply + '<br><br>' + power + '<br><br>' + factorial + '<br><br>' + fibonacci + '<br><br><input id="input" placeholder="eval();" style="width: 300px; height: 25px;"><h1 id="display" style="text-align: center;"></h1>');
let display = document.querySelector('#display');

// document.write("<input id='input' placeholder='eval();'>")
let input= document.querySelector('#input');
input.addEventListener('change', function(){
    eval(input.value);
})

function print(){display.innerHTML = x;}