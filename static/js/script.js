const button = document.querySelector('#searchButton');
const loader = document.querySelector(".loader");


button.addEventListener('click', (event)=>{
    event.preventDefault();
    setInterval(
            loader.style.display = 'block'
    )
})