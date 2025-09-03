import { Edit } from "@/assets";

export const AdminTabList = [
    {
        id:0,
        img:Edit,
        tab:"Regulation"
    },
    {
        id:1,
        img:Edit,
        tab:"Student List"
    },
    {
        id:2,
        img:Edit,
        tab:"Faculty List"
    }
];

export const courseTable = [

    {
        code_no:'22CS501',
        course:"THEORY OF COMPUTATION",
        peos:'I',
        pos:'a,b,c',
        l:3,
        t:1,
        p:0,
        c:4
    },
     {
        code_no:'22CS502',
        course:"COMPUTER NETWORKS",
        peos:'I',
        pos:'a,b,c,d,em',
        l:3,
        t:0,
        p:2,
        c:4
    },
     {
        code_no:'22CS503',
        course:"MACHINE LEARNING ESSENTIALS",
        peos:'I',
        pos:'a,b,c,d,e,f',
        l:3,
        t:0,
        p:2,
        c:4
    },
     {
        code_no:'22CS504',
        course:"FREE OPEN SOURCE SOFTWARE",
        peos:'I,II',
        pos:'a,b,c,d,e,f,g,h,i,j,k,l',
        l:2,
        t:0,
        p:2,
        c:3
    },
     {
        code_no:'22CS507',
        course:"MINI PROJECT",
        peos:'I,II',
        pos:'a,b,c,d,e,f,g,h,i,j,k,l',
        l:0,
        t:0,
        p:2,
        c:1
    },
    {
        total:{
            l:14,
            t:1,
            p:8,
            c:16
        }
    }
];

export const regulations = [
    {
        key: "1",
        label:"2020"
    },
    {
        key: "2",
        label:"2021"
    },
    {
        key: "3",
        label:"2022"
    },
    {
        key: "4",
        label: "2023"
    }
];

export const departments = [
    {
        key: "1",
        label:"CSE"
    },
    {
        key: "2",
        label:"AIDS"
    },
    {
        key: "3",
        label:"ECE"
    },
    {
        key: "4",
        label: "EEE"
    },
    {
        key: "5",
        label:"AIML"
    }
];

export const courses = [
    {
        key: "1",
        label:"Theory of Computation"
    },
    {
        key: "2",
        label:"Computer Networks"
    },
    {
        key: "3",
        label:"Machine Learning Essentials"
    },
    {
        key: "4",
        label: "Free Open Source Software"
    },
    {
        key: "5",
        label: "Mini Project"
    }
];


export const studentHeader = [
    { id: 1, label: "Student Name" },
    { id: 2, label: "Email" },
    { id: 3, label: "Register Number" },
    { id: 4, label: "Department" },
    { id: 5, label: "Year of Study" },
    { id: 6, label: "Semester" },
  ]

