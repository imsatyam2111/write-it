import { useState } from "react";
import { IconButton } from "@mui/material";
import { MenuList } from "../MenuList";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import styles from "../../styles/components/WritingCard.module.css";

const menuList = [
  {
    key: 0,
    label: "Delete",
  },
];

export const WritingCard = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOptionClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div className={styles.writingCardContainer}>
      <div className={styles.writingCardHeader}>Passwords</div>
      <div className={styles.writingCardBody}>abv abc abc</div>
      <div className={styles.writingCardAction}>
        <IconButton onClick={handleOptionClick}>
          <MoreVertIcon />
        </IconButton>
      </div>
      <MenuList
        menuList={menuList}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
      />
    </div>
  );
};
