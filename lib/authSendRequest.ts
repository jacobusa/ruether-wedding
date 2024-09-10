import { resend } from "@/lib/resend";

export const sendVerificationRequest: (params: any) => any = async (params) => {
  const { identifier, url, provider, theme } = params;
  const { host } = new URL(url);
  try {
    const data = await resend.emails.send({
      from: "Ruether Wedding <RSVP@ruetherwedding.com>",
      to: [identifier],
      subject: `RSVP Link`,
      text: text({ url, host }),
      // react: RSVPMagicLinkEmail({ url, host } as any), // can't do this in edge environment
      html: getHTML({ host, url }),
    });
    return { success: true, data };
  } catch (error) {
    console.error(error);
    // throw new Error("Failed to send the verification Email.");
    return { redirect: `${url}/error` };
  }
};

const text: (params: any) => any = ({ url, host }) => {
  return `RSVP Link to ${host}\n${url}\n\n`;
};

const getHTML = ({ host, url }: { host: string; url: string }) => {
  return `
    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="max-width:37.5em;margin:0 auto;padding:20px 25px 48px;background-position:bottom;background-repeat:no-repeat, no-repeat">
      <tbody>
        <tr style="width:100%">
          <td><img alt="Kurt and Cecile" height="200" src="https://ruetherwedding.com/images/gallery/5.jpg" style="display:block;outline:none;border:none;text-decoration:none" width="300" />
            <h1 style="font-size:28px;font-weight:bold;margin-top:48px">💍 Your RSVP link to ${host}</h1>
            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="margin:24px 0">
              <tbody>
                <tr>
                  <td>
                    <p style="font-size:16px;line-height:26px;margin:16px 0"><a href="${host}${url}" style="color:#fff;text-decoration:none;font-size:14px;background-color:#8ec2ce;line-height:1.5;border-radius:0.4em;padding:12px 24px" target="_blank">Complete your RSVP</a></p>
                    <p style="font-size:16px;line-height:26px;margin:16px 0">If you didn&#x27;t request this, please ignore this email.</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p style="font-size:16px;line-height:26px;margin:16px 0">Best,<br />- Kurt and Cecile</p>
            <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#dddddd;margin-top:48px" />
            <p style="font-size:12px;line-height:24px;margin:16px 0;color:#8898aa;margin-left:4px;margin-bottom:0px">Ruether Wedding, August 2nd 2025</p><a href="https://ruetherwedding.com" style="color:#8898aa;text-decoration:none;font-size:12px;margin-left:4px" target="_blank">https://ruetherwedding.com</a>
          </td>
        </tr>
      </tbody>
    </table>
  `;
};
