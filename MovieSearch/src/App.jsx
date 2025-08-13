import "./App.css";
import MovieSearchBar from "./Componentes/MovieSearchBar";
import Titulo from "./Componentes/Titulo";
import Populares from "./Componentes/Populares";
import Rodape from "./Componentes/Rodape";
function App() {
  return (
    <>
      <Titulo />
      <MovieSearchBar/>
      <h1 className="Populares-title">Populares</h1>
      <Populares/>
      <Rodape/>
    </>
  );
}

export default App;
