import { ThemeProvider } from "@/components/theme-provider";
import { Spinner } from "@/components/ui/spinner";
import { Suspense } from "react";
import { BrowserRouter } from "react-router";

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <Suspense fallback={<Spinner />}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>{children}</BrowserRouter>
      </ThemeProvider>
    </Suspense>
  );
};
