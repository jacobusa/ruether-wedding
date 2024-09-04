"use client";
import { Fragment, useRef } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { classNames } from "@/utils/classNames";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export type IAlert = {
  open: boolean;
  onConfirm: () => void;
  onCancel?: () => void;
  confirmButtonText: string;
  cancelButtonText: string;
  title: string;
  body: string;
  confirmButtonClassNames?: string;
};

const Alert = ({
  body,
  onCancel,
  cancelButtonText,
  onConfirm,
  confirmButtonText,
  title,
  open,
  confirmButtonClassNames,
}: IAlert) => {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={() => null}
      >
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white px-2 py-3 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="sm:flex sm:items-start space-x-4">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 -translate-y-2 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <ExclamationTriangleIcon
                      aria-hidden="true"
                      className="h-6 w-6 text-red-600"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <DialogTitle
                      as="h3"
                      className="text-xl font-medium leading-6 text-gray-900 "
                    >
                      {title}
                    </DialogTitle>
                    <div className="mt-3">
                      <p className="text-sm text-gray-500">{body}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex space-x-3">
                  <button
                    type="button"
                    className="ml-auto inline-flex w-32 justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-xs"
                    onClick={onCancel}
                    ref={cancelButtonRef}
                  >
                    {cancelButtonText}
                  </button>
                  <button
                    type="button"
                    className={classNames(
                      "inline-flex w-32 justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-base font-medium shadow-sm hover:bg-theme-green-senary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:text-xs",
                      confirmButtonClassNames
                    )}
                    onClick={onConfirm}
                  >
                    {confirmButtonText}
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export { Alert };
