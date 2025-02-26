export const dashboardData = {
    personalInfo: {
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@example.com",
        phone: "123-456-7890",
        address: "123 Main St",
        pinCode: "123456",
        college: "ABC University",
        year: "3rd Year",
        semester: "6th Semester",
    },
    attendance: 85,
    attendanceBreakdown: [
      { name: "Math", attendance: 90 },
      { name: "Science", attendance: 85 },
    ],
    notifications: [
      "New assignment posted in Math",
      "Exam schedule updated",
      "Library book due tomorrow",
    ],
    quickLinks: [
      { label: "Download Study Material" },
      { label: "Contact Faculty" },
    ],
    classSchedule: [
      { day: "Monday", subject: "Math", time: "10:00 AM" },
      { day: "Tuesday", subject: "Science", time: "11:00 AM" },
      { day: "Wednesday", subject: "History", time: "12:00 PM" },
      { day: "Thursday", subject: "English", time: "1:00 PM" },
      { day: "Friday", subject: "Physics", time: "2:00 PM" },
    ],
    upcomingEvents: [
      "Midterm Exam - October 15",
      "Parent-Teacher Meeting - October 20",
      "Science Fair - November 5",
    ],
  };
export const defaultPersonalInfo = {
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    address: "123 Main St",
    pinCode: "123456",
    college: "ABC University",
    year: "3rd Year",
    semester: "6th Semester",
  };
export const defaultCredentials = {
    email: "student@example.com",
    password: "password",
  };
  export const courses = [
    { name: "Mathematics", id: "MAT101", credit: 3, grade: "A", gradePoints: 4.0, marks: 85 },
    { name: "Physics", id: "PHY102", credit: 4, grade: "B+", gradePoints: 3.5, marks: 78 },
    { name: "Computer Science", id: "CS103", credit: 3, grade: "A+", gradePoints: 4.0, marks: 92 },
    { name: "English Literature", id: "ENG104", credit: 2, grade: "A", gradePoints: 3.7, marks: 88 },
    { name: "Economics", id: "ECO105", credit: 3, grade: "B", gradePoints: 3.0, marks: 75 },
    { name: "History", id: "HIS106", credit: 2, grade: "B+", gradePoints: 3.5, marks: 80 },
    { name: "Chemistry", id: "CHE107", credit: 4, grade: "A-", gradePoints: 3.7, marks: 83 },
  ];
  
  export const assignments = [
    { name: "Algebra Homework", course: "Mathematics", due: "March 5, 2025", status: "Incomplete" },
    { name: "Physics Lab Report", course: "Physics", due: "March 7, 2025", status: "Incomplete" },
    { name: "Programming Project", course: "Computer Science", due: "Feb 20, 2025", status: "Completed" },
    { name: "Essay on Shakespeare", course: "English Literature", due: "Feb 15, 2025", status: "Completed" },
    { name: "Economic Trends Report", course: "Economics", due: "Feb 18, 2025", status: "Completed" },
    { name: "History Research Paper", course: "History", due: "Feb 22, 2025", status: "Completed" },
    { name: "Chemistry Lab Write-Up", course: "Chemistry", due: "Feb 25, 2025", status: "Completed" },
  ];

  
  // Grade to GPA mapping
  export const gradeToGPA = {
    "A+": 4.0,
    A: 3.7,
    "A-": 3.5,
    "B+": 3.3,
    B: 3.0,
    "B-": 2.7,
    "C+": 2.3,
    C: 2.0,
    "C-": 1.7,
    D: 1.0,
    F: 0.0,
  };
    
  
