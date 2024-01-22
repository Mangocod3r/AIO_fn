import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS
import { Navbar, Nav } from 'react-bootstrap'; // Import Bootstrap components as needed
import AdNav from './AdNav';

function Admin() {
  const navItemsStyle = {
    marginLeft: 'auto', // Align items to the right
  };

  return (
    <>
      <AdNav/>
      <h1 className="admin-head">Admin page</h1>
    </>
  );
}

export default Admin;
