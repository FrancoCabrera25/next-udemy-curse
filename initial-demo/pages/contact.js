import Link from "next/link";
import MainLayout from "../components/layouts/MainLayout";
export default function ContactPage() {
  return (
    <MainLayout>
      <h1>Contact page</h1>
      <h1 className={"title"}>
        ir a <Link href="/">Home</Link>
      </h1>
    </MainLayout>
  );
}
