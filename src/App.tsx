import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { About } from "./page/about/About";

import { Contacts } from "./page/contacts/Contacts";
import { Team } from "./page/team/Team";
import { ServicesAndCost } from "./page/serviсesAndCost/ServicesAndCost";

function App() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />}></Route>
          <Route path="/servises" element={<ServicesAndCost />}></Route>
          <Route path="/team" element={<Team />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
        </Route>
      </Routes>
    </div>
  );
}
export default App;
