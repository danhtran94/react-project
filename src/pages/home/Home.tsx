import css from "styled-jsx/css";

export const Home = () => {
  return (
    <div className="page-home">
      Home page
      <style jsx>{styles}</style>
    </div>
  );
};

const styles = css`
  .page-home {
    @apply p-10;
    @apply border border-black border-dotted;
  }
`;
