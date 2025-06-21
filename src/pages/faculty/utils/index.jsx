import { Comment, DownArrow, Edit, User } from "@/assets";
import { CommentPage } from "../pages/comment";
import { SideBarAccordian } from "@/components/sidebarAccordian";


export const TabList = [
    {
        id: 0,
        tab: <SideBarAccordian />,
    },
    {
        id: 1,
        img: Edit,
        tab: "Course Material"
    },
    {
        id: 2,
        img: Comment,
        tab: "Comments",
        comments: "10",
    },
    {
        id: 3,
        img: User,
        tab: "Profile"
    }
];

export const coursePlanList = [
    {
        unit: "1.1",
        topic: "Introduction to TOC",
        lectureMaterial: "1.1",
        lectureVideo: "Lv.1",
        discourseLink: "DL1",
    },
    {
        unit: "1.2",
        topic: "Deterministic Finite Automata",
        lectureMaterial: "1.2",
        lectureVideo: "Lv.2",
    },
    {
        unit: "1.3",
        topic: "Nondeterministic Finite Automata",
        lectureMaterial: "1.3",
        lectureVideo: "Lv.3",
        discourseLink: "DL2",
    },
    {
        unit: "1.4",
        topic: "Regular Expressions",
        lectureMaterial: "1.4",
        lectureVideo: "Lv.4",
    },
    {
        unit: "1.5",
        topic: "Context-Free Grammars",
        lectureMaterial: "1.5",
        lectureVideo: "Lv.5",
        discourseLink: "DL3",
    },
    {
        unit: "1.6",
        topic: "Pushdown Automata",
        lectureMaterial: "1.6",
        lectureVideo: "Lv.6",
    },
    {
        unit: "1.7",
        topic: "Turing Machines",
        lectureMaterial: "1.7",
        lectureVideo: "Lv.7",
        discourseLink: "DL4",
    },
    {
        unit: "1.7",
        topic: "Turing Machines",
        lectureMaterial: "1.7",
        lectureVideo: "Lv.7",
    },
];

export const Courses = [
    {
        id: "1",
        course:"CSE: 22CS501 24-25",
        faculty_members:["Dr.Parthasarathi P", "Mrs.Ganagavalli K"]
    },
    {
        id: "2",
        course:"CSE: 22MA201 24-25",
        faculty_members:["Dr.Parthasarathi P", "Mrs.Ganagavalli K"]
    }
];

export const courseUndoList = [
    {
        id:1,
        content:"Deterministic Finite Automata",
        faculty:"Dr.Parthasarathi p",
        lastEdit:"13 Mar,2025 at 9.00AM"
    },
    {
        id:2,
        content:"Deterministic Finite Automata",
        faculty:"Dr.Parthasarathi p",
        lastEdit:"13 Mar,2025 at 9.00AM"
    },
    {
        id:3,
        content:"Deterministic Finite Automata",
        faculty:"Dr.Parthasarathi p",
        lastEdit:"13 Mar,2025 at 9.00AM"
    },
    {
        id:4,
        content:"Deterministic Finite Automata",
        faculty:"Dr.Parthasarathi p",
        lastEdit:"13 Mar,2025 at 9.00AM"
    },
    {
        id:5,
        content:"Deterministic Finite Automata",
        faculty:"Dr.Parthasarathi p",
        lastEdit:"13 Mar,2025 at 9.00AM"
    },
    {
        id:6,
        content:"Deterministic Finite Automata",
        faculty:"Dr.Parthasarathi p",
        lastEdit:"13 Mar,2025 at 9.00AM"
    },
    {
        id:5,
        content:"Deterministic Finite Automata",
        faculty:"Dr.Parthasarathi p",
        lastEdit:"13 Mar,2025 at 9.00AM"
    },
    {
        id:6,
        content:"Deterministic Finite Automata",
        faculty:"Dr.Parthasarathi p",
        lastEdit:"13 Mar,2025 at 9.00AM"
    },
    {
        id:5,
        content:"Deterministic Finite Automata",
        faculty:"Dr.Parthasarathi p",
        lastEdit:"13 Mar,2025 at 9.00AM"
    },
    {
        id:6,
        content:"Deterministic Finite Automata",
        faculty:"Dr.Parthasarathi p",
        lastEdit:"13 Mar,2025 at 9.00AM"
    },
];

export const courseUndoCourses = [
    { id: 1, course: "CSE:22CS501 24-25" },
    { id: 2, course: "CSE:22CS501 24-25" },
];