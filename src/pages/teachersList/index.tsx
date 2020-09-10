import React from "react";
import whatsApp from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";
import Header from "../../components/PageHeader";

function TeachersList() {
  return (
    <div id="page-teacher-list" className="container">
      <Header title="Estes são os proffys disponiveis">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Materia</label>
            <input type="text" name="" id="subject" />
          </div>
          <div className="input-block">
            <label htmlFor="week_day">Dia da Semana</label>
            <input type="text" name="" id="week_day" />
          </div>
          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" name="" id="time" />
          </div>
        </form>
      </Header>

      <main>
        <article className="teacher-item">
          <header>
            <img
              src="https://avatars0.githubusercontent.com/u/12303468?s=460&u=241b4984fae38611d45791610297540a2f7462f4&v=4"
              alt="Bruno"
            />
            <div>
              <strong>Bruno Kiafuka</strong>
              <span>Math</span>
            </div>
          </header>

          <p>
            Id consequat consectetur eu nisi non aliquip voluptate velit tempor
            nostrud consequat. Aliquip id ex tempor excepteur aliquip in non
            anim.
            <br /> <br />
            Incididunt mollit nulla enim labore. Duis voluptate ea Lorem
            deserunt velit sint. Sit Lorem reprehenderit nulla velit velit do
            enim dolore dolor ad mollit ipsum. Culpa nostrud aliqua voluptate do
            mollit minim laborum sunt velit incididunt minim nisi. Nulla non
            voluptate eiusmod eu velit occaecat aute do fugiat.
          </p>

          <footer>
            <p>
              Preço por hora <strong>R30</strong>
            </p>
            <button type="button">
              <img src={whatsApp} alt="whatz" />
              Entrar em contacto
            </button>
          </footer>
        </article>
      </main>
    </div>
  );
}

export default TeachersList;
