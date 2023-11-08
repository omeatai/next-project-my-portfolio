import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <section className="mx-4 sm:mx-8">
        <h1>This is the Index Page.</h1>
      </section>
    </>
  );
}
