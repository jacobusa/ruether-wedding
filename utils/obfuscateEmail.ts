export const obfuscateEmail = (email: string) => {
  // Split the email into two parts: before and after the '@' symbol
  const [localPart, domain] = email.split("@");

  // Determine how many characters to obfuscate
  const obfuscationLength = Math.max(localPart.length - 5, 0);

  // Create the obfuscated local part
  const obfuscatedLocalPart =
    localPart.slice(0, 4) + "*".repeat(obfuscationLength);

  // Recombine the obfuscated local part with the domain
  return `${obfuscatedLocalPart}@${domain}`;
};
