import { ReactNode } from "react";
type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
};

function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-2 transition-all bg-emerald-500 hover:bg-emerald-400 text-white justify-center p-1.5 rounded-md font-medium"
    >
      {children}
    </button>
  );
}

export default Button;
