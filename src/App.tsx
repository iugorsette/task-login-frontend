import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/Login" Component={Login} />
          <Route path="/Register" Component={Register} />
        </Routes>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
