import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { User } from './entity/User'; // Adjust the path based on your setup

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID, 
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback', 
    },
    async (accessToken, refreshToken, profile, done) => {
      try {

        let user = await User.findOne({ where: { email: profile.emails[0].value } });
        
       
        if (!user) {
          user = User.create({
            name: profile.displayName,
            email: profile.emails[0].value,
            password: '', 
          });
          await user.save();
        }

   
        done(null, user);
      } catch (error) {
        done(error, null);
      }
    }
  )
);


passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  const user = await User.findOne({ where: { id } });
  done(null, user);
});
