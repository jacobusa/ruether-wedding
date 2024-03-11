"use client";
import { useMutation, useQuery } from "convex/react";
import { useState } from "react";
import { api } from "../../convex/_generated/api";
import { Hero } from "../../components/Hero";
import headerImage from "../../public/images/kurt-and-cecile-proposal.jpg";
import flowerImage from "../../public/images/flower.png";
import ovalImage from "../../public/images/cecile-kurt-wedding-oval.png";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden font-bitter">
      {/* <HeroImage /> */}
      <div className="fixed  w-full h-screen -z-10 flex justify-center">
        <Hero />
        <header className="flex flex-col z-10 content-center justify-center">
          <h2 className="uppercase text-xs tracking-widest text-gray-300 self-center">
            we are getting married
          </h2>
          <h1 className="tracking-tight text-gray-200 my-10 md:text-9xl lg:text-9xl font-brush">
            Kurt <strong className="font-medium mx-2">&</strong> Cecile
          </h1>
          <div className="flex justify-center content-center">
            <div className="bg-orange-200/35 w-full h-[1px] self-center" />
            <h3 className="uppercase text-gray-300 w-full text-center tracking-wide">
              Save the Date
            </h3>
            <div className="bg-orange-200/35 w-full h-[1px] self-center" />
          </div>
          <p className="self-center mt-10 font-extralight text-gray-300 text-3xl py-4 px-8">
            August 28th 2025
          </p>
          <a
            href="google.com"
            target="_blank"
            className="self-center mt-10 font-thin text-gray-300 cursor-pointer text-3xl border-2 border-orange-200/35 py-4 px-8 z-50"
          >
            See Our Registry
          </a>
        </header>
      </div>

      <section className="h-[100vw] translate-y-[100vh] bg-gray-100">
        <div className="w-full pt-28 flex justify-center flex-col">
          <Image
            alt="wedding flower"
            className="w-24 h-11 self-center"
            src={flowerImage}
          />
          <h4 className="text-gray-800 text-5xl font-light text-center">
            Our Story
          </h4>
          <p className="max-w-[1000px] text-gray-500 text-center font-light py-4 self-center tracking-wide">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
            repellendus totam modi voluptas cum commodi aspernatur ut minima a,
            excepturi odit vel, fuga, suscipit dolores possimus quam
            reprehenderit voluptates dolor. Perferendis totam eius aut molestias
          </p>
          <div className="mt-10 self-center w-full flex space-x-10 px-7 max-w-[1300px]">
            <div>
              <h5 className="text-gray-800 text-4xl mb-7">Cecile Badenhorst</h5>
              <p className="text-gray-500 font-light text-sm leading-6 tracking-wide text-right">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Cumque, doloremque earum fugit voluptatem repudiandae unde
                necessitatibus. Recusandae, itaque praesentium voluptatibus modi
                veritatis reiciendis ea ducimus, consectetur delectus, excepturi
                omnis eaque.
              </p>
            </div>
            <Image alt="Cecile and kurt oval photo" src={ovalImage} />
            <div className="mt-32">
              <h5 className="text-gray-800 text-4xl mb-7">Kurt Ruether</h5>
              <p className="text-gray-500 font-light text-sm leading-6 tracking-wide">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Cumque, doloremque earum fugit voluptatem repudiandae unde
                necessitatibus. Recusandae, itaque praesentium voluptatibus modi
                veritatis reiciendis ea ducimus, consectetur delectus, excepturi
                omnis eaque.
              </p>
            </div>
          </div>
        </div>
      </section>
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
