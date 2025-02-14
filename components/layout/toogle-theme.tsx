import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";

export const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      size="sm"
      variant="ghost"
      className="relative"
    >
      <div className="flex gap-2 dark:hidden">
        <Moon size={22} />
        <span className="block lg:hidden"> Dark </span>
      </div>

      <div className="dark:flex gap-2 hidden">
        <Sun size={22} />
        <span className="block lg:hidden">Light</span>
      </div>

      <span className="sr-only">Select Theme</span>
    </Button>
  );
};
