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
        contribution: ["https://github.com"]
      },
      TodoApp: {
        random: [
          "https://github.com/creative-tutorials/Task-Managemnt-App",
          "https://github.com/CITGuru/todoapp",
          "https://github.com/deven98/TODOAppUI",
          "https://github.com/KalleHallden/TodoApp",
          "https://github.com/isisaddons/isis-app-todoapp",
          "https://github.com/Rajesh-Royal/React-Js-Todo-App-with-firebase-auth"
        ]
      },
      WeatherApp: {
        random: [
          "https://github.com/eddydn/WeatherApp",
          "https://github.com/furkanaskin/Weatherapp",
          "https://github.com/devcrux/WeatherApp",
          "https://github.com/brianadvent/WeatherApp",
          "https://github.com/somteacodes/weatherapp",
          "https://github.com/tushar821999/WeatherApp"
        ]
      },
      CalculatorApp: {
        random: [
          "https://github.com/anubhavshrimal/CalculatorApp",
          "https://github.com/EmmanuelJoshua/CalculatorApp",
          "https://github.com/eranbetzalel/CalculatorApp",
          "https://github.com/prakhar8922/calculatorAPP",
          "https://github.com/takafumir/CalculatorApp",
          "https://github.com/Ankit-kumar19/Calculator"
        ]
      },
      CalendarApp: {
        random: [
          "https://github.com/richardtop/CalendarApp",
          "https://github.com/Klerith/MERN-Calendar-Front",
          "https://github.com/treebearjason/calendarapp",
          "https://github.com/Weeraponak/Calendarproject",
          "https://github.com/MertCelik0/CalendarApp",
          "https://github.com/alexscoelho/CalendarApp-"
        ]
      }
    });
  }
}
