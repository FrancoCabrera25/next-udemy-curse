import React from "react";
import { NextPage } from "next";
import { Layout } from "../../components/layouts";
import { NoFavorites } from "../../components/ui";

const FavoritesPage: NextPage = () => {
  return (
    <Layout title="Pokemons favoritos">
      <NoFavorites />
    </Layout>
  );
};

export default FavoritesPage;
