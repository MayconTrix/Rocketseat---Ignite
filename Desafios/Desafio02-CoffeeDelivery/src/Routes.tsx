import { Route, Routes } from "react-router-dom";
import { CompleteOderPage } from "./pages/CompleteOrder";
import { HomePage } from "./pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/completeOrder" element={<CompleteOderPage />} />
    </Routes>
  );
}
