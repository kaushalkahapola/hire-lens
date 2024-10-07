import { ThemeIcon, Text, Title, Container, SimpleGrid, rem } from '@mantine/core';
import { IconGauge, IconUser, IconShieldLock, IconZoomCheck, IconMessage2 } from '@tabler/icons-react';
import classes from './FeaturesGrid.module.css';

export const MOCKDATA = [
  {
    icon: IconGauge,
    title: 'High Efficiency',
    description:
      'HireLens leverages AI to quickly screen and sort resumes, significantly reducing time spent on candidate evaluation.',
  },
  {
    icon: IconUser,
    title: 'Candidate-Centric',
    description:
      'We prioritize candidate privacy and deliver a seamless experience for both applicants and recruiters.',
  },
  {
    icon: IconShieldLock,
    title: 'Data Security',
    description:
      'Your data is protected with industry-leading security protocols, ensuring that sensitive information remains safe.',
  },
  {
    icon: IconZoomCheck,
    title: 'Accurate Screening',
    description:
      'Our AI engine ensures precise matching between job descriptions and candidate profiles, improving the quality of hires.',
  },
  {
    icon: IconMessage2,
    title: '24/7 Support',
    description:
      'Our dedicated support team is available round the clock to help you with any queries or technical issues.',
  },
];

interface FeatureProps {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <div>
      <ThemeIcon variant="light" size={40} radius={40}>
        <Icon style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
      </ThemeIcon>
      <Text mt="sm" mb={7}>
        {title}
      </Text>
      <Text size="sm" c="dimmed" lh={1.6}>
        {description}
      </Text>
    </div>
  );
}

export function FeaturesGrid() {
  const features = MOCKDATA.map((feature, index) => <Feature {...feature} key={index} />);

  return (
    <Container className={classes.wrapper}>
      <Title className={classes.title}>Streamline your hiring process with advanced AI</Title>

      <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>
          HireLens makes recruitment easier, faster, and more accurate by utilizing AI-driven CV screening, ensuring that you connect with the best talent quickly.
        </Text>
      </Container>

      <SimpleGrid
        mt={60}
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing={{ base: 'xl', md: 50 }}
        verticalSpacing={{ base: 'xl', md: 50 }}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
