import { redirect } from "next/navigation";
import { FC } from "react";

interface SignInProps {
  text?: string;
}
export const SignIn: FC<SignInProps> = ({ text = "Sign In" }) => {
  return (
    <form
      action={async () => {
        "use server";
        redirect("/welcome");
      }}
    >
      <button type="submit">{text}</button>
    </form>
  );
};