export const students = [{ id: 1, name: "Ajay k", email: "ajay.cs23@bitsathy.ac.in", register: "7376231CS101", department: "CSE", yos: 2024, semester: "S5" },
    { id: 2, name: "Ajay k", email: "ajay.cs23@bitsathy.ac.in", register: "7376231CS101", department: "CSE", yos: 2024, semester: "S5" },
    { id: 3, name: "Ajay k", email: "ajay.cs23@bitsathy.ac.in", register: "7376231CS101", department: "CSE", yos: 2024, semester: "S5" },
    { id: 4, name: "Ajay k", email: "ajay.cs23@bitsathy.ac.in", register: "7376231CS101", department: "CSE", yos: 2024, semester: "S5" },
    { id: 5, name: "Ajay k", email: "ajay.cs23@bitsathy.ac.in", register: "7376231CS101", department: "CSE", yos: 2024, semester: "S5" },
    { id: 6, name: "Ajay k", email: "ajay.cs23@bitsathy.ac.in", register: "7376231CS101", department: "CSE", yos: 2024, semester: "S5" },
    { id: 7, name: "Ajay k", email: "ajay.cs23@bitsathy.ac.in", register: "7376231CS101", department: "CSE", yos: 2024, semester: "S5" },
    { id: 8, name: "Ajay k", email: "ajay.cs23@bitsathy.ac.in", register: "7376231CS101", department: "CSE", yos: 2024, semester: "S5" },
    { id: 9, name: "Ajay k", email: "ajay.cs23@bitsathy.ac.in", register: "7376231CS101", department: "CSE", yos: 2024, semester: "S5" },
    { id: 10, name: "Ajay k", email: "ajay.cs23@bitsathy.ac.in", register: "7376231CS101", department: "CSE", yos: 2024, semester: "S5" },
    { id: 11, name: "Ajay k", email: "ajay.cs23@bitsathy.ac.in", register: "7376231CS101", department: "CSE", yos: 2024, semester: "S5" },
    { id: 12, name: "Ajay k", email: "ajay.cs23@bitsathy.ac.in", register: "7376231CS101", department: "CSE", yos: 2024, semester: "S5" },
    { id: 13, name: "Ajay k", email: "ajay.cs23@bitsathy.ac.in", register: "7376231CS101", department: "CSE", yos: 2024, semester: "S5" },
    { id: 14, name: "Ajay k", email: "ajay.cs23@bitsathy.ac.in", register: "7376231CS101", department: "CSE", yos: 2024, semester: "S5" },
    
];

export const facultyHeader = [
    {
        key: "1",
        label:"Faculty Name"
    },
    {
        key: "2",
        label:"Email"
    },
    {
        key: "3",
        label:"Faculty ID"
    },
    {
        key: "4",
        label:"Department"
    },

    {
        key: "6",
        label:"Course ID"
    },
    {
        key: "7",
        label:"Semester"
    }
];

export const faculties = [
    {
        id: 1,
        name: "Priya R",
        email: "priya.r@bitsathy.ac.in",
        register: "7376231CS101",
        department: "CSE",
        lab:"Theory with lab",
        course:"22CS501",
        semester:"S1,S4"
    },
    {
        id: 2,
        name: "Priya R",
        email: "priya.r@bitsathy.ac.in",
        register: "7376231CS101",
        department: "CSE",
        lab:"Theory with lab",
        course:"22CS501",
        semester:"S1,S4"
    },
    {
        id: 3,
        name: "Priya R",
        email: "priya.r@bitsathy.ac.in",
        register: "7376231CS101",
        department: "CSE",
        lab:"Theory with lab",
        course:"22CS501",
        semester:"S1,S4"
    },

    {
        id: 4,
        name: "sai R",
        email: "priya.r@bitsathy.ac.in",
        register: "7376231CS101",
        department: "EEE",
        lab:"Theory with lab",
        course:"22CS501",
        semester:"S1,S4"
    },
    {
        id: 5,
        name: "Priya R",
        email: "priya.r@bitsathy.ac.in",
        register: "7376231CS101",
        department: "CSE",
        lab:"Theory with lab",
        course:"22CS501",
        semester:"S1,S4"
    },

    {
        id: 6,
        name: "Priya R",
        email: "priya.r@bitsathy.ac.in",
        register: "7376231CS101",
        department: "CSE",
        lab:"Theory with lab",
        course:"22CS501",
        semester:"S1,S4"
    },
    {
        id: 7,
        name: "Priya R",
        email: "priya.r@bitsathy.ac.in",
        register: "7376231CS101",
        department: "CSE",
        lab:"Theory with lab",
        course:"22CS501",
        semester:"S1,S4"
    },
    {
        id: 8,
        name: "Priya R",
        email: "priya.r@bitsathy.ac.in",
        register: "7376231CS101",
        department: "CSE",
        lab:"Theory with lab",
        course:"22CS501",
        semester:"S1,S4"
    },
    {
        id: 9,
        name: "Priya R",
        email: "priya.r@bitsathy.ac.in",
        register: "7376231CS101",
        department: "CSE",
        lab:"Theory with lab",
        course:"22CS501",
        semester:"S1,S4"
    },

];