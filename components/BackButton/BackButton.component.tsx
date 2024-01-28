import { LeftArrow } from "@/assets/svgs/LeftArrow";
import Link from "next/link";

export const BackButton: React.FC = () => {
  return (
    <Link href="/" data-testid='backbutton-testid'>
      <div className="fixed left-5 top-5 bg-gray-900 cursor-pointer w-8 h-8 rounded-full flex items-center justify-center">
        <LeftArrow />
      </div>
    </Link>
  );
};
