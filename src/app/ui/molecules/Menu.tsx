import React from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

const Menu = () => {
  return (
    <div className="flex h-screen">
      <Sidebar/>
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">
        <h4>table</h4>
        </main>
      </div>
    </div>
  );
};

export default Menu;