import React from "react";
import { notFound } from "next/navigation";
export const dynamicParams = true;
const fetchTodo = async (todoId) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`
  );
  const todo = await res.json();
  console.log("todos", todo);
  return todo;
};

export default async function TodoPage({ params: { todoId } }) {
  const todo = await fetchTodo(todoId);
  if (!todo.id) return notFound();
  return (
    <div className="p-10 bg-yellow-200 bottom-2 m-2 shadow-lg">
      <p>
        #{todo.id}: {todo.title}
      </p>
      <p>Completed: {todo.completed ? "Yes" : "No"}</p>
      <p className="border-t border-black mt-5 text-right">
        By User: {todo.userId}
      </p>
    </div>
  );
}

export async function generateStaticParams() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
  const todos = await res.json();
  console.log("todos", todos);

  // For this expo only, we are prebuilding the first 10 pages to avoid being rate limited by the DEMO API
  const trimmedTodos = todos.splice(0, 10);
  return trimmedTodos.map((todo) => ({ todo: toString(todo.id) }));
}
