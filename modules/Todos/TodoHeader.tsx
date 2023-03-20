import { Box, Checkbox, Grid, Stack, Typography } from "@mui/material";
import styles from "../../styles/modules/Todos.module.css";

export const TodoHeader = () => {
    return (
        <>
            <Grid container alignItems="center" className={styles.todoHeader}>
                <Grid item sm={1} sx={{ pl: 1 }}>
                    {/* <Checkbox /> */}
                    Status
                </Grid>
                <Grid item sm={6}>
                    <Typography>Title</Typography>
                </Grid>
                <Grid item sm={2}>
                    <Typography>Created at</Typography>
                </Grid>
                <Grid item sm={2}>
                    <Typography>Completed at</Typography>
                </Grid>
                <Grid item sm={1}>
                    {/* <Stack direction="row" spacing={2}>
                        <Typography>Edit</Typography>
                        <Typography>Delete</Typography>
                    </Stack> */}
                </Grid>
            </Grid>
        </>
    )
};

