import StartCSS from "../../styles/Start.module.css";
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { doc, setDoc, getFirestore } from "firebase/firestore";

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
const provider = new GithubAuthProvider();
const auth = getAuth();
const db = getFirestore(app);

export default function Integrate() {
  const [user, setUser] = useState();
  const [theme, setTheme] = useState();

  const IntergrateWithGitHub = () => {
    console.log("IntergrateWithGitHub");
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        const users = {
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        };
        console.log(user);
        // ...
        // generate unique ID using numbers and letters
        const random = Math.random()
          .toString(36)
          .substring(2, 15)
          .toUpperCase();
        const uniqueId = `${user.uid}-${random}`;
        console.log(uniqueId);
        const usersRef = doc(db, "users", uniqueId);
        setDoc(usersRef, { UserAuthDeatils: users });

        setTimeout(() => {
          window.location.href = "http://localhost:3000/Client/client";
        }, 5000);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        // ...
      });
  };
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
                      <button onClick={IntergrateWithGitHub}>
                        Integrate With GitHub
                      </button>
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
