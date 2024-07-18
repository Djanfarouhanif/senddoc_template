const button = document.querySelector('#searchButton');
const loader = document.querySelector(".loader");
let isRunning = false;

button.addEventListener('click', (event)=>{
    event.preventDefault();

    if(!isRunning){
        isRunning = true;
        loader.style.display = 'block';

        setTimeout(()=>{
            loader.style.display = 'none';
            isRunning = false
        }, 3000
               
        )
    }
   
})