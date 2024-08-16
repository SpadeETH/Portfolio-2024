import { cn } from "@/lib/utils";
import { CSSProperties, FC, ReactNode } from "react";

interface AnimatedShinyTextProps {
  children: ReactNode;
  className?: string;
  shimmerWidth?: number;
}

const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
  children,
  className,
  shimmerWidth = 100,
}) => {
  return (
    <p
      style={{ "--shimmer-width": `${shimmerWidth * 2}px` } as CSSProperties} // Doubling the shimmer width
      className={cn(
        "mx-auto max-w-md text-vibrant-orange dark:text-vibrant-orange",
        "animate-shimmer bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shimmer-width)_100%] [transition:background-position_0.8s_cubic-bezier(.6,.6,0,1)_infinite]", // Faster shimmer movement

        // Shimmer gradient with extreme contrast
        "bg-gradient-to-r from-black via-yellow-500 via-50% to-black dark:from-white dark:via-yellow-500 dark:to-white",
        "hover:text-vibrant-orange-hover",

        className
      )}
    >
      {children}
    </p>
  );
};

export default AnimatedShinyText;
