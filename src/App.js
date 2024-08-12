import Layout from "./component/layout";
import { ThemeProvider } from "./store/themeContext";

function App() {
  return (
      <ThemeProvider>
        <Layout />
      </ThemeProvider>
  );
}

export default App;
