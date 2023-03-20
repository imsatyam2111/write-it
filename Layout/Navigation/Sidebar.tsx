import { Fragment, useState } from "react";
import { Box } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/components/Sidebar.module.css";
import { routes } from "../../utils/routes";

interface navLinkProp {
  key: number;
  label: string;
  link: string;
}

const navLinks: Array<navLinkProp> = [
  {
    key: 0,
    label: "Home",
    link: routes.home,
  },
  {
    key: 1,
    label: "Diaries",
    link: routes.diaries,
  },
  {
    key: 2,
    label: "Notes",
    link: routes.notes,
  },
  {
    key: 3,
    label: "Todos",
    link: routes.todos,
  },
  {
    key: 4,
    label: "Cheat Sheets",
    link: routes.cheatSheets,
  },
  {
    key: 5,
    label: "Expenses",
    link: routes.expenses,
  },
  {
    key: 6,
    label: "Lists",
    link: routes.expenses,
  },
];

export const Sidebar = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(router.pathname);

  return (
    <Box sx={{ height: "calc(100vh - 74px)" }}>
      {navLinks.map((link) => (
        <Fragment key={link.key}>
          <Link className={styles.navLink} href={link.link}>
            <Box
              className={`${styles.sideLinks} ${
                activeTab === link.link ? styles.sideLinkActive : ""
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
