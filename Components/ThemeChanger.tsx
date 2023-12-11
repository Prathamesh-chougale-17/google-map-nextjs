// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun } from "lucide-react";
import { SunMoon } from "lucide-react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <button
        className="dark:block hidden p-1 rounded-full bg-white dark:bg-black"
        onClick={() => setTheme("light")}
      >
        <SunMoon size={30} />
      </button>
      <button
        className="dark:hidden p-1 rounded-full"
        onClick={() => setTheme("dark")}
      >
        <Sun size={30} />
      </button>
    </div>
  );
};

export default ThemeSwitcher;
