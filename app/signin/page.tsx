import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default async function SignInPage() {
  return (
    <section>
      <Link href={"/"}>
        <Button label="Go Home" variant="primary" />
      </Link>
    </section>
  );
}
