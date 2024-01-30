"use client";
import { useMutation, useQuery } from "convex/react";
import Image from "next/image";
import { useState } from "react";
import { api } from "../../convex/_generated/api";

export default function Home() {
  const [text, setText] = useState("");
  const createTodo = useMutation(api.todos.createTodo);
  const todos = useQuery(api.todos.getTodos);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full flex flex-col items-center justify-between font-mono text-sm lg:flex">
        <div className="flex flex-col gap-4">
          {todos?.map((todo) => {
            return <div key={todo._id}>{todo.text}</div>;
          })}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createTodo({ text });
            setText("");
          }}
        >
          <input
            className="text-black flex flex-col mt-10"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button>create</button>
        </form>
      </div>
    </main>
  );
}
