import { IconBrandGithub, IconBrandInstagram } from "@tabler/icons-react";
import classes from "./footer.module.css";
import { Divider } from '@mantine/core';

export function FooterComponent() {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerText}>
        <a
          href="https://www.instagram.com/57o091d/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Check out my Instagram"
          className={classes.nolink}
        >
          <IconBrandInstagram aria-label="Instagram Logo" size={40}/>
        </a>
        <Divider orientation="vertical" />
        <a
          href="https://github.com/vince-vibin/stefandecker.eu"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Checkout the source code of this website on GitHub"
          className={classes.nolink}
        >
          <IconBrandGithub aria-label="Github Logo" size={40}/>
        </a> 
      </div>
    </footer>
  )
}