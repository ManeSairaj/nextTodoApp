import { ReactNode } from "react";
import clsx from "clsx";
import { FiMenu } from "react-icons/fi";

interface buttonProps {
  type?: "button" | "submit" | "reset";
  text: string | ReactNode;
  className?: string;
  onClick?: () => void;
  actionButton?: boolean;
}

const Button = ({
  text,
  type,
  className,
  onClick,
  actionButton,
}: buttonProps) => {
  return (
    <>
      <div className="">
        <button
          onClick={onClick}
          type={type}
          className={clsx(
            actionButton &&
              "bg-orange-600 rounded-full w-full h-full px-[.25rem] py-[0.2rem] text-white flex hover:opacity-100",
            `bg-orange-600 hover:shadow-xl shadow-[#ff4d00] h-full px-4 text-white ${className} rounded-r-full uppercase hover:bg-gradient-to-r tracking-wider font-semibold`
          )}
        >
          {text}
        </button>
      </div>
    </>
  );
};

export default Button;
