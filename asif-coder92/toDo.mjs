// todo app use to list the task
const tasks=[
    {
        taskId: 1,
        taskHead: "Task 1",
        taskDescription: "Design a Web app"

    },
    {
        taskId: 2,
        taskHead: "Task 2",
        taskDescription: "Build a Web app"
 
    },

    {
        taskId: 3,
        taskHead: "Task 3",
        taskDescription: "Test a Web app"

    },
]

// now we consol the entire task 
tasks.forEach((item)=>{
    console.log(item.taskHead)
    console.log(item.taskDescription)
})

// this function will remove a task based on id
const delTodo=(id)=>{
       const index= tasks.findIndex((tasks)=> tasks.id===id)  //finfindex method receives a call back function, findIndex will go through the tasks and find the id and return its index
       tasks.splice(index,1) // the splice will remove one item/task from the task based on the given id in calling function i.e delTodo()
    

}
delTodo(2) 

console.log(tasks);
