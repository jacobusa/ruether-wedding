/* eslint-disable @next/next/no-img-element */
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/D4j1PGc4PBf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
// import { label } from "@/components/ui/label";
// import { input } from "@/components/ui/input";
// import { button } from "@/components/ui/button";
// import { textarea } from "@/components/ui/textarea";

export default function Component() {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <HeartIcon className="h-6 w-6" />
              <span className="">Wedding Memories</span>
            </Link>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href="#"
              >
                <UploadIcon className="h-4 w-4" />
                Upload Photos
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <GalleryThumbnailsIcon className="h-4 w-4" />
                Photo Gallery
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <CalendarIcon className="h-4 w-4" />
                Event Details
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <Link className="lg:hidden" href="#">
            <HeartIcon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex items-center">
            <h1 className="font-semibold text-lg md:text-2xl">Upload Photos</h1>
          </div>
          <div className="border shadow-sm rounded-lg">
            <form className="flex flex-col gap-4 p-4">
              <div className="space-y-2">
                <label htmlFor="file">Select Photos</label>
                <input id="file" multiple type="file" />
              </div>
              <button className="w-full" type="submit">
                Upload
              </button>
            </form>
          </div>
          <div className="flex items-center">
            <h1 className="font-semibold text-lg md:text-2xl">Photo Gallery</h1>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 w-full max-w-2xl mx-auto">
            <img
              alt="Wedding Photo"
              className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
              height={600}
              src="/placeholder.svg"
              width={600}
            />
            <img
              alt="Wedding Photo"
              className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
              height={600}
              src="/placeholder.svg"
              width={600}
            />
            <img
              alt="Wedding Photo"
              className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
              height={600}
              src="/placeholder.svg"
              width={600}
            />
            <img
              alt="Wedding Photo"
              className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
              height={600}
              src="/placeholder.svg"
              width={600}
            />
          </div>
          <div className="flex items-center">
            <h1 className="font-semibold text-lg md:text-2xl">Event Details</h1>
          </div>
          <div className="border shadow-sm rounded-lg">
            <form className="flex flex-col gap-4 p-4">
              <div className="space-y-2">
                <label htmlFor="date">Date</label>
                <input id="date" type="date" />
              </div>
              <div className="space-y-2">
                <label htmlFor="location">Location</label>
                <input id="location" type="text" />
              </div>
              <div className="space-y-2">
                <label htmlFor="description">Description</label>
                <textarea id="description" />
              </div>
              <button className="w-full" type="submit">
                Save
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}

function CalendarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function GalleryThumbnailsIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="14" x="3" y="3" rx="2" />
      <path d="M4 21h1" />
      <path d="M9 21h1" />
      <path d="M14 21h1" />
      <path d="M19 21h1" />
    </svg>
  );
}

function HeartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function UploadIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}
