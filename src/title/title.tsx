import { Title, ThemeIcon } from '@mantine/core';
import classes from "./title.module.css";

export function TitleComponent() {
  return (
    <header className={classes.header}>
      <ThemeIcon size={60} aria-hidden="true" />
      <Title order={1} size="4rem" mb="xs">
          Stefan Decker
      </Title>
    </header>
  )
}