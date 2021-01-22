window.onload = () => {
    fetch('https://serverless-geg2rexgz.vercel.app/api/meals')
    .then(response => response.json())
    .then(data => {
        const lista = document.getElementById('lista');
        const template = data.map(x => '<li>' +'nombre: '+ x.name + '<br>' + 'desc: ' + x.desc +'</li>' ).join('');
        lista.innerHTML = template;
    });
}

const generar = document.getElementById('generar');

generar.addEventListener('click', function(event){
    event.preventDefault();
});