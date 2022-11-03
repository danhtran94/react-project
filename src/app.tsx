import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { LayoutMain } from "@src/layouts/main";
import { Home } from "@src/pages/home";

import { useDispatch } from "@src/store/hooks";

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {});

  return (
    <Routes>
      <Route path="/" element={<LayoutMain />}>
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  );
}
