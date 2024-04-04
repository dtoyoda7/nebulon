import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import { Header } from "./components/layout/header";
import { Footer } from "./components/layout/footer";

import { HomePage } from "./pages/home";
import { TokenomicsPage } from "./pages/tokenomics";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tokenomics" element={<TokenomicsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
