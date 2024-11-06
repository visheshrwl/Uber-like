import express from 'express';
import passport from 'passport';

const router = express.Router();


router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));


router.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    
    res.redirect('/dashboard'); 
  }
);


router.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) return next(err);
    res.redirect('/');
  });
});

export default router;
