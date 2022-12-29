import { GetStaticPropsContext } from "next";
import { Game } from "../../components/Game";
import axios from "axios";
import {data} from "../../server/games";

const Page = ({ game }: { game: IGame }) => {
  return <Game game={game} />;
};

export default Page;

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const id = params?.id as "1" | "2" | "3"

  return { props: { game: data[id] } };
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
