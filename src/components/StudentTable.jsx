import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material'; // Import MUI icons
import PropTypes from 'prop-types'; // Import PropTypes for prop validation

export default function StudentTable({ onEdit, onDelete, studentsData }) {
  // Log data to ensure it's being passed correctly
  console.log("Data to Display in Table:", studentsData);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Class</TableCell>
          <TableCell>Section</TableCell>
          <TableCell>Roll Number</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {studentsData && studentsData.length ? (
          studentsData.map((student) => (
            <TableRow key={student.id}>
              <TableCell>{student.id}</TableCell>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.class}</TableCell>
              <TableCell>{student.section}</TableCell>
              <TableCell>{student.rollNo}</TableCell>
              <TableCell>
                {/* Edit Icon */}
                <IconButton color="primary" onClick={() => onEdit(student)}>
                  <Edit />
                </IconButton>
                {/* Delete Icon */}
                <IconButton color="secondary" onClick={() => onDelete(student.id)}>
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={6} align="center">
              No students to display
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

// Prop validation using PropTypes
StudentTable.propTypes = {
  onEdit: PropTypes.func.isRequired, // Ensure onEdit is a function
  onDelete: PropTypes.func.isRequired, // Ensure onDelete is a function
  studentsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,  // Firestore IDs are strings
      name: PropTypes.string.isRequired,
      class: PropTypes.string.isRequired,
      section: PropTypes.string.isRequired,
      rollNo: PropTypes.string.isRequired,
    })
  ).isRequired, // Validate studentsData if passed as prop
};






