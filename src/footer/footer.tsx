import { Text, Container, Group } from '@mantine/core';
import classes from './footer.module.css';

export function FooterComponent() {
  return (
    <div className={classes.footer}>
        <Container className={classes.inner}>
            <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
                <Text>
                    Provided by vince-vibin via Github and Mantine Ui
                </Text>
            </Group>
        </Container>
    </div>
  );
}