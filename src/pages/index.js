import Header from "../components/header";
import Kanban from "../components/kanban";

import KanbanProvider from "../context/Kanban";

function Home() {
  return (
    <div>
      <KanbanProvider>
        <Header />
        <Kanban />
      </KanbanProvider>
    </div>
  );
}

export default Home;
