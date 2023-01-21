let form = document.getElementById('form');
let response = document.getElementById('shape');

form.addEventListener('submit', submitForm);

function submitForm(event){
    event.preventDefault();

    let data = new FormData(form);
    
    let text = data.get('text');
    let size = data.get('size');

    //add checkbox input
 
    let responseElement = document.createElement('div');
    shape.classList.add("shape");
    responseElement.innerText = text;
    
    createDiv.style.height = number + 'px';
    createDiv.style.wideth = number + 'px';
    createDiv.style.lineHeight = number + 'px';

    


}

//new div always have class = shape
// new div will display text from "text" input
//new div will have width, height, line-height
//css properties set to "size" input value with "px"
//new div have additional css class circle if "make circle" checked