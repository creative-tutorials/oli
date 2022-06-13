import { useState, useEffect, useRef } from "react";
import Link from "next/link";

import cssbot from "../../styles/🤖Generate.module.css";
export default function Genrate() {
  const [theme, setTheme] = useState();
  useEffect(() => {
    const linksoflink = document.querySelector(
      ".__Generate_lists__Njc_m .__Generate_list__VbABD"
    );
    return () => {
      checkApproved();
    };
  }, []);
  const checkApproved = () => {
    const fetchLocalStorage = localStorage.getItem("projectname");
    if (fetchLocalStorage) {
      checkApproved();
    } else {
      console.log("not approved");
      const generateApp = document.querySelector(
        ".__Generate_generateApp__gAjjU"
      );
      generateApp.style.display = "none";
    }
    function checkApproved() {
      console.log("approved");
      const generateApp = document.querySelector(
        ".__Generate_generateApp__gAjjU"
      );
      generateApp.style.display = "flex";
    }

    //
    //
    if (fetchLocalStorage === "todoapp") {
      //? if todoapp is in local storage
      getTodoAppLoaded(); //* fetching the todo app from GitHub Repo.

      // get api request

      async function getTodoAppLoaded() {
        const response = await fetch("http://localhost:3000/api/route");
        const data = await response.json();
        console.log(data);
        localStorage.setItem("todoapp", JSON.stringify(data));

        const linksoflink = document.querySelector(".__Generate_list__VbABD");
        const createApp = document.createElement("div");
        linksoflink.appendChild(createApp);
        // createApp.className = cssbot.list_items;
        createApp.innerHTML = `<div class=${cssbot.list_items}>
        <h2>Todo App</h2>
        <p>
          This is the Todo App. You can add tasks to the list and you
          can delete tasks from the list.
        </p>
          <a class=${cssbot.link} href=${
          data.TodoApp.GitHubRepoLink
        } target=${"_blank"}>
            <button class=${cssbot.button}>
              <span class=${cssbot.button_text}>View Todo App</span>
            </button>
          </a>
      </div>`;
      }
    }
    if (fetchLocalStorage === "weatherapp") {
      //? if weatherapp is in local storage
      getWeatherAppLoaded(); //* fetching the weather app from GitHub Repo.

      // get api request

      async function getWeatherAppLoaded() {
        const response = await fetch("http://localhost:3000/api/route");
        const data = await response.json();
        console.log(data);
        localStorage.setItem("todoapp", JSON.stringify(data));
        const linksoflink = document.querySelector(".__Generate_list__VbABD");
        const createApp = document.createElement("div");
        // createApp.className = cssbot.list_items;
        createApp.innerHTML = `<div class=${cssbot.list_items}>
        <h2>Todo App</h2>
        <p>
          This is the Todo App. You can add tasks to the list and you
          can delete tasks from the list.
        </p>
          <a class=${cssbot.link}>
            <button class=${cssbot.button}>
              <span class=${cssbot.button_text}>View Todo App</span>
            </button>
            </a>
            </div>`;
        linksoflink.appendChild(createApp);
      }
    }
    if (fetchLocalStorage === "calculatorapp") {
      getCalculatorAppLoaded(); //* fetching the calculator app from GitHub Repo.
    }
    if (fetchLocalStorage === "calendarapp") {
      getCalendarAppLoaded(); //* fetching the calendar app from GitHub Repo.
    }
  };
  return (
    <div className={cssbot.generateApp}>
      <div className={cssbot.identify}>
        <div className={cssbot.identify_content}>
          <h1>Welcome to Generate Page ✨</h1>
          <p className={cssbot.para}>
            This is the Generate Page. Here you can find all the apps that you
            have created.
          </p>
          <div className={cssbot.lists}>
            <div className={cssbot.list}>
              {/* <div className={cssbot.list_items}>
                <h2>Todo App</h2>
                <p>
                  This is the Todo App. You can add tasks to the list and you
                  can delete tasks from the list.
                </p>
                <Link href="/a">
                  <a className={cssbot.link}>
                    <button className={cssbot.button}>
                      <span className={cssbot.button_text}>View Todo App</span>
                    </button>
                  </a>
                </Link>
              </div> */}
              {/* <div className={cssbot.list_items}>
                <h2>Weather App</h2>
                <p>
                  This is the Weather App. You can see the weather of the
                  current location. You can also see the weather of any other
                  location.
                </p>
                <Link href="/a">
                  <a className={cssbot.link}>
                    <button className={cssbot.button}>
                      <span className={cssbot.button_text}>
                        View Weather App
                      </span>
                    </button>
                  </a>
                </Link>
              </div> */}
              {/* <div className={cssbot.list_items}>
                <h2>Calculator App</h2>
                <p>
                  This is the Calculator App. You can use this app to do
                  calculations.
                </p>
                <Link href="/a">
                  <a className={cssbot.link}>
                    <button className={cssbot.button}>
                      <span className={cssbot.button_text}>
                        View Calculator App
                      </span>
                    </button>
                  </a>
                </Link>
              </div> */}
              {/* <div className={cssbot.list_items}>
                <h2>Calendar App</h2>
                <p>
                  This is the Calendar App. You can use this app to see the
                  current date and time.
                </p>
                <Link href="/a">
                  <a className={cssbot.link}>
                    <button className={cssbot.button}>
                      <span className={cssbot.button_text}>
                        View Calendar App
                      </span>
                    </button>
                  </a>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
        <div className={cssbot.footer}>
          <div className={cssbot.footer_content}>
            <div className={cssbot.footerHeader}>
              <h1>Oli</h1>
              <p>
                Thanks for choosing Oli. This is the Generate Page. Here you can
                find all the apps that you have created.
              </p>
            </div>
            <div className={cssbot.footer_flex}>
              <div className={cssbot.footer_flex_item}>
                <div className={cssbot.footerItemsof1}>
                  <div className={cssbot.footerItemsof1Header}>
                    <h2>About Oli</h2>
                  </div>
                  <Link href="/">
                    <a className={cssbot.link}>About</a>
                  </Link>

                  <Link href="/">
                    <a className={cssbot.link}>Contact</a>
                  </Link>

                  <Link href="/">
                    <a className={cssbot.link}>Privacy Policy</a>
                  </Link>

                  <Link href="/">
                    <a className={cssbot.link}>Terms of Service</a>
                  </Link>
                </div>

                <div className={cssbot.footerItemsof2}>
                  <div className={cssbot.footerItemsof2Header}>
                    <h2>Contact us using the Following</h2>
                  </div>

                  <Link href="/">
                    <a className={cssbot.link}>
                      <i className="fab fa-facebook-square"></i>
                    </a>
                  </Link>

                  <Link href="/">
                    <a className={cssbot.link}>
                      <i className="fab fa-twitter-square"></i>
                    </a>
                  </Link>

                  <Link href="/">
                    <a className={cssbot.link}>
                      <i className="fab fa-instagram"></i>
                    </a>
                  </Link>

                  <Link href="/">
                    <a className={cssbot.link}>
                      {/* github fontawesome */}
                      <i className="fab fa-github-square"></i>
                    </a>
                  </Link>

                  <Link href="/">
                    <a className={cssbot.link}>
                      {/* discord fontawesome */}
                      <i className="fab fa-discord"></i>
                    </a>
                  </Link>

                  <Link href="/">
                    <a className={cssbot.link}>
                      {/* YouTube fontawesome */}
                      <i className="fab fa-youtube"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cssbot.themeBtn}>
        <button
          className={cssbot.themeBtn_button}
          onClick={() => {
            const generateApp = document.querySelector(
              ".__Generate_identify__tRT_C"
            );
            const para = document.querySelector(".__Generate_para__4aLia");
            const listofItems = document.querySelectorAll(
              ".__Generate_list_items__dn_67"
            );
            setTheme(!theme);
            console.log(theme);

            if (theme === true) {
              generateApp.style.backgroundColor = "#1A1F2E";
              generateApp.style.color = "#fff";
              para.style.color = "#fff";
              listofItems.forEach((element) => {
                element.style.backgroundColor = "#1A1F2E";
              });
              document.querySelector("body").style.backgroundColor = "#29314A";
            } else {
              generateApp.style.backgroundColor = "#fdfdff";
              generateApp.style.color = "black";
              para.style.color = "#636363";
              listofItems.forEach((element) => {
                element.style.backgroundColor = "#EDF2FF";
              });
              document.querySelector("body").style.backgroundColor = "#f0f0f2";
            }
          }}
        >
          <span className={cssbot.themeBtn_button_text}>
            <i className="fa-light fa-gears"></i> Change Theme
          </span>
        </button>
      </div>
    </div>
  );
}
