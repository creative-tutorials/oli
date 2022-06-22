import clientcss from "../../styles/🙋‍♂️clientcss.module.css";
import Link from "next/link";
import Image from "next/image";
import Oli_Logo from "../../image/Copy_of_OlI-removebg-preview.png";
import { useEffect, useRef, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function Client() {
  const input = useRef();
  const [theme, setTheme] = useState();
  useEffect(() => {
    const commadsBox = document.querySelector(
      "._____clientcss_commands___ce2q"
    );

    return () => {};
  }, []);

  const publishGitHub = (e) => {};
  const openCommandPannel = (e) => {};
  const openTerminal = (e) => {};
  const createNewProject = (e) => {
    const focusInput = input.current.focus();
  };
  const createProject = (e) => {
    const getinput = input.current.value;
    //? return getinput to lowercase
    const getinputlowercase = getinput.toLowerCase();

    input.current.value = getinputlowercase;

    if (getinputlowercase === "") {
      alert("Please enter a project name");
    } else {
      return startApplication();
    }

    function startApplication() {
      // get date
      const date = new Date();
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      const milliseconds = date.getMilliseconds();

      const time = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
      const fullDate = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}.${milliseconds}`;
      const newProject = {
        name: getinputlowercase,
        description: "",
        date_Time: `${fullDate}`,
      };
      console.log(newProject);

      //   generate random number + characters
      const random = Math.random().toString(36).substring(3);
      console.log(random);
      const setProject = doc(db, "Projects", random);
      setDoc(setProject, { ProjectInfo: newProject });

      // console log the project name
      console.log(getinputlowercase);

      alert(`Hurray Your ${getinputlowercase} is ready 🔥`);

      localStorage.setItem("projectname", getinputlowercase);

      setTimeout(() => {
        // window location href target blank
        window.open("http://localhost:3000/Client/Generate");
      }, 3000);
    }
  };
  return (
    <div className={clientcss.container}>
      <div className={clientcss.wrapper}>
        <div className={clientcss.content}>
          {/* 🧕 Header */}
          <div className={clientcss.header}>
            <div className={clientcss.header_content}>
              {/* 👓 Logo  */}
              <div className={clientcss.logo}>
                <Image src={Oli_Logo} alt="Oli Logo" width={100} height={100} />
              </div>
              {/* 🔗 Links */}
              <div className={clientcss.links_of_link}>
                <Link href="/">
                  <a>Home</a>
                </Link>

                <Link href="/">
                  <a>About</a>
                </Link>

                <Link href="/">
                  <a>Contact</a>
                </Link>

                <Link href="/">
                  <a>Blog</a>
                </Link>

                <Link href="/">
                  <a>Pricing</a>
                </Link>

                <Link href="/">
                  <a>API</a>
                </Link>

                <Link href="/">
                  <a>Docs</a>
                </Link>
              </div>
            </div>
          </div>
          {/* 💪 Body */}
          <div className={clientcss.body}>
            <div className={clientcss.body_content}>
              <div className={clientcss.bodywrapcontent}>
                <div className={clientcss.textInput}>
                  <input
                    type="text"
                    placeholder="What's the name of your project?"
                    ref={input}
                  />
                  <button className={clientcss.push} onClick={createProject}>
                    <span>Create</span>
                  </button>
                </div>
                {/* ⌨ CommandTabs */}
                <div className={clientcss.commandTabs}>
                  <div
                    className={clientcss.commands}
                    onClick={openCommandPannel}
                  >
                    <i className="fa-regular fa-command"></i>
                    <div className={clientcss.commandsTxt}>
                      Open Command Pannel
                    </div>
                  </div>
                  {/*  */}
                  <div className={clientcss.commands} onClick={openTerminal}>
                    <i className="fa-regular fa-terminal"></i>
                    <div className={clientcss.commandsTxt}>Open Terminal</div>
                  </div>
                  {/*  */}
                  <div
                    className={clientcss.commands}
                    onClick={createNewProject}
                  >
                    <i className="fa-regular fa-plus"></i>
                    <div className={clientcss.commandsTxt}>
                      Create New Project
                    </div>
                  </div>
                  {/*  */}
                  <div className={clientcss.commands} onClick={publishGitHub}>
                    <i className="fa-brands fa-github"></i>
                    <div className={clientcss.commandsTxt}>
                      Publish to GitHub
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={clientcss.themeBtn}>
        <button
          className={clientcss.themeBtn_button}
          onClick={() => {
            const links_of_link = document.querySelectorAll(
              "._____clientcss_links_of_link__SuJIg a"
            );
            const cssBody = document.querySelector(
              "._____clientcss_body__bpGUo"
            );
            const header = document.querySelector(
              "._____clientcss_header__uYR36"
            );
            const button = document.querySelector("button");
            setTheme(!theme);
            console.log(theme);

            if (theme === true) {
              header.style.backgroundColor = "#1A1F2E";
              links_of_link.forEach((element) => {
                element.style.color = "#fff";
              });
              cssBody.style.backgroundColor = "#1A1F2E";
              button.style.backgroundColor = "#5F6BF1";
              document.querySelector("body").style.backgroundColor = "#29314A";
            } else {
              header.style.backgroundColor = "#fff";
              links_of_link.forEach((element) => {
                element.style.color = "black";
              });
              cssBody.style.backgroundColor = "#fff";
              button.style.backgroundColor = "#000";
              document.querySelector("body").style.backgroundColor = "#f0f0f2";
            }
          }}
        >
          <span className={clientcss.themeBtn_button_text}>
            <i className="fa-light fa-gears"></i> Change Theme
          </span>
        </button>
      </div>
    </div>
  );
}
