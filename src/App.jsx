import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoCard } from "./components/TodoCard";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

function App() {
  // const todos = [
  //   { input: 'Hello! Add your first todo!', complete: true },
  //   { input: 'Get the groceries!', complete: false },
  //   { input: 'Learn how to web design', complete: false },
  //   { input: 'Say hi to gran gran', complete: true },
  // ]

  const [todos, setTodos] = useState(() => {
    const savedTasks = localStorage.getItem('todos');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [selectedTab, setSelectedTab] = useState('Open')

  function handlerAddTodo(newTodo) {
    const newTodoList = [...todos, {
      input: newTodo,
      complete: false
    }];
    setTodos(newTodoList);
    console.log(newTodo);
  }

  function handleCompleteTodo(index) {
    // update/edit/modify
    let newTodoList = [...todos];
    let completedTodo = todos[index];
    completedTodo['complete'] =true;
      newTodoList[index] = completedTodo
      setTodos(newTodoList)
    
  }

  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((val,valIndex) => {
      return valIndex !== index
    })
    setTodos(newTodoList);
  }

  useEffect(() => {
    if (!localStorage) {
      return ;
    }
    localStorage.setItem('todos',JSON.stringify(todos))
  }, [todos]);


  return (
      <>
        <Header todos={todos}/>
        <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos}/>
        <TodoList handleCompleteTodo={handleCompleteTodo} selectedTab={selectedTab} todos={todos} handleDeleteTodo={handleDeleteTodo}/>
        <TodoInput handlerAddTodo={handlerAddTodo} />
      </>
  )
}

export default App
