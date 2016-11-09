export const reqNoSlash = (req, res, next)  => {
  if (req.url.substr(-1) == '/' && req.url.length > 1) {
    res.redirect(301, req.url.slice(0, -1));
  } else {
    next();
  }
};

export const reqtoLowerCase = (req, res, next)  => {
  if (/[A-Z]/.test(req.url)) {
    res.redirect(301, req.url.toLowerCase());
  } else {
    next();
  }
};
