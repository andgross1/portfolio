import Header from "./components/Header";
import Hero from "./components/Hero"
import About from "./components/About";
import Career from "./components/Career";

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-32 pt-16">
        <Hero />
        <About />
        <Career />
      </main>
    </>
  );
}

export default App;