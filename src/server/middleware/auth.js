export const ensureAuthenticated = (req, res, next)  => {
  if(!req.user){
    return res.sendStatus(401);
  } else{
    next();
  }
};
