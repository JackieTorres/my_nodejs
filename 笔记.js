fetch('/todos', 
    {
        method: "POST",
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify({title:"大葱",completed: false}) 
     })


fetch('/todos', {
        method: 'DELETE',
    }) 