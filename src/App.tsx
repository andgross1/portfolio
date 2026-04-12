import Header from "./components/Layout/Header";

function App() {
  return (
    <>
      <Header />

      {/* Espaço só pra testar scroll */}
      <main className="pt-16">
        <div className="h-[2000px] bg-gray-100">
          Conteúdo
        </div>
      </main>
      <div className="h-[2000px] bg-gray-100 pt-20"></div>
    </>
  );
}

export default App;