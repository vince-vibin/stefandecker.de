import classes from "./title.module.css";

export function TitleComponent() {
  return (
    <header className={classes.header}>
      <img
        src={`${import.meta.env.BASE_URL}assets/stefandecker.png`}
        alt="Logo"
        className={classes.logo}
      />
    </header>
  )
}