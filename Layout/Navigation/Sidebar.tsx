import { Fragment, useState } from "react";
import { Box } from "@mui/material";
import Link from "next/link";
import style from "../../styles/Sidebar.module.css";
import { useRouter } from "next/router";

interface navLinkProp {
  key: number;
  label: string;
  link: string;
}

const navLinks: Array<navLinkProp> = [
  {
    key: 0,
    label: "Recent",
    link: "/",
  },
  {
    key: 1,
    label: "Diaries",
    link: "/diaries",
  },
  {
    key: 2,
    label: "Notes",
    link: "/notes",
  },
  {
    key: 3,
    label: "Todo",
    link: "/todo",
  },
  {
    key: 4,
    label: "Reminder",
    link: "/reminder",
  },
  {
    key: 5,
    label: "Expenses",
    link: "/expenses",
  },
  {
    key: 6,
    label: "Shopping List",
    link: "/shoppingList",
  },
];

export const Sidebar = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(
    router.pathname === "/" ? "/recent" : router.pathname
  );

  return (
    <Box sx={{ height: "calc(100vh - 74px)" }}>
      {navLinks.map((link) => (
        <Fragment key={link.key}>
          <Link href={link.link}>
            <Box
              className={`${style.sideLinks} ${
                activeTab === link.link ? style.sideLinkActive : ""
              }`}
              onClick={() => setActiveTab(link.link)}
            >
              {link.label}
            </Box>
          </Link>
        </Fragment>
      ))}
    </Box>
  );
};
