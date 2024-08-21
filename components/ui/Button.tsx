"use client";
import { FC, ButtonHTMLAttributes, ReactNode } from "react";
import { Spinner } from "./Spinner";
import { classNames } from "@/utils/classNames";

export type ButtonVariant = "primary";
// | "secondary"
// | "tertiary"
// | "quarternary"
// | "quinary"
// | "sexagenary";

type ButtonProps = ButtonHTMLAttributes<
  HTMLButtonElement | HTMLButtonElement
> & {
  className?: string;
  label: string;
  labelClasses?: string;
  loading?: boolean;
  variant: ButtonVariant;
};

const buttonClasses = {
  primary:
    "border w-full tracking-widest uppercase text-primary font-light text-xs border-primary bg-transparent hover:bg-primary hover:text-white transition-all  px-2 white py-3",
  // primary:
  //   "bg-theme-primary text-[14px] rounded-xl text-white font-medium hover:opacity-80 active:opacity-80 ",
  // secondary:
  //   "border border-theme-gray-primary text-[14px] text-black font-medium bg-white hover:bg-opacity-50 active:bg-theme-green-secondary disabled:bg-black disabled:bg-opacity-5 disabled:text-gray-secondary-gray",
  // tertiary:
  //   "border border-theme-gray-primary text-[14px] text-black font-semibold bg-red-500 hover:bg-opacity-50 active:bg-theme-green-secondary disabled:bg-black disabled:bg-opacity-5 disabled:text-gray-secondary-gray",
  // quarternary: "border rounded-full border-black text-black font-semibold",
  // quinary:
  //   "border rounded-full border-[#D65D5A] bg-white text-sm font-semibold text-[#D65D5A]",
  // sexagenary:
  //   "border rounded-full border-palette-companyGreen bg-white text-sm font-semibold text-palette-companyGreen",
};

const Button: FC<ButtonProps> = ({
  className = "",
  disabled,
  label,
  labelClasses = "",
  loading = false,
  onClick,
  type,
  variant,
}) => {
  return (
    <button
      id={label}
      disabled={disabled}
      onClick={onClick}
      className={classNames(
        "h-10 px-10 ",
        buttonClasses[variant],
        `${className}`
      )}
      type={type}
    >
      {loading ? (
        <div className="flex w-full px-10 justify-center">
          <Spinner />
        </div>
      ) : (
        <div className="flex w-full items-center justify-center gap-x-3">
          <span className={classNames(labelClasses)}>{label}</span>
        </div>
      )}
    </button>
  );
};

export { Button };
