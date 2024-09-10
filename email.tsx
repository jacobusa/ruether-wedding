import { render } from "@react-email/render";
import RSVPMagicLinkEmail from "@/emails/rsvp-magic-link";

export const getMagicLinkHTML = async ({
  host,
  url,
}: {
  url: string;
  host: string;
}) => {
  const html = await render(<RSVPMagicLinkEmail url={url} host={host} />, {
    pretty: true,
  });

  return html;
};
