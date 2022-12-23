import { Box, Button, Grid } from "@mui/material";
import { Search, WritingCard } from "../../components";
import styles from "../../styles/Home.module.css";

export const HomeModule = () => {
  return (
    <Box className={styles.home}>
      <div className={styles.addWriting}>
        <Button variant="contained" className={styles.addWritingButton}>
          + Add
        </Button>
      </div>
      <div className={styles.searchContainer}>
        <Search />
      </div>
      <Grid container spacing={2} className={styles.recentWritings}>
        <Grid item xs={4}>
          <WritingCard />
        </Grid>
        <Grid item xs={4}>
          <WritingCard />
        </Grid>
        <Grid item xs={4}>
          <WritingCard />
        </Grid>
        <Grid item xs={4}>
          <WritingCard />
        </Grid>
        <Grid item xs={4}>
          <WritingCard />
        </Grid>
        <Grid item xs={4}>
          <WritingCard />
        </Grid>
        <Grid item xs={4}>
          <WritingCard />
        </Grid>
      </Grid>
    </Box>
  );
};
