import Head from "next/head";
import Header from "../components/header";
import Kanban from "../components/kanban";

import KanbanProvider from "../context/Kanban";

function App() {
  return (
    <div>
      <Head>
        <title>Thrillo</title>
        {/* <link rel="icon" href="../public/favicon.ico"></link> 
        NÃO FUNCIONA, NÃO SEI PORQUÊ*/}
      </Head>

      <KanbanProvider>
        <Header />
        <Kanban />
      </KanbanProvider>
    </div>
  );
}

export default App;
