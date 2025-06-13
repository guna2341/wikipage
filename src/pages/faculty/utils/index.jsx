import { Comment, Edit, User } from "@/assets";
import { CommentPage } from "../pages/comment";

export const TabList = [
    {
        id: 0,
        img: Edit,
        tab: "Course Plan"
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
        page:<CommentPage/>
    },
    {
        id: 3,
        img: User,
        tab: "Profile"
    }
];