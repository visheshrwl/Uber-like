import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
// import axios from 'axios';

import Header from './header.jsx'; // Adjust the import path as necessary
import Footer from './footer.jsx'; // Adjust the import path as necessary

const RideHistory = () => {
  const [rides, setRides] = useState([
    {
      date: "16th January 2023 14:53",
      driver: {
        name: "Aflatoon"
      },
      fare: "780"
    }
  ]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selectedRide, setSelectedRide] = useState(null);
  const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   // Fetch rides from the backend
  //   const fetchRides = () => {
  //     const response = rides;
  //     setRides(response.data);
  //   };

  //   fetchRides();
  // }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleClickOpen = (ride) => {
    setSelectedRide(ride);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedRide(null);
  };

  const downloadReceipt = (rideId) => {
    // Logic to download the receipt
    const link = document.createElement('a');
    link.href = `/api/rides/${rideId}/receipt`;
    link.setAttribute('download', `receipt_${rideId}.pdf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
    <Header />
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Driver</TableCell>
              <TableCell>Fare</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rides.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((ride) => (
              <TableRow key={ride.id}>
                <TableCell>{new Date(ride.date).toLocaleDateString()}</TableCell>
                <TableCell>{ride.driver.name}</TableCell>
                <TableCell>${ride.fare}</TableCell>
                <TableCell>
                  <Button variant="outlined" onClick={() => handleClickOpen(ride)}>
                    Details
                  </Button>
                  <Button variant="contained" color="primary" onClick={() => downloadReceipt(ride.id)}>
                    Download Receipt
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rides.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Ride Details</DialogTitle>
        <DialogContent>
          {selectedRide && (
            <div>
              <p><strong>Driver Name:</strong> {selectedRide.driver.name}</p>
              <p><strong>Route:</strong> {selectedRide.route}</p>
              <p><strong>Fare:</strong> ${selectedRide.fare}</p>
              <p><strong>Date:</strong> {new Date(selectedRide.date).toLocaleString()}</p>
              {/* Add more details as needed */}
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
      <Footer />
    </>
  );
};

export default RideHistory;
