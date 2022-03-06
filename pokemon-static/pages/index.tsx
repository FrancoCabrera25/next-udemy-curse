import type { NextPage } from "next";
import { Button } from "@nextui-org/react";
import { Layout } from "../components/layouts";

const HomePage: NextPage = () => {
  return (
    <Layout title="Listado de pokemon">
      <h1>Hola mundo</h1>
      <Button color="gradient">Click me</Button>
    </Layout>
  );
};

export default HomePage;
