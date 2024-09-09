import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default async function SignInPage() {
  return (
    <section id="error" className="bg-gray-200 p-4 h-screen pb-44">
      <div className="w-full pt-28 flex justify-center flex-col">
        <h4 className="text-primary text-2xl md:text-4xl font-light text-center">
          Sign in disabled.
        </h4>
      </div>
      <Link href="/" className="flex my-8">
        <Button
          className="bg-transparent max-w-[400px] mx-auto "
          label="Back to Home"
          variant="primary"
        />
      </Link>
    </section>
  );
}
