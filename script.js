const input = document.querySelector('input');
const button1 = document.querySelector('.add > button');

button1.addEventListener('click', addlist);
input.addEventListener('keyup', (event) => {
    (event.keyCode === 13 ? addlist(event) : null)
})

function addlist(e){
    const pending = document.querySelector('.pending');
    const completed = document.querySelector('.completed');

    const newLi = document.createElement('li');
    const checkbtn = document.createElement('button');
    const delbtn = document.createElement('button');

    checkbtn.innerHTML = '<i class="fa fa-check"></i>';
    delbtn.innerHTML = '<i class="fa fa-trash"></i>';


    if(input.value !== ''){
        newLi.textContent = input.value;
        input.value = '';
        pending.appendChild(newLi);
        newLi.appendChild(checkbtn);
        newLi.appendChild(delbtn);
    }

    checkbtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
        completed.appendChild(parent);
        checkbtn.style.display = 'none';
    });

    delbtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove(); 
    });
}