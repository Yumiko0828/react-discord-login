import passport from "passport";
import { Strategy } from "passport-discord";
import config from "../config/config";
import { User } from "../types/user";

passport.serializeUser<User>((user, done) => {
  done(null, user as User);
});

passport.deserializeUser<User>((obj, done) => {
  done(null, obj);
});

const discordStrat = new Strategy(
  {
    clientID: config.clientId,
    clientSecret: config.clientSecret,
    callbackURL: config.callback,
    scope: config.scopes,
  },
  (accessToken, refreshToken, profile, done) => {
    (profile as any).accessToken = accessToken;
    (profile as any).refreshToken = refreshToken;

    process.nextTick(() => {
      done(null, profile);
    });
  }
);

passport.use(discordStrat);
