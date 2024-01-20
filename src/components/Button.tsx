import { ReactNode } from "react";
type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
};

function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full flex items-center gap-2 transition-all bg-sky-500 hover:bg-sky-600 text-white justify-center p-1.5 rounded-md font-medium"
    >
      {children}
    </button>
  );
}

export default Button;
