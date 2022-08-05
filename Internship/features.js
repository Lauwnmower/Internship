// hover logo black border
let getlogo = document.getElementById('logo');

getlogo.addEventListener('mouseenter', logo);
getlogo.addEventListener('mouseleave', logo);

function logo(e){
    let event = e.type;
    if (event == 'mouseenter'){
        getlogo.style.border = '1px solid black';
    } else if (event == 'mouseleave'){
        getlogo.style.border = '#FAFAFA';
    }
}


