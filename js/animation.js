// scroll reveal 
const miObserver = new IntersectionObserver(function(lista) 
{
    for (let i = 0; i < lista.length; i++) 
    {
        if (lista[i].isIntersecting == true) 
        {
            lista[i].target.classList.add('visible');
        }
    }
}, { threshold: 0.15 });

let elementosReveal = document.querySelectorAll('.reveal');
for (let i = 0; i < elementosReveal.length; i++) 
{
    miObserver.observe(elementosReveal[i]);
}


// nav links
let todosLosLinks = document.querySelectorAll('a[href^="#"]');

for (let x = 0; x < todosLosLinks.length; x++) 
{
    todosLosLinks[x].addEventListener('click', function(evento) 
    {
        evento.preventDefault();

        let idDestino = this.getAttribute('href');
        let elementoDestino = document.querySelector(idDestino);

        if (elementoDestino != null) 
        {
            let posicion = elementoDestino.offsetTop - 80;
            window.scrollTo({
                top: posicion,
                behavior: 'smooth'
            });
        }
    });
}


// monedo de click
document.addEventListener('click', function(evento) 
{
    let moneda = document.createElement('div');
    moneda.className = 'coin';
    moneda.textContent = '🪙';

    let posX = evento.clientX - 14;
    let posY = evento.clientY - 14;

    moneda.style.left = posX + 'px';
    moneda.style.top = posY + 'px';

    document.body.appendChild(moneda);


    setTimeout(function() 
    {
        moneda.remove();
    }, 1000);
});

