import { render } from "@react-email/render";
import RSVPMagicLinkEmail from "@/emails/rsvp-magic-link";

export const getHTML = async () => {
  const html = await render(<RSVPMagicLinkEmail url="asdfasdf" host="asdf" />, {
    pretty: true,
  });

  console.log(html);
};
