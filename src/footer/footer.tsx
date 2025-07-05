import { IconBrandGithub } from "@tabler/icons-react";
import classes from "./footer.module.css";

export function FooterComponent() {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerText}>
        <a
          href="https://github.com/vince-vibin/stefandecker.de"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Checkout the source code of this website on GitHub"
          className={classes.nolink}
        >
          Provided using GitHub
        </a> 
        <IconBrandGithub aria-label="Github Logo"/>
      </div>
    </footer>
  )
}