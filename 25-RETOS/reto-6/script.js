const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

//fill listener
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for(const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

//Drag Funcion 
function dragStart() {
   /**console.log(start) */
   this.className += ' hold';
   setTimeout(() =>(this.className='invisible'), 3);  /**Aqui se cumple el sincronismo Es la función que se ejecutará después de un determinado tiempo */      
    
}
//ocurre cuando el usario ha terinado de arrastras el elemento
function dragEnd() {
    this.className='fill';
}
// Ocurre cuando un elemeto arrastrado esta sobre el destino de la colocacion
function dragOver(e) {
    e.preventDefault();
    //console.log('over');

}
// Ocurre cuando el elemento arrastrado ingresa al destino de la gota
function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
    //console.log('enter');
}

//Ocurre cuando el elemento arrastrado abandona el destino de la colocacion
function dragLeave() {
    this.className = 'empty';
    //console.log('leave'); 
}

// Ocurre cuando el elemento arrastrado se colcoa en el destino de la gota
function dragDrop() {
    this.className ='empty';
    this.append(fill);
    //console.log('drop');

}