import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authentication from "./authentication";

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Authentication />} />
      </Routes>
    </Router>
  );
};

export default App;
