import StartCSS from "../../styles/Start.module.css";
import { useState } from "react";
export default function Integrate() {
  const [theme, setTheme] = useState();
  return (
    <div className={StartCSS.Start}>
      <div className={StartCSS.container}>
        <div className={StartCSS.content}>
          <div className={StartCSS.header}>
            <div className={StartCSS.header_content}>
              <h1>
                Integrate Your <span>App</span>
              </h1>
              <p>
                You can start integrating your app with Oli in seconds. This
                will help you to build your application faster, and also helps
                you to get the most out of your application.
              </p>
              <div className={StartCSS.integrationDIv}>
                <div className={StartCSS.integration}>
                  <div className={StartCSS.App_Integrate}>
                    {/* gitHub fontAwesome */}
                    <div className={StartCSS.flexEnd}>
                      <i className="fab fa-github"></i>
                      <div className={StartCSS.ctext}>GitHub</div>
                    </div>
                    <div className={StartCSS.integtate_button}>
                      <button>Integrate With GitHub</button>
                    </div>
                  </div>
                  {/*  */}
                  <div className={StartCSS.App_Integrate}>
                    {/* slack fontawesome */}
                    <div className={StartCSS.flexEnd}>
                      <i className="fab fa-slack"></i>
                      <div className={StartCSS.ctext}>Slack</div>
                    </div>
                    <div className={StartCSS.integtate_button}>
                      <button>Integrate With Slack</button>
                    </div>
                  </div>
                  {/*  */}
                  <div className={StartCSS.App_Integrate}>
                    {/* Discord fontawesome */}
                    <div className={StartCSS.flexEnd}>
                      <i className="fab fa-discord"></i>
                      <div className={StartCSS.ctext}>Disocrd</div>
                    </div>
                    <div className={StartCSS.integtate_button}>
                      <button>Integrate With Discord</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={StartCSS.themeBtn}>
        <button
          className={StartCSS.themeBtn_button}
          onClick={() => {
            const container = document.querySelector(".Start_container__iM_PV");
            const para = document.querySelector(
              ".Start_header_content__xDtAe p"
            );
            const intApp = document.querySelectorAll(".Start_ctext__iUDTS");
            const headerContent = document.querySelector(
              ".Start_header_content__xDtAe h1"
            );
            setTheme(!theme);
            console.log(theme);

            if (theme === true) {
              container.style.backgroundColor = "#1A1F2E";
              para.style.color = "#fff";
              headerContent.style.color = "#fff";
              intApp.forEach((element) => {
                element.style.color = "#fff";
              });
              document.querySelector("body").style.backgroundColor = "#29314A";
            } else {
              container.style.backgroundColor = "#fdfdff";
              para.style.color = "#636363";
              headerContent.style.color = "#000";
              intApp.forEach((element) => {
                element.style.color = "black";
              });
              document.querySelector("body").style.backgroundColor = "#f0f0f2";
            }
          }}
        >
          <span className={StartCSS.themeBtn_button_text}>
            <i className="fa-light fa-gears"></i> Change Theme
          </span>
        </button>
      </div>
    </div>
  );
}
