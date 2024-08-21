import { resend } from "@/lib/resend";
import RSVPMagicLinkEmail from "@/emails/rsvp-magic-link";

export const sendVerificationRequest: (params: any) => any = async (params) => {
  const { identifier, url, provider, theme } = params;
  const { host } = new URL(url);

  try {
    const data = await resend.emails.send({
      from: "Ruether Wedding <RSVP@ruetherwedding.com>",
      to: [identifier],
      subject: `RSVP Link to ${host}`,
      text: text({ url, host }),
      react: RSVPMagicLinkEmail({ url, host } as any),
    });
    return { success: true, data };
  } catch (error) {
    throw new Error("Failed to send the verification Email.");
  }
};

const text: (params: any) => any = ({ url, host }) => {
  return `RSVP Link to ${host}\n${url}\n\n`;
};
