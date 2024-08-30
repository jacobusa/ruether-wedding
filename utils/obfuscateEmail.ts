export const obfuscateEmail = (email: string) => {
  const [username, domain] = email.split("@");

  if (username.length <= 2) {
    // If the username is 2 characters or less, return it without obfuscation
    return email;
  }

  const firstLetter = username[0];
  const lastLetter = username[username.length - 1];
  const obfuscatedMiddle = "*".repeat(username.length - 2);

  const obfuscatedUsername = `${firstLetter}${obfuscatedMiddle}${lastLetter}`;
  return `${obfuscatedUsername}@${domain}`;
};
