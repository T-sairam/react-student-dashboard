import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';


const StudentForm = ({ open, handleClose, fetchStudents }) => {
  const [formData, setFormData] = useState({
    name: '',
    studentClass: '',
    section: '',
    rollNo: '',
    email: '',
    phone: '',
    address: '',
    guardianName: '',
    guardianPhone: '',
    guardianEmail: '',
    remarks: '',
    dateOfBirth: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (Object.values(formData).some((field) => field.trim() === '')) {
      alert('Please fill in all required fields.');
      return;
    }

    try {
      // Add the student data to Firestore
      await addDoc(collection(db, 'students'), {
        ...formData,
        dateOfBirth: new Date(formData.dateOfBirth), // Convert dateOfBirth to timestamp
      });

      fetchStudents(); // Refresh the students list
      handleClose(); // Close the form modal
      setFormData({}); // Reset the form data
    } catch (err) {
      console.error('Error adding student:', err);
      alert('Failed to submit data');
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add New Student</DialogTitle>
      <DialogContent
        sx={{
          maxHeight: 400,
          overflowY: 'auto', // Make the form scrollable if content overflows
        }}
      >
        {/* Form Fields */}
        <TextField
          name="name"
          label="Name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="studentClass"
          label="Class"
          value={formData.studentClass}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="section"
          label="Section"
          value={formData.section}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="rollNo"
          label="Roll Number"
          value={formData.rollNo}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="phone"
          label="Phone"
          value={formData.phone}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="address"
          label="Address"
          value={formData.address}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="guardianName"
          label="Guardian Name"
          value={formData.guardianName}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="guardianPhone"
          label="Guardian Phone"
          value={formData.guardianPhone}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="guardianEmail"
          label="Guardian Email"
          value={formData.guardianEmail}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="remarks"
          label="Remarks"
          value={formData.remarks}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="dateOfBirth"
          label="Date of Birth"
          type="date"
          value={formData.dateOfBirth}
          onChange={handleChange}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

StudentForm.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  fetchStudents: PropTypes.func.isRequired,
};

export default StudentForm;















