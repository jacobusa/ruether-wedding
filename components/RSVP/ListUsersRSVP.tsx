"use client";
/* eslint-disable @typescript-eslint/no-misused-promises */
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { CheckIcon } from "../assets/CheckIcon";
import { sendRSVPLink } from "@/server/actions";
import { FC, useState } from "react";
import { RSVPSubmitButtom } from "./RSVPSubmitButton";
interface ListUsersRSVPProps {
  name: string;
}
export const ListUsersRSVP: FC<ListUsersRSVPProps> = ({ name }) => {
  const data = useQuery(api.users.getUsersByName, { name });
  const [rsvpSubmittedUserId, setRsvpSubmittedUserId] = useState<string>();
  return (
    <div className="text-secondary">
      {data && data.length === 0 && (
        <p>No reservations found, please try again.</p>
      )}
      {data && data.length > 0 && (
        <div>
          <p className="text-secondary underline">Reservations Found</p>
          <ul className="mt-4">
            {data?.map((user) => (
              <li key={user._id}>
                <div className="flex justify-between content-center">
                  <p className="my-auto">{`${user.firstName} ${user.lastName}`}</p>
                  {rsvpSubmittedUserId === user._id ? (
                    <div className="flex basis-1/2  justify-center content-center">
                      <div className="my-auto">
                        <CheckIcon />
                      </div>
                      <span className="my-auto text-xs  text-secondary ">
                        RSVP Sent to: {user.email}
                      </span>
                    </div>
                  ) : (
                    <form
                      action={async (e) => {
                        await sendRSVPLink(e);
                        setRsvpSubmittedUserId(user._id);
                      }}
                    >
                      <input
                        type="text"
                        name="id"
                        className="hidden"
                        defaultValue={user._id}
                      />
                      <RSVPSubmitButtom />
                    </form>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
