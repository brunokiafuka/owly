import React from "react";
import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/hero.svg";
import teachIcon from "../../assets/images/icons/teach.svg";
import "./styles.css";

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Owly" />
          <h2>Owly é um POS simples para o seu negócio</h2>
        </div>

        <img
          src={landingImg}
          alt="Platforma de estudos"
          className="hero-image"
        />

        <div className="buttons-container">
          <a
            className="study typeform-share button"
            href="https://form.typeform.com/to/em5JwO"
            data-mode="popup"
            target="_blank"
          >
            Ganhar Acesso{" "}
          </a>
          {/*  <a href="/study" className="study">
            <img src={teachIcon} alt="Estudar" />
            Ganhar Acesso
          </a> */}
        </div>

        {/*  <span className="total-connections">
          Faça parte dos nossos primeiros usuários
        </span> */}
      </div>
    </div>
  );
}

export default Landing;
