import { css } from "@linaria/core";
import { Outlet } from "react-router-dom";
import { Page } from "@src/pages/Page";

export function LayoutMain() {
  return (
    <div className={clLayoutMain}>
      <div className={clLayoutSidebar}>
        <div className={clSidebarHeader}></div>
      </div>
      <div className={clLayoutBody}>
        <div className={clLayoutHeader}>Layout Header</div>
        <Page className={clLayoutPage}>
          <Outlet />
        </Page>
      </div>
    </div>
  );
}

var clLayoutMain = css`
  @apply flex flex-row;
  @apply h-screen overflow-y-hidden min-w-xs;
`;

/* clLayoutMain & */
var clLayoutSidebar = css`
  @apply bg-blue-100;
`;

/* clLayoutSidebar & */
var clSidebarHeader = css`
  @apply h-12 max-h-12 min-w-12;
  @apply md:(h-16 max-h-16 min-w-16);
  @apply bg-blue-200;
`;

/* clLayoutMain & */
var clLayoutBody = css`
  @apply flex flex-col;
  /* expand available width */
  @apply flex-grow;
`;

/* clLayoutBody & */
var clLayoutHeader = css`
  @apply h-12 min-h-12 max-h-12;
  @apply md:(h-16 min-h-16 max-h-16);
  @apply bg-blue-200;
`;

/* clLayoutBody & */
var clLayoutPage = css`
  /* expand available height */
  @apply flex-grow;
`;
