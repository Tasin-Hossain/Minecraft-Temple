export const verificationEmail = ({ name, verifyUrl }) => {
  return {
    subject: "Verify your email",
    text: `Hello ${name}, please verify your email by visiting: ${verifyUrl}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height:1.4;">
        <h2>Welcome ${name} 👋</h2>
        <p>Thanks for registering. Please verify your email by clicking the button below:</p>
        <p style="text-align:center;">
          <a href="${verifyUrl}" style="display:inline-block;padding:10px 18px;background:#2563eb;color:#fff;border-radius:6px;text-decoration:none;">Verify Email</a>
        </p>
        <p>If button doesn't work, copy-paste this link: <br/><code>${verifyUrl}</code></p>
        <hr/>
        <small>If you didn't sign up, ignore this email.</small>
      </div>
    `,
  };
};

export const welcomeEmail = ({ name }) => ({
  subject: "Welcome to BuiltByBit Clone 🎉",
  text: `Welcome ${name}! Thanks for joining.`,
  html: `<p>Welcome <strong>${name}</strong>! We're glad you're here.</p>`,
});

export const passwordResetEmail = ({ name, resetUrl }) => ({
  subject: "Reset your password",
  text: `Reset your password: ${resetUrl}`,
  html: `<p>Hi ${name}, click <a href="${resetUrl}">here</a> to reset your password. If you didn't request this, ignore.</p>`,
});
