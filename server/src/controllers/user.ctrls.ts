import Ctrl from "../utils/Ctrl";

export const me = Ctrl(async (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (err) {
    console.error(err);
    res.status(500).json(err.message);
  }
});
