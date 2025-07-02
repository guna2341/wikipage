import { Comment, Edit } from "@/assets";

export const StudentTabList = [
    {
        id:0,
        img: Edit,
        tab: "Regulation"
    },
    {
         id: 1,
        img: Comment,
        tab: "Comments",
        comments: "10",
    }
]

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
        label: "2020"
    },
    {
        key: "2",
        label: "2021"
    },
    {
        key: "3",
        label: "2022"
    },
    {
        key: "4",
        label: "2023"
    }
];
