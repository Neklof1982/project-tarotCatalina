"use client";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const [mounted, setMounted] = React.useState(false);

  // Solo se renderiza en el cliente
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Evita el desajuste 
    return <div />;
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}