import { Route, Routes } from "react-router";
import { Report } from "@/app/routes/report/root";
import { ReportIndex } from "./routes/report";

export const AppRouting = () => {
  return (
    <Routes>
      <Route element={<Report />} >
        <Route index element={<ReportIndex />} />
      </Route>
    </Routes>
  );
};
