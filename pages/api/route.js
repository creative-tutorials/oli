// Next.js API Server
export default function NextAPI(req, res) {
  // block the request if the method is not GET
  if (req.method !== "GET") {
    // if the request method is not GET
    res
      .status(405)
      .send("❌ Method Not Allowed because the request method is not GET"); // send a 405 error
  } else {
    // send response to the body
    res.status(200).send({
      Welcome: {
        HeaderMessage: "Welcome To OLI API Server",
        BodyMessage:
          "This is the API Server for OLI, Oli is a powerful AI platform that helps you build your applications faster.",
        age: 24,
        hobbies: ["🎯", "🎮", "👩‍💻"],
        gender: "Robot",
        contribution: ["https://github.com"],
      },
      TodoApp: {
        GitHubRepoLink:
          "https://github.com/creative-tutorials/Task-Managemnt-App",
      },
    });
  }
}
