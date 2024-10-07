import { Title, Text, Button, Container } from '@mantine/core';
import { Dots } from './Dots'
import classes from './HeroText.module.css';

export function HeroText() {
  return (
    <Container className={`${classes.wrapper}`} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Automated AI{' '}
          <Text component="span" className={classes.highlight} inherit>
          CV screening
          </Text>{' '}
          for smart hiring
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" c="dimmed" className={classes.description}>
          Streamline your hiring process with AI-driven CV screening. HireLens helps you find the best candidates quickly and efficiently.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} size="lg" variant="default" color="gray">
            How it works
          </Button>
          <Button className={classes.control} size="lg">
            Start Screening
          </Button>
        </div>
      </div>
    </Container>
  );
}