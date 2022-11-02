import { css } from "@linaria/core";
import { Outlet } from "react-router-dom";
import { Page } from "@src/pages/Page";

export function LayoutMain() {
  return (
    <div className={styles.base}>
      <div className={styles.sidebar}>
        <div className={styles.sidebarHeader}></div>
      </div>
      <div className={styles.body}>
        <div className={styles.header}>Layout Header</div>
        <Page className={styles.page}>
          <Outlet />
        </Page>
      </div>
    </div>
  );
}

const styles = {
  base: css`
    @apply flex flex-row;
    @apply h-screen overflow-y-hidden min-w-xs;
  `,
  sidebar: css`
    @apply bg-blue-100;
  `,
  sidebarHeader: css`
    @apply h-12 max-h-12 min-w-12;
    @apply md:(h-16 max-h-16 min-w-16);
    @apply bg-blue-200;
  `,
  body: css`
    @apply flex flex-col;
    /* expand available width */
    @apply flex-grow;
  `,
  header: css`
    @apply h-12 min-h-12 max-h-12;
    @apply md:(h-16 min-h-16 max-h-16);
    @apply bg-blue-200;
  `,
  page: css`
    /* expand available height */
    @apply flex-grow;
  `,
};
