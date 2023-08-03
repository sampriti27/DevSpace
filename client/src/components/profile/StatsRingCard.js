import {
  createStyles,
  Text,
  Card,
  RingProgress,
  Group,
  rem,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[2],
    width: "500px",
  },

  label: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
    lineHeight: 1,
  },

  lead: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
    fontSize: rem(22),
    lineHeight: 1,
  },

  inner: {
    display: "flex",

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  ring: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",

    [theme.fn.smallerThan("xs")]: {
      justifyContent: "center",
      marginTop: theme.spacing.md,
    },
  },
}));

const StatsRingCard = ({ title, completed, total, stats, email, job }) => {
  const { classes, theme } = useStyles();
  const items = stats.map((stat) => (
    <div key={stat.label} className="flex items-center gap-2">
      <Text className={classes.label}>{stat.value}</Text>
      <Text size="sm" color="dimmed">
        {stat.label}
      </Text>
    </div>
  ));

  return (
    <Card withBorder p="xl" radius="md" className={classes.card}>
      <div className={classes.inner}>
        <div>
          <Text fz="xl" className={classes.label}>
            {title}
          </Text>
          <div className="flex items-center justify-center mt-2">
            <Text ta="center" c="dimmed" fz="sm">
              {email} • {job}
            </Text>
          </div>
          <div>
            {/* <Text className={classes.lead} mt={30}>
              {completed}
            </Text>
            <Text fz="xs" color="dimmed">
              Completed
            </Text> */}
          </div>
          <Group mt="lg">{items}</Group>
        </div>
      </div>
    </Card>
  );
};

export default StatsRingCard;
