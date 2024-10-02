function showMsg(marks) {
  const msg = marks || "Absent"; //! "??" Use this null coellcing operator to solve the bug...
  console.log(`Student's marks: ${msg}`);
}

showMsg(75); // Outputs: Student's marks: 75
showMsg();
showMsg(0); // Outputs: Student's marks: Absent
showMsg(46);
