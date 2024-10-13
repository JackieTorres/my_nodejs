// 获取DOM元素
// const addInput = document.getElementById('addInput');
const viewInput = document.getElementById("viewInput");
const deleteInput = document.getElementById("deleteInput");
const output = document.getElementById("output");

// 增加一个todo
document.getElementById("addTodo").addEventListener("click", function () {
  //   const todoText = addInput.value.trim();
  if (document.getElementById("addInput").value.trim() !== "") {
    fetch("http://localhost:8080/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: todoText, completed: false }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Todo added:", data);
        updateOutput();
      })
      .catch((error) => {
        console.error("Error adding todo:", error);
        output.value = "添加失败，请检查输入或服务器状态";
      });
    addInput.value = "";
  }
});

// 查看一个todo
document.getElementById("viewTodo").addEventListener("click", function () {
  const todoId = parseInt(viewInput.value.trim());
  fetch(`http://localhost:8080/todos/${todoId}`)
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        output.value = `ID: ${data.id}, Todo: ${data.title}, Completed: ${data.completed}`;
      } else {
        output.value = `找不到ID为${todoId}的todo`;
      }
    })
    .catch((error) => {
      console.error("Error viewing todo:", error);
      output.value = "查看失败，请检查输入或服务器状态";
    });
  viewInput.value = "";
});

// 删除一个todo
document.getElementById("deleteTodo").addEventListener("click", function () {
  const todoId = parseInt(deleteInput.value.trim());
  fetch(`http://localhost:8080/todos/${todoId}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.status === 204) {
        updateOutput();
        output.value = "删除成功";
      } else {
        output.value = "删除失败，请检查输入或服务器状态";
      }
    })
    .catch((error) => {
      console.error("Error deleting todo:", error);
      output.value = "删除失败，请检查输入或服务器状态";
    });
  deleteInput.value = "";
});

// 查看所有todos
document.getElementById("allTodos").addEventListener("click", function () {
  fetch("http://localhost:8080/todos")
    .then((response) => response.json())
    .then((data) => {
      let outputText = "Todos:\n";
      data.forEach((todo) => {
        outputText += `ID: ${todo.id}, Todo: ${todo.title}, Completed: ${todo.completed}\n`;
      });
      output.value = outputText;
    })
    .catch((error) => {
      console.error("Error fetching todos:", error);
      output.value = "获取todos失败，请检查服务器状态";
    });
});

// 更新输出
function updateOutput() {
  fetch("http://localhost:8080/todos")
    .then((response) => response.json())
    .then((data) => {
      let outputText = "Todos:\n";
      data.forEach((todo) => {
        outputText += `ID: ${todo.id}, Todo: ${todo.title}, Completed: ${todo.completed}\n`;
      });
      output.value = outputText;
    })
    .catch((error) => {
      console.error("Error fetching todos:", error);
      output.value = "获取todos失败，请检查服务器状态";
    });
}
