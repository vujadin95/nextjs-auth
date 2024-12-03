import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { LockKeyhole } from "lucide-react";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1
        className={cn(
          "text-3xl font-semibold flex items-center gap-1",
          font.className
        )}
      >
        <LockKeyhole className="text-amber-400" size={50} /> Auth
      </h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
