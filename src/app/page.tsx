"use client";
import { useMutation, useQuery } from "convex/react";
import Image from "next/image";
import { useState } from "react";
import { api } from "../../convex/_generated/api";
import headerImage from "../../public/images/kurt-and-cecile-proposal.jpg";

export default function Home() {
  const [text, setText] = useState("");
  const createTodo = useMutation(api.todos.createTodo);
  const todos = useQuery(api.todos.getTodos);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 relative">
      <Image
        alt="kurt-and-cecile"
        src={headerImage}
        layout="fill"
        placeholder="blur"
        objectFit="cover"
        objectPosition="bottom"
        priority
      />
      <div className="z-10  max-w-5xl w-full flex flex-col items-start justify-between  text-sm lg:flex">
        <header className="bg-black flex content-center justify-center mb-8 bg-opacity-30 rounded-xl">
          <h1 className="p-8 text-4xl font-extrabold mt-0 leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Kurt and Cecile
          </h1>
        </header>

        <div className="flex flex-col gap-4 mb-8">
          {todos?.map((todo) => {
            return (
              <div className="bg-black bg-opacity-25 p-4" key={todo._id}>
                {todo.text}
              </div>
            );
          })}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createTodo({ text });
            setText("");
          }}
          className="w-52"
        >
          <textarea
            className="text-black rounded w-full flex flex-col p-2"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="relative mt-5 inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded w-full hover:bg-white group">
            <span className="w-48 h-48 rounded rotate-[-40deg] bg-amber-500 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
              Say something nice
            </span>
          </button>
        </form>
      </div>
    </main>
  );
}
