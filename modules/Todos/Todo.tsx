
import { useState } from "react";
import { Box, Checkbox, Grid, Stack, Typography } from "@mui/material";
import styles from "../../styles/modules/Todos.module.css";
import { DocumentData } from "firebase/firestore";

interface IProps {
    todo: DocumentData
}

export const Todo = (props: IProps) => {
    const { todo } = props;
    const { title, id, completed, priority, createdAt } = todo;

    const [isCompleted, setIsCompleted] = useState(completed || false);
    const createdAtDate = new Date(createdAt.seconds).toLocaleString().split(',')[0];

    return (
        <>
            <Grid container alignItems="center" className={styles.todo}>
                <Grid item sm={1}>
                    <Checkbox checked={isCompleted} onChange={() => setIsCompleted(!isCompleted)} />
                </Grid>
                <Grid item sm={6}>
                    <Typography>{title}</Typography>
                </Grid>
                <Grid item sm={2}>
                    <Typography>{createdAtDate}</Typography>
                </Grid>
                <Grid item sm={2}>
                    <Typography>23/12/2022</Typography>
                </Grid>
                <Grid item sm={1}>
                    <Stack direction="row" spacing={2}>
                        <Typography>Edit</Typography>
                        <Typography>Delete</Typography>
                    </Stack>
                </Grid>
            </Grid>
        </>
    )
};
