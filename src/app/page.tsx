"use client";
import { useMutation, useQuery } from "convex/react";
import { useState } from "react";
import { api } from "../../convex/_generated/api";
import headerImage from "../../public/images/kurt-and-cecile-proposal.jpg";
import { Hero } from "@/components/Hero";
import { OurStory } from "@/components/OurStory";
import { Gallery } from "@/components/Gallery";
import { Quote } from "@/components/Quote";

export default function Home() {
  return (
    <main className="overflow-hidden font-bitter">
      <Hero />
      <OurStory />
      <Gallery />
      <Quote />
    </main>
  );
}

// export default function Home() {
//   const [text, setText] = useState("");
//   const createTodo = useMutation(api.todos.createTodo);
//   const todos = useQuery(api.todos.getTodos);

//   return (
//     <main className="overflow-hidden">
//       <div id="overlay" className="bg-black/40 absolute inset-0 z-10"></div>
//       <div
//         className="relative h-[100vh] w-[100vw] overflow-hidden flex justify-center content-center bg-cover bg-center"
//         style={{ clipPath: "inset(0 0 0 0)" }}
//       >
//         <HeroImage />
//         <div className="flex min-h-screen flex-col items-center justify-between p-24 relative">
//           {/* <div className="z-10  max-w-5xl w-full flex flex-col items-start justify-between  text-sm lg:flex"> */}
//           <header className="flex z-40 content-center justify-center">
//             <h1 className="p-8 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
//               Kurt and Cecile
//             </h1>
//           </header>

//           {/* <div className="flex flex-col gap-4 mb-8">
//               {todos?.map((todo) => {
//                 return (
//                   <div className="bg-black bg-opacity-25 p-4" key={todo._id}>
//                     {todo.text}
//                   </div>
//                 );
//               })}
//             </div> */}
//           {/* <form
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 createTodo({ text });
//                 setText("");
//               }}
//               className="w-52"
//             >
//               <textarea
//                 className="text-black rounded w-full flex flex-col p-2"
//                 value={text}
//                 onChange={(e) => setText(e.target.value)}
//               />
//               <button className="relative mt-5 inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded w-full hover:bg-white group">
//                 <span className="w-48 h-48 rounded rotate-[-40deg] bg-amber-500 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
//                 <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
//                   Say something nice
//                 </span>
//               </button>
//             </form> */}
//           {/* </div> */}
//         </div>
//       </div>
//       <div className="h-[100vw]">heyyyyyyy</div>
//     </main>
//   );
// }
