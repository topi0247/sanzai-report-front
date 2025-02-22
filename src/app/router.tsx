import { Route, Routes } from "react-router";
import { Report } from "@/app/routes/report/root";

export const AppRouting = () => {
  return (
    <Routes>
      <Route index element={<Report />} />
    </Routes>
  );
};
