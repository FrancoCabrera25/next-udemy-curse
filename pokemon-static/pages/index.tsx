import type { NextPage, GetStaticProps } from "next";
import { Button } from "@nextui-org/react";
import { Layout } from "../components/layouts";
import { pokeApi } from "../api";
import { PokemonListResponse } from "../interfaces";

const HomePage: NextPage = (props) => {
  console.log(props);
  return (
    <Layout title="Listado de pokemon">
      <h1>Hola mundo</h1>
      <Button color="gradient">Click me</Button>
    </Layout>
  );
};



export const getStaticProps: GetStaticProps = async (ctx) => {

  const {data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');  

  return {
    props: {
      pokemons: data.results
    }
  }
}


export default HomePage;
