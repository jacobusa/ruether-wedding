import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface RSVPMagicLinkEmailProps {
  url?: string;
  host?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "https://ruetherwedding.com";

export const RSVPMagicLinkEmail = ({ url, host }: RSVPMagicLinkEmailProps) => (
  <Html>
    <Head />
    <Preview>Here is your RSVP Link.</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`${baseUrl}/images/gallery/5.jpg`}
          width={300}
          height={200}
          alt="Kurt and Cecile"
        />
        <Heading style={heading}>💍 Your RSVP link to {host}</Heading>

        <Section style={body}>
          <Text style={paragraph}>
            <Link style={button} href={url}>
              Complete your RSVP
            </Link>
          </Text>
          <Text style={paragraph}>
            If you didn&apos;t request this, please ignore this email.
          </Text>
        </Section>
        <Text style={paragraph}>
          Best,
          <br />- Kurt and Cecile
        </Text>
        <Hr style={hr} />
        <Text style={footer}>Ruether Wedding, August 2nd 2025</Text>
        <Link style={websiteLink} href={"https://ruetherwedding.com"}>
          https://ruetherwedding.com
        </Link>
      </Container>
    </Body>
  </Html>
);

RSVPMagicLinkEmail.PreviewProps = {
  url: "https://ruetherwedding.com",
  host: "ruetherwedding.com",
} as RSVPMagicLinkEmailProps;

export default RSVPMagicLinkEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 25px 48px",
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat, no-repeat",
};

const heading = {
  fontSize: "28px",
  fontWeight: "bold",
  marginTop: "48px",
};

const body = {
  margin: "24px 0",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const button = {
  fontSize: "14px",
  backgroundColor: "#bf896b",
  color: "#fff",
  lineHeight: 1.5,
  borderRadius: "0.4em",
  padding: "12px 24px",
};

const websiteLink = {
  color: "#8898aa",
  fontSize: "12px",
  marginLeft: "4px",
};

const hr = {
  borderColor: "#dddddd",
  marginTop: "48px",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  marginLeft: "4px",
  marginBottom: "0px",
};
