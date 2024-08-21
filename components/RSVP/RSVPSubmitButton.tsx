"use client";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/Button";

export const RSVPSubmitButtom = () => {
  const { pending } = useFormStatus();
  return (
    <div className="flex justify-end">
      <Button
        loading={pending}
        label="Send RSVP Link"
        variant="primary"
        type="submit"
        aria-disabled={pending}
        disabled={pending}
      />
    </div>
  );
};
