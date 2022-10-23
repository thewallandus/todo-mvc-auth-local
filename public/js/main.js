const deleteBtn = document.querySelectorAll('.del')
const todoItem = document.querySelectorAll('span.not')
const todoComplete = document.querySelectorAll('span.completed')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteTodo)
})
// creates an array of all the deleteButtons on the page
// puts an eventlistener on all of them
// runs the deleteTodo

Array.from(todoItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})
// creates an array of all the todoItems on the page
// puts an eventListener on all of them
// runs the markComplete

Array.from(todoComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})

async function deleteTodo(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/deleteTodo', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        // makes a fetch request which is the simplest way to talk to a server
        // delete request
        const data = await response.json()
        // we're awaiting the data that comes back
        console.log(data)
        location.reload()
        // then we reload the page once the request has been made
    }catch(err){
        console.log(err)
        // console logs if there are any errors
    }
}

async function markComplete(){
    const todoId = this.parentNode.dataset.id
    // gets the id from the list up above
    try{
        const response = await fetch('todos/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        // gets the data
        console.log(data)
        location.reload()
        // reloads the page
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}
// markIncomplete function