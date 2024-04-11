import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import { Layout } from "./components/layout";

import { HomePage } from "./pages/home";
import { TokenomicsPage } from "./pages/tokenomics";
import { FAQPage } from "./pages/faps/index.";
import { IDOPolicyPage } from "./pages/iod-policy";
import { DappPage } from "./pages/dapp";
import { StakingPage } from "./staking-engine";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/tokenomics" element={<TokenomicsPage />} />
          <Route path="/faqs" element={<FAQPage />} />
          <Route path="/iod-policy" element={<IDOPolicyPage />} />
          <Route path="/dapp" element={<DappPage />} />
        </Route>
        
        <Route path="/staking" element={<StakingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
