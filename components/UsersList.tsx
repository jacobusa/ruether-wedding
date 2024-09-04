"use client";
import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import * as React from "react";
import { useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { Alert } from "./ui/Alert";
import Link from "next/link";
import { Id } from "@/convex/_generated/dataModel";

interface UsersListProps {}
// TODO make sure non-admin users can't see this
export const UsersList: React.FC<UsersListProps> = () => {
  const [deleteModal, setDeleteModal] = useState<{
    open: boolean;
    id?: Id<"users">;
  }>({ open: false });
  const usersQuery = useQuery(api.users.getUsers);
  const deleteUser = useMutation(api.users.deleteUser);
  const confirmDeleteUser = async () => {
    if (!deleteModal.id) return;
    await deleteUser({ id: deleteModal.id });
    setDeleteModal({ open: false });
  };
  return (
    <div className="relative overflow-x-auto rounded-xl">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-200 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              RSVP &apos; d
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {usersQuery?.map((user) => (
            <tr key={user._id} className="bg-white border-b  ">
              <th scope="row" className="px-6 py-4 ">
                {user.didRSVP ? (
                  <div>
                    ✅
                    <span className="ml-4">
                      {new Date(user.rsvpTime ?? "").toDateString()}
                    </span>
                  </div>
                ) : (
                  <>❌</>
                )}
              </th>
              <td className="px-6 py-4">{`${user.firstName} ${user.lastName}`}</td>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4 space-x-4">
                <button>
                  <IoTrashOutline
                    onClick={() => setDeleteModal({ open: true, id: user._id })}
                    className="text-red-500"
                  />
                </button>
                <Link href={`/users/${user._id}`}>
                  <button>
                    <FaEdit />
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Alert
        open={deleteModal.open}
        title="Are you sure you want to delete this user?"
        body="This will permanently delete this user from the system"
        cancelButtonText="Calcel"
        confirmButtonText="Delete"
        onConfirm={confirmDeleteUser}
        onCancel={() => setDeleteModal({ open: false })}
      />
    </div>
  );
};
