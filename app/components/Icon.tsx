import { ReactNode } from "react";

interface IconProps {
  icon: ReactNode;
}

const Icon = ({ icon }: IconProps) => {
  return (
    <div className="bg-pink-500 p-3 rounded-[10px] w-fit mb-4">{icon}</div>
  );
};

export default Icon;
