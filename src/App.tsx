import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { About } from "./page/about/About";
import { ServisesAndCost } from "./page/servisesAndCost/ServisesAndCost";
import { Contacts } from "./page/contacts/Contacts";
import { Team } from "./page/team/Team";

function App() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />}></Route>
          <Route path="/servises" element={<ServisesAndCost />}></Route>
          <Route path="/team" element={<Team />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
        </Route>
      </Routes>
    </div>
  );
}
export default App;
