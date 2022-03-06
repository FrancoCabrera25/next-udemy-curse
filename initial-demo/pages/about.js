import Link from "next/link";
import MainLayout from "../components/layouts/MainLayout";
import DarkLayout from "../components/layouts/DarkLayout";

export default function AboutPage() {
  return (
    <>
        <h1>About page</h1>
        <h1 className={"title"}>
          ir a <Link href="/">Home</Link>
        </h1>
    </>
  );
}


AboutPage.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  );
};
