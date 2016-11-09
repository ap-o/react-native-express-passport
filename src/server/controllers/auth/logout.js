/**
 * POST /logout
 */
export default (req, res) => {
  req.logout();
  res.redirect('/');
}
