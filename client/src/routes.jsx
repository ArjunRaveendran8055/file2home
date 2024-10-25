import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import { BsClipboardData } from "react-icons/bs";
import { GrTableAdd } from "react-icons/gr";
import { TbReportSearch } from "react-icons/tb";
import { MdOutlineAssignmentInd } from "react-icons/md";
import { IoSearch } from "react-icons/io5";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "my profile",
        path: "/profile",
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "notifications",
        path: "/notifications",
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "tables",
        path: "/tables",
      },
    ],
  },
  {
    title: "CRM Controls",
    layout: "crm",
    pages: [
      {
        icon: <BsClipboardData {...icon} />,
        name: "General Leads",
        path: "/leadbank/viewdetailedleads",
      },
      {
        icon: <GrTableAdd {...icon} />,
        name: "Bulk Upload",
        path: "/leadbank/bulkupload",
      },
      {
        icon: <MdOutlineAssignmentInd {...icon} />,
        name: "Assign Leads",
        path: "/pro",
      },
      {
        icon: <TbReportSearch {...icon} />,
        name: "Reports",
        path: "/pro",
      },
    ],
  },
  {
    title: "Staff Panel",
    layout: "user",
    pages: [
      {
        icon: <IoSearch {...icon} />,
        name: "Manage Users",
        path: "/managestaffs",
      },
      {
        icon: <TbReportSearch {...icon} />,
        name: "Pending Users",
        path: "/pendingusers",
      },
    ],
  },
];


