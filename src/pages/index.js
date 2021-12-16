import Head from "next/head";
import Header from "../components/header";
import Kanban from "../components/kanban";

import KanbanProvider from "../context/Kanban";

function App() {
  return (
    <div>
      <Head>
        <title>Thrillo</title>
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico"></link>
      </Head>

      <KanbanProvider>
        <Header />
        <Kanban />
      </KanbanProvider>
    </div>
  );
}

export default App;
