import React, { useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import { SERVER_URL } from "../constants.js";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import AddOwner from "./AddOwner.js";
import EditOwner from './EditOwner.js';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
//import logo from '../logo.svg';

function OwnerList() {
  const [owners, setOwners] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    fetchOwners();
  }, []);

  const fetchOwners = () => {
    fetch(SERVER_URL + "api/owners")
      .then((response) => response.json())
      .then((data) => setOwners(data._embedded.owners))
      .catch((err) => console.error(err));
  };

  const addOwner = owner => {
    fetch(SERVER_URL + "api/owners", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(owner),
    }).then((response) => {
      if (response.ok) {
        fetchOwners();
      } else {
        alert("Something went wrong !!");
      }
    }).catch(err => console.error(err));
  };

  const updateOwner = (owner, link) => {
    fetch(link, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(owner),
    }).then((response) => {
      if (response.ok) {
        fetchOwners();
      } else {
        alert("Something went wrong !!");
      }
    }).catch(err => console.error(err));
  };

  const onDelClick = url => {
    if (window.confirm("Are you sure to delete ?")) {
      fetch(url, { method: "DELETE" })
        .then((response) => {
          if (response.ok) {
            fetchOwners();
            setOpen(true);
          } else {
            alert("Some thing is wrong !!!!");
          }
        })
        .catch((Err) => console.error(Err));
    }
  };
  const columns = [
    { field: "firstname", headerName: "Prenom", width: 200 },
    { field: "lastname", headerName: "Nom", width: 200 },
    {
      field: "_links.owner.href",
      headerName: "",
      sortable: false,
      filterable: false,
      renderCell: row => <EditOwner data={row} updateOwner={updateOwner}/>
    },
    {
      field: "_links.self.href",
      headerName: "",
      sortable: false,
      filterable: false,
      renderCell: (row) => (
        <IconButton variant="contained" color="error" size="small" onClick={() => onDelClick(row.id)}><DeleteIcon color="error"/></IconButton>
      ),
    },
  ];

  return (
    <React.Fragment>
      <Stack mt={2} mb={2}>
        <AddOwner addOwner={addOwner}/>
      </Stack>
      <div style={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={owners}
          disableRowSelectionOnClick={true}
          columns={columns}
          getRowId={(row) => row._links.self.href}
        />
        <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={() => setOpen(false)}
          message="Utilisateur suprimee"
        />
      </div>
    </React.Fragment>
  );
}
export default OwnerList;

// <table>
//   <tbody>
//     {cars.map((car, index) => (
//       <tr key={index}>
//         <td>{car.brand}</td>
//         <td>{car.model}</td>
//         <td>{car.color}</td>
//         <td>{car.year}</td>
//         <td>{car.price}</td>
//       </tr>
//     ))}
//   </tbody>
// </table>;

