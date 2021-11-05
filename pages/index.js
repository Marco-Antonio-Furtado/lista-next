import { useState } from "react";
import Header from "../components/header";
import List from "../components/list";
import Kanban from "../components/kanban";

function Home() {
  const [kanban, setKanban] = useState([<List />]);
  return (
    <div>
      <Header kanban={kanban} setKanban={setKanban} />
      <Kanban kanban={kanban} setKanban={setKanban} />
    </div>
  );
}

export default Home;
