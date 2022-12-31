import Ctrl from "../utils/Ctrl";

export const Callback = Ctrl((req, res) => {
  res.redirect("http://localhost:3001");
});

export const Verify = Ctrl((req, res) => {
  res.status(200).json({
    authenticated: req.isAuthenticated(),
  });
});
