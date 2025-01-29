import React, { useEffect, useState } from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { collection, getDocs, deleteDoc, doc as firestoreDoc } from 'firebase/firestore'; // Renamed doc import
import { db } from '../firebase';
import StudentForm from '../components/StudentForm';

const StudentsPage = () => {
  const [students, setStudents] = useState([]);
  const [openForm, setOpenForm] = useState(false);

  // Fetch students from Firestore
  const fetchStudents = async () => {
    const querySnapshot = await getDocs(collection(db, 'students'));
    setStudents(querySnapshot.docs.map(document => ({ ...document.data(), id: document.id })));
  };

  useEffect(() => {
    fetchStudents(); // Initial data load
  }, []);

  const handleAddStudent = () => setOpenForm(true);

  const handleDeleteStudent = async (id) => {
    try {
      await deleteDoc(firestoreDoc(db, 'students', id));
      fetchStudents(); // Re-fetch students list after deletion
    } catch (err) {
      console.error('Error deleting student:', err);
    }
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleAddStudent}>
        Add Student
      </Button>

      <TableContainer component={Paper} sx={{ marginTop: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Class</TableCell>
              <TableCell>Section</TableCell>
              <TableCell>Roll Number</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Guardian Name</TableCell>
              <TableCell>Guardian Phone</TableCell>
              <TableCell>Guardian Email</TableCell>
              <TableCell>Remarks</TableCell>
              <TableCell>Date of Birth</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.id}</TableCell>
                <TableCell>{student.name || 'N/A'}</TableCell> {/* Fallback if name is missing */}
                <TableCell>{student.studentClass || 'N/A'}</TableCell> {/* Fallback if studentClass is missing */}
                <TableCell>{student.section || 'N/A'}</TableCell> {/* Fallback if section is missing */}
                <TableCell>{student.rollNo || 'N/A'}</TableCell> {/* Fallback if rollNo is missing */}
                <TableCell>{student.email || 'N/A'}</TableCell> {/* Fallback if email is missing */}
                <TableCell>{student.phone || 'N/A'}</TableCell> {/* Fallback if phone is missing */}
                <TableCell>{student.address || 'N/A'}</TableCell> {/* Fallback if address is missing */}
                <TableCell>{student.guardianName || 'N/A'}</TableCell> {/* Fallback if guardianName is missing */}
                <TableCell>{student.guardianPhone || 'N/A'}</TableCell> {/* Fallback if guardianPhone is missing */}
                <TableCell>{student.guardianEmail || 'N/A'}</TableCell> {/* Fallback if guardianEmail is missing */}
                <TableCell>{student.remarks || 'N/A'}</TableCell> {/* Fallback if remarks is missing */}
                <TableCell>
                  {/* Safely handling Date of Birth with fallback */}
                  {student.dateOfBirth ? new Date(student.dateOfBirth.seconds * 1000).toLocaleDateString() : 'N/A'}
                </TableCell>
                <TableCell>
                  <Button variant="outlined" color="primary" onClick={() => console.log('Edit')}>Edit</Button>
                  <Button variant="outlined" color="error" onClick={() => handleDeleteStudent(student.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {openForm && <StudentForm open={openForm} handleClose={() => setOpenForm(false)} fetchStudents={fetchStudents} />}
    </div>
  );
};

export default StudentsPage;










