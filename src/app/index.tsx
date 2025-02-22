import { AppProvider } from "./provider";
import { AppRouting } from "./router";

export const AppRouter = () => {
  return (
    <AppProvider>
      <AppRouting />
    </AppProvider>
  );
};
