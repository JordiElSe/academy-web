import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Action Required: Please Confirm Your Email Address",
    html: `
    <head>
        <title>Email Verification</title>
        <style>
            body {
                font-family: 'Arial', sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f4f4f4;
            }
            .container {
                max-width: 600px;
                margin: 20px auto;
                background: #ffffff;
            }
            .logo-header {
                background: #eeeeee;
                padding: 10px;
                text-align: center;
            }
            .logo-header img {
                height: 50px; /* Adjust as needed */
            }
            .content {
                padding: 20px;
                text-align: center;
            }
            .footer {
                background: #eeeeee;
                text-align: center;
                padding: 10px;
                font-size: 12px;
            }
        </style>
      </head>
      <body>
          <div class="container">
              <div class="logo-header">
                  <!-- Replace 'logo.png' with the path to your company logo -->
                  <!-- <img src="logo.png" alt="Company Logo"> -->
                  <div>Logo</div>
              </div>
              <div class="content">
                  <h1>Welcome to [Your Company Name]!</h1>
                  <p>Please confirm your email address by clicking the button below.</p>
                  <a href="${confirmLink}" 
                    style="
                      display: inline-block; 
                      padding: 10px 20px; 
                      margin: 20px 0; 
                      background-color: #0056b3; 
                      color: #FFFFFF; 
                      text-decoration: none; 
                      border-radius: 5px; 
                      font-weight: bold;
                    ">
                    Verify Email
                  </a>
              </div>
              <div class="footer">
                  &copy; [Year] [Your Company Name]. All rights reserved.
              </div>
          </div>
      </body>
      `,
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Reset your password",
    html: `
        <head>
          <title>Password Reset</title>
          <style>
              body {
                  font-family: 'Arial', sans-serif;
                  margin: 0;
                  padding: 0;
                  background-color: #f4f4f4;
              }
              .container {
                  max-width: 600px;
                  margin: 20px auto;
                  background: #ffffff;
              }
              .logo-header {
                  background: #eeeeee;
                  padding: 10px;
                  text-align: center;
              }
              .logo-header img {
                  height: 50px; /* Adjust as needed */
              }
              .content {
                  padding: 20px;
                  text-align: center;
              }
              .footer {
                  background: #eeeeee;
                  text-align: center;
                  padding: 10px;
                  font-size: 12px;
              }
          </style>
        </head>
        <body>
            <div class="container">
                <div class="logo-header">
                    <!-- Replace 'logo.png' with the path to your company logo -->
                    <!-- <img src="logo.png" alt="Company Logo"> -->
                    <div>Logo</div>
                </div>
                <div class="content">
                    <h1>Password Reset Request</h1>
                    <p>We received a request to reset your password. Click the button below to set a new password.</p>
                    <p>If you did not request this, you can safely ignore this email.</p>
                    <a href="${resetLink}" 
                      style="
                        display: inline-block; 
                        padding: 10px 20px; 
                        margin: 20px 0; 
                        background-color: #0056b3; 
                        color: #FFFFFF; 
                        text-decoration: none; 
                        border-radius: 5px; 
                        font-weight: bold;
                      ">
                      Reset Password
                    </a>
                </div>
                <div class="footer">
                    &copy; [Year] [Your Company Name]. All rights reserved.
                </div>
            </div>
        </body>
      `,
  });
};

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Two-factor Authentication Code",
    html: `
    <head>
          <title>One-time Authentication Code</title>
          <style>
              body {
                  font-family: 'Arial', sans-serif;
                  margin: 0;
                  padding: 0;
                  background-color: #f4f4f4;
              }
              .container {
                  max-width: 600px;
                  margin: 20px auto;
                  background: #ffffff;
              }
              .logo-header {
                  background: #eeeeee;
                  padding: 10px;
                  text-align: center;
              }
              .logo-header img {
                  height: 50px; /* Adjust as needed */
              }
              .content {
                  padding: 20px;
                  text-align: center;
              }
              .footer {
                  background: #eeeeee;
                  text-align: center;
                  padding: 10px;
                  font-size: 12px;
              }
          </style>
        </head>
        <body>
            <div class="container">
                <div class="logo-header">
                    <!-- Replace 'logo.png' with the path to your company logo -->
                    <!-- <img src="logo.png" alt="Company Logo"> -->
                    <div>Logo</div>
                </div>
                <div class="content">
                    <h1>2FA Code</h1>
                    <p>Here is your two-factor authentication code:</p>
                    <p style="font-size: 24px; font-weight: bold; color: #4F4F4F;">${token}</p>
                    <p>Please enter this code to complete your sign-in. The code is valid for 10 minutes but you can request a new one if needed by logging in again.</p>
                    <p style="font-size: 16px; font-weight: bold">Don't recognize this activity?</p>
                    <p>If you didn't request this code, someone else might be trying to access your account. Please follow <a href="/">these instructions</a> immediately to make sure your account is safe.</p>
                </div>
                <div class="footer">
                    &copy; [Year] [Your Company Name]. All rights reserved.
                </div>
            </div>
        </body>
    `,
  });
};
