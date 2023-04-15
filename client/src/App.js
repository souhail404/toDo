import { BrowserRouter, Routes, Route } from "react-router-dom";

// import assets
import './App.css';

// import components & pages
import AddTask from "./pages/AddTask";
import Home from "./pages/Home";
import Layout from "./pages/Layout";

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="add-task" element={<AddTask />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
