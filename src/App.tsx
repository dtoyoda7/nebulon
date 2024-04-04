import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import { Header } from "./components/layout/header";
import { Footer } from "./components/layout/footer";

import { HomePage } from "./pages/home";
import { TokenomicsPage } from "./pages/tokenomics";
import { FAQPage } from "./pages/faps/index.";
import { IDOPolicyPage } from "./pages/iod-policy";
import { DappPage } from "./pages/dapp";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tokenomics" element={<TokenomicsPage />} />
        <Route path="/faqs" element={<FAQPage />} />
        <Route path="/iod-policy" element={<IDOPolicyPage />} />
        <Route path="/dapp" element={<DappPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
