import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ContactFormEmailProps {
  name?: string;
  email?: string;
  message?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "https://ruetherwedding.com";
export const ContactFormEmail = ({
  email,
  message,
  name,
}: ContactFormEmailProps) => (
  <Html>
    <Head />
    <Preview>New Contact Form Submission from Ruether Wedding website</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`${baseUrl}/images/single-gold-flower.jpg`}
          width="100"
          height="70"
          alt="Github"
        />

        <Text style={title}>
          A new contact form submission from Ruether Wedding website
        </Text>

        <Section style={section}>
          <Text style={text}>
            <strong>Name:</strong> {name}
          </Text>
          <Text style={text}>
            <strong>Email:</strong> {email}
          </Text>
          <Text style={text}>
            <strong>Message: </strong>
            {message}
          </Text>
        </Section>
        <Text style={links}>
          <Link style={link} href={"https://ruetherwedding.com"}>
            https://ruetherwedding.com
          </Link>
        </Text>
      </Container>
    </Body>
  </Html>
);

ContactFormEmail.PreviewProps = {
  name: "Jacobus",
  email: "jacobusbad@gmail.com",
  message: "Hey guys, your website sucks. asdfasdfasdf asdfasdfasdf",
} as ContactFormEmailProps;

export default ContactFormEmail;

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  maxWidth: "480px",
  margin: "0 auto",
  padding: "20px 0 48px",
};

const title = {
  fontSize: "24px",
  lineHeight: 1.25,
};

const section = {
  padding: "24px",
  border: "solid 1px #dedede",
  borderRadius: "5px",
  textAlign: "center" as const,
};

const text = {
  margin: "0 0 10px 0",
  textAlign: "left" as const,
};

const links = {
  textAlign: "center" as const,
};

const link = {
  color: "#0366d6",
  fontSize: "12px",
};
