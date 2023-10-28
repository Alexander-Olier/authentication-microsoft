import passport from "passport";
import { Strategy as MicrosoftStrategy } from "passport-microsoft";
import { config } from "dotenv";

config();

passport.use(
  "auth-microsoft",
  new MicrosoftStrategy(
    {
      clientID: "3a0cfd2a-e740-4e56-920b-0079fb9dc2eb",
      clientSecret: "AhH8Q~re7XzMHUySWY3e3-undK41Co6E0SofAbDX",
      callbackURL: "http://localhost:3000/auth/microsoft/callback",
      scope: [
        "Files.ReadWrite",
        "offline_access",
        "openid",
        "profile",
        "User.Read",
      ],
      authorizationURL:
        "https://login.microsoftonline.com/common/oauth2/v2.0/authorize",
      tokenURL: "https://login.microsoftonline.com/common/oauth2/v2.0/token",
    },
    function (accessToken, refreshToken, profile, done) {
      console.log(accessToken);
      done(null, { accessToken, profile, refreshToken });
    }
  )
);
