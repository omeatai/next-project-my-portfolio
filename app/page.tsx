import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <h1>This is the Index Page.</h1>
      </main>
    </>
  );
}
