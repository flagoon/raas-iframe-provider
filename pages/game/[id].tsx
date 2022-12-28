import { GetStaticPropsContext, NextPageContext } from "next";
import { Game } from "../../components/Game";

const Page = ({ game }: { game: IGame }) => {
  return <Game game={game} />;
};

export default Page;

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const game = await fetch("http://localhost:3000/api/games", {
    method: "post",
    body: params?.id as string,
  });

  const json = await game.json();

  return { props: { game: json } };
};

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    fallback: false,
  };
};
