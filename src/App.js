import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Characters from "./components/Characters";

const queryClient = new QueryClient();
const App = () => {
  return (
    <div className="App">
      <div className="container">
        <h1>Rick and Morty</h1>
        <QueryClientProvider client={queryClient}>
          <Characters />
        </QueryClientProvider>
      </div>
    </div>
  );
};

export default App;
