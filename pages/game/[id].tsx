import { GetStaticPropsContext } from "next";
import { Game } from "../../components/Game";
import axios from "axios";

const Page = ({ game }: { game: IGame }) => {
  return <Game game={game} />;
};

export default Page;

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const res = await axios.post<IGame>("http://localhost:3000/api/games", {
    id: params?.id as string,
  });

  return { props: { game: res.data } };
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
