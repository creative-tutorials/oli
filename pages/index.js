import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState();
  return (
    <div className={styles.Home}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              {/* 🎯 Header Text */}
              <h1>
                Welcome to <span>Oli</span>
              </h1>
              <p>
                Oli is a powerful AI platform that helps you build your
                applications faster.
              </p>
              {/* --🔲 Button Here-- */}
              <Link href="/Content/Start">
                <a>
                  <button> Get Started </button>
                </a>
              </Link>
              <div className={styles.footer}>
                <div className={styles.footer_content}>
                  {/* 🔗 Footer Links */}
                  <div className={styles.footer_links}>
                    <Link href="/api/route">
                      <a>
                        <p>
                          <span>API</span>
                        </p>
                      </a>
                    </Link>

                    <Link href="/api/route">
                      <a>
                        <p>
                          <span>Docs</span>
                        </p>
                      </a>
                    </Link>

                    <Link href="/api/route">
                      <a>
                        <p>
                          <span>Blog</span>
                        </p>
                      </a>
                    </Link>

                    <Link href="/api/route">
                      <a>
                        <p>
                          <span>Pricing</span>
                        </p>
                      </a>
                    </Link>

                    <Link href="/api/route">
                      <a>
                        <p>
                          <span>Support</span>
                        </p>
                      </a>
                    </Link>
                  </div>
                  {/* © Footer Credits */}
                  <div className={styles.footer_credits}>
                    <p>
                      <span>Copyright © 2020 Oli</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.themeBtn}>
        <button
          className={styles.themeBtn_button}
          onClick={() => {
            const container = document.querySelector(".Home_container__bCOhY");
            const para = document.querySelector(".Home_cardContent__p_dOW p");
            const footerLinks = document.querySelectorAll(
              ".Home_footer_links__KVOU2 span"
            );
            const headerContent = document.querySelector(
              ".Home_cardContent__p_dOW h1"
            );
            setTheme(!theme);
            console.log(theme);

            if (theme === true) {
              container.style.backgroundColor = "#1A1F2E";
              para.style.color = "#fff";
              headerContent.style.color = "#fff";
              footerLinks.forEach((element) => {
                element.style.color = "#fff";
              });
              document.querySelector("body").style.backgroundColor = "#29314A";
            } else {
              container.style.backgroundColor = "#fdfdff";
              para.style.color = "#636363";
              headerContent.style.color = "#000";
              footerLinks.forEach((element) => {
                element.style.color = "#636363";
              });
              document.querySelector("body").style.backgroundColor = "#f0f0f2";
            }
          }}
        >
          <span className={styles.themeBtn_button_text}>
            <i className="fa-light fa-gears"></i> Change Theme
          </span>
        </button>
      </div>
    </div>
  );
}
