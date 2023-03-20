import { TextField, InputAdornment } from "@mui/material";
import styles from "../../styles/components/Search.module.css";
import SearchIcon from "@mui/icons-material/Search";

interface ISearchProps {
  placeholder: string;
}

export const Search = (props: ISearchProps) => {
  const { placeholder } = props;

  return (
    <>
      <TextField
        className={styles.searchBox}
        fullWidth
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        placeholder={placeholder}
      />
    </>
  );
};
