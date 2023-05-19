import React from "react";
import ClientComponent from "./ClientComponent";
import List from "./List";
import Notes from "./Notes";

const Dashboard = () => {
  return (
    <div>
      Dashboard Page
      <List />
      <ClientComponent >
      <Notes />
      </ClientComponent>
    </div>
  );
};

export default Dashboard;
