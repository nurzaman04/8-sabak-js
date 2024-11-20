const input=document.querySelector('#input-todo')
const add=document.getElementById('add')
const ulTag=document.querySelector('.list')

add.onclick=()=>{
    console.log(input.value);
    addTodo()
}

function addTodo(){
    const liTag=document.createElement('li')
    ulTag.appendChild(liTag)
    liTag.innerHTML=input.value 

    const done=document.createElement('button')
    liTag.appendChild(done)
    done.innerHTML='done'

    const imp=document.createElement('button')
    liTag.appendChild(imp)
    imp.innerHTML='imp'

    const del=document.createElement('button')
    liTag.appendChild(del)
    del.innerHTML='delete'

    done.onclick=()=>{
        liTag.style.color='red'
        liTag.style.fontSize='14px'
    }
    imp.onclick=()=>{
        liTag.style.textDecoration='line-through'
 }
 del.onclick=()=>{
     liTag.remove()

 }
    
 
}