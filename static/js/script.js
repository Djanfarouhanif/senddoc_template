const button = document.querySelector('#searchButton');
const loader = document.querySelector(".loader");
const table = document.querySelector('table')
let isRunning = false;

button.addEventListener('click', (event)=>{
    event.preventDefault();

    if(!isRunning){
        isRunning = true;
        loader.style.display = 'block';
        table.style.display = 'none'

        setTimeout(()=>{
            loader.style.display = 'none';
            table.style.display = 'block'
            isRunning = false
        }, 3000
               
        )
    }
   
})