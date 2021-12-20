import css from "styled-jsx/css";
import clsx from "clsx";
import { Outlet } from "react-router-dom";
import { Page } from "@src/pages/Page";

export function LayoutMain() {
  return (
    <div className={clsx(c, "layout-main")}>
      <div className={clsx(c, "layout-sidebar")}>
        <div className={clsx(c, "sidebar-header")}></div>
      </div>
      <div className={clsx(c, "layout-body")}>
        <div className={clsx(c, "layout-header")}>Layout Header</div>
        <Page className={clsx(c, "layout-page")}>
          <Outlet />
        </Page>
      </div>
      {styles}
    </div>
  );
}

const { className: c, styles } = css.resolve`
  .layout-main {
    @apply flex flex-row;
    @apply h-screen overflow-y-hidden min-w-xs;

    /* sidebar */
    & .layout-sidebar {
      @apply bg-blue-100;

      & .sidebar-header {
        @apply h-12 max-h-12 min-w-12;
        @apply md:(h-16 max-h-16 min-w-16);
        @apply bg-blue-200;
      }
    }

    /* body */
    & .layout-body {
      @apply flex flex-col;
      @apply flex-grow; /* expand available width */

      & .layout-header {
        @apply h-12 min-h-12 max-h-12;
        @apply md:(h-16 min-h-16 max-h-16);
        @apply bg-blue-200;
      }

      & .layout-page {
        @apply flex-grow; /* expand available height */
      }
    }
  }
`;
