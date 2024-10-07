"use client"

import { Container, Title, Accordion } from '@mantine/core';
import classes from './FaqSimple.module.css';

const faqData = {
  resetPassword: 'To reset your password, go to the login page and click on "Forgot Password." Enter your email address, and we’ll send you instructions on how to reset your password.',
  createAccount: 'Yes, you can create more than one account. However, it’s recommended to manage your hiring needs under a single account for easier tracking and access.',
  newsletter: 'To subscribe to our monthly newsletter, scroll to the bottom of any page on our website and enter your email in the "Subscribe" section.',
  creditCard: 'We use industry-standard encryption to securely store your credit card information. All transactions are processed through trusted payment gateways.',
  paymentSystems: 'We support multiple payment methods including credit/debit cards, PayPal, and other secure payment platforms like Stripe.',
};

export function FaqSimple() {
  return (
    <Container size="sm" className={classes.wrapper}>
      <Title ta="center" className={classes.title}>
        Frequently Asked Questions
      </Title>

      <Accordion variant="separated">
        <Accordion.Item className={classes.item} value="reset-password">
          <Accordion.Control>How can I reset my password?</Accordion.Control>
          <Accordion.Panel>{faqData.resetPassword}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="another-account">
          <Accordion.Control>Can I create more than one account?</Accordion.Control>
          <Accordion.Panel>{faqData.createAccount}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="newsletter">
          <Accordion.Control>How can I subscribe to the monthly newsletter?</Accordion.Control>
          <Accordion.Panel>{faqData.newsletter}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="credit-card">
          <Accordion.Control>Do you store credit card information securely?</Accordion.Control>
          <Accordion.Panel>{faqData.creditCard}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="payment">
          <Accordion.Control>What payment systems do you work with?</Accordion.Control>
          <Accordion.Panel>{faqData.paymentSystems}</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}
