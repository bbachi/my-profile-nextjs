import React from 'react';
import Header from './Header'
import Dashboard from './Dashboard';

export default function Home() {
  return (
    <div className="container">
      <Header></Header>
      <Dashboard></Dashboard>
    </div>
  );
}
