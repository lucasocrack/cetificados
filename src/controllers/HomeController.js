class HomeController {
  async index(req, res) {
    res.json({
      message: "Hello World",
      test: "aproved!"
    });
  }
}

export default new HomeController();