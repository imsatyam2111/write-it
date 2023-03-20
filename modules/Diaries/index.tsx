import { Box, Typography } from "@mui/material";
import styles from '../../styles/modules/Diaries.module.css';

export const DiariesModules = () => {
    return (
        <Box className={styles.diariesContainer}>
            <div className={styles.diariesHeadingText}>
                <Typography variant="h4">
                    Diaries
                </Typography>
            </div>
        </Box>
    )
};
