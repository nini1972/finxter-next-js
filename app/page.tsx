import React from 'react'

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const BlockbusterChat = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data_list: Todo[] = await res.json()

  return (
    <div>
      <h1 className='font-bold'>Blockbuster Chat</h1>
      <ul>
        {data_list.map(todo => (
          <li key={todo.id}>
            {todo.id}. {todo.title}.{" "}
            {todo.completed? "Completed" : "Not Completed"}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BlockbusterChat;
 