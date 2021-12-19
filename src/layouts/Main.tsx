import css from "styled-jsx/css";
import { Outlet, useLocation } from "react-router-dom";

export function LayoutMain() {
  // const loc = useLocation();

  return (
    <div className="layout-main">
      <div className="layout-header">Layout Main</div>
      <Outlet />
      <style jsx>{styles}</style>
    </div>
  );
}

const styles = css`
  .layout-main {
    @apply p-4;
    @apply border border-dotted border-black;
  }

  .layout-header {
    @apply mb-4;
  }
`;
