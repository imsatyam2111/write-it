import { Box, Button, Grid, Typography, SvgIconProps } from "@mui/material";
import { Search, WritingCard } from "../../components";
import styles from "../../styles/modules/Home.module.css";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import NotesIcon from "@mui/icons-material/Notes";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ListIcon from "@mui/icons-material/List";
import { Stack } from "@mui/system";
import { routes } from "../../utils/routes";
import {useRouter} from 'next/router';

interface IStatProps {
  key: number;
  label: string;
  count: number;
  icon: React.ReactElement<SvgIconProps>;
  link: string;
}

interface IStatCardProps {
  stat: IStatProps;
}

const StatCard = (props: IStatCardProps) => {
  const { stat } = props;
  const router = useRouter();

  return (
    <div>
      <Grid container className={styles.statCard} onClick={() => router.push(stat.link)}>
        <Grid
          item
          xs={1}
          justifyContent="center"
          className={styles.statIconContainer}
        >
          {stat.icon}
        </Grid>
        <Grid item xs={10} className={styles.statDetails}>
          <Stack direction="column">
            <Typography variant="h6">{stat.label}</Typography>
            <div>
              <Typography variant="subtitle2">
                Total:
                <Typography
                  variant="subtitle2"
                  component="span"
                  className={styles.statCount}
                >
                  {stat.count}
                </Typography>
              </Typography>
            </div>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export const HomeModule = () => {
  const writingStats = [
    {
      key: 0,
      label: "Diaries",
      count: 5,
      icon: <AutoStoriesIcon fontSize="large" />,
      link: routes.diaries,
    },
    {
      key: 1,
      label: "Notes",
      count: 5,
      icon: <NotesIcon fontSize="large" />,
      link: routes.notes,
    },
    {
      key: 2,
      label: "Todos",
      count: 5,
      icon: <PlaylistAddCheckIcon fontSize="large" />,
      link: routes.todos,
    },
    {
      key: 3,
      label: "Cheat Sheets",
      count: 5,
      icon: <IntegrationInstructionsIcon fontSize="large" />,
      link: routes.cheatSheets,
    },
    {
      key: 4,
      label: "Expanses",
      count: 5,
      icon: <AccountBalanceWalletIcon fontSize="large" />,
      link: routes.expenses,
    },
    {
      key: 6,
      label: "Lists",
      count: 5,
      icon: <ListIcon fontSize="large" />,
      link: routes.lists,
    },
  ];

  return (
    <Box className={styles.homeContainer}>
      <div className={styles.homeHeadingText}>
        <Typography variant="h4">All Writings</Typography>
      </div>
      <div className={styles.homeMain}>
        <Grid container spacing={2}>
          {writingStats.map((stat) => (
            <Grid item sm={6} key={stat.key}>
              <StatCard stat={stat} />
            </Grid>
          ))}
        </Grid>
      </div>
    </Box>
  );
};
