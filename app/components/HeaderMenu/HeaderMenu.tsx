'use client';

import { Menu, Group, Center, Burger, Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import classes from './HeaderMenu.module.css';

const links = [
  { link: '/#hero', label: 'Home' },        // Link to Hero Section
  { link: '/#features', label: 'Features' }, // Link to Features Section
  { link: '/#faq', label: 'FAQ' },           // Link to FAQ Section
  { link: '/screen', label: 'Screen' },      // Link to /screen page
];

export function HeaderMenu() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => {
    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
      >
        {link.label}
      </a>
    );
  });

  return (
    <header className={classes.header}>
      <Container size="xl">
        <div className={classes.inner}>
          <div className="text-2xl font-bold">
            Hire<span className="text-blue-500">Lens</span>
          </div>
          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
    </header>
  );
}
