function Billetes() {
    let cantidad = parseInt(document.getElementById('cantidad').value);
    let nombre = document.getElementById('nombre').value;    
    const info = document.getElementById('info');

    let b100 = document.getElementById('b100');
    let b50 = document.getElementById('b50');
    let b20 = document.getElementById('b20');
    let b10 = document.getElementById('b10');
    let b5 = document.getElementById('b5');
    let b1 = document.getElementById('b1');


    if(cantidad == "" || nombre == "")
     {
       alert('Complete los campos!') 

    }
    else{
        alert('Su retiro ha sido exitoso')
        }

while(cantidad > 0)
{

    if(cantidad >= 100)
    {
        let billetes100 = Math.floor(cantidad / 100);
        cantidad = cantidad % 100;
        b100.innerHTML = billetes100;
        info.innerHTML = `Hola, ${nombre}. su retiro es`;
    }
    else if(cantidad >= 50)
    {
        let billetes50 = Math.floor(cantidad / 50);
        cantidad = cantidad % 50;
        b50.innerText = billetes50;
        info.innerHTML = `Hola, ${nombre}. su retiro es`;
    }
    else if(cantidad >= 20)
    {
        let billetes20 = Math.floor(cantidad / 20);
        cantidad = cantidad % 20;
        b20.innerHTML = billetes20;
        info.innerHTML = `Hola, ${nombre}. su retiro es`;
    }
    else if(cantidad >= 10)
    {
        let billetes10 = Math.floor(cantidad / 10);
        cantidad = cantidad % 10;
        b10.innerHTML = billetes10;
        info.innerHTML = `Hola, ${nombre}. su retiro es`;
    }
    else if(cantidad >= 5)
    {
        let billetes5 = Math.floor(cantidad / 5);
        cantidad = cantidad % 5;
        b5.innerHTML = billetes5;
        info.innerHTML = `Hola, ${nombre}. su retiro es`;
    }
    else if(cantidad >= 1)
    {
        let billetes1 = Math.floor(cantidad / 1);
        cantidad = cantidad % 1;
        b1.innerHTML = billetes1;
        info.innerHTML = `Hola, ${nombre}. su retiro es`;
    }
}
        document.getElementById('nombre').value = "";
        document.getElementById('cantidad').value = "";
}




