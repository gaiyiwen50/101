import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Single from "./pages/single/Single";
import Reference from "./pages/reference/Reference";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const data = [
  { title: "Why is vehicular transmission a unique problem?", content: "c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1"},
  { title: "Why bay area people?", content: "c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1"},
  { title: "Facts about the carbon footprints", content: "c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1"},
  { title: "q4", content: "c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1"},
  { title: "q5", content: "c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1c1"}
]

function App() {
  const currentUser = true;
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Homepage data={data}/>
        </Route>
        <Route path="/posts">
          <Homepage data={data}/>
        </Route>
        <Route path="/post/:id">
          <Single data={data}/>
        </Route>
        <Route path="/references">
          <Reference />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
