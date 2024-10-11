import "./DescriptionYouWillReceive.css";

export const DescriptionYouWillReceive = () => {
  return (
    <div className="descriptionYouWillReceive">
      <h1 className="description-title">В ШКОЛЕ ВЫ ПОЛУЧИТЕ</h1>

      <div className="youWillReceive-info">
        <div className="info">
          <div className="subheader-container">
            <img className="subheader-img" src="/services/icon1.png" alt="" />
            <h2 className="subheader">ПРОЖИВАНИЕ</h2>
          </div>
          <p className="text">
            Наша школа серфинга находится в 100 м от океанского побережья. К
            услугам гостей открытый бассейн и бесплатный Wi-Fi. Из верхней
            террасы открывается вид на океан. Расстояние до центра города 15
            мин.{" "}
          </p>
        </div>

        <div className="info">
          <div className="subheader-container">
            <img className="subheader-img" src="/services/icon1.png" alt="" />
            <h2 className="subheader">ПРОЖИВАНИЕ</h2>
          </div>
          <p className="text">
            Наша школа серфинга находится в 100 м от океанского побережья. К
            услугам гостей открытый бассейн и бесплатный Wi-Fi. Из верхней
            террасы открывается вид на океан. Расстояние до центра города 15
            мин.{" "}
          </p>
        </div>

        <div className="info">
          <div className="subheader-container">
            <img className="subheader-img" src="/services/icon1.png" alt="" />
            <h2 className="subheader">ПРОЖИВАНИЕ</h2>
          </div>
          <p className="text">
            Наша школа серфинга находится в 100 м от океанского побережья. К
            услугам гостей открытый бассейн и бесплатный Wi-Fi. Из верхней
            террасы открывается вид на океан. Расстояние до центра города 15
            мин.{" "}
          </p>
        </div>
      </div>
      <div className="youWillReceive-wave-content">
        <div className="youWillReceive-wave">
          {" "}
          <div className="youWillReceive-wave-item">
            <div className="waveAndPercent">
              <img src="/services/wave1.png" alt="" />
              <p className="percent">85%</p>
            </div>
            <p className="text">Приехали второй раз</p>
          </div>
          <div className="youWillReceive-wave-item">
            <div className="waveAndPercent">
              <img src="/services/wave1.png" alt="" />
              <p className="percent">95%</p>
            </div>
            <p className="text">Научились кататься</p>
          </div>
          <div className="youWillReceive-wave-item">
            <div className="waveAndPercent">
              <img src="/services/wave1.png" alt="" />
              <p className="percent">99%</p>
            </div>
            <p className="text">Довольных клиентов</p>
          </div>
        </div>

        <div className="youWillReceive-waveText">
          <p className="text">
            Огромным преимуществом нашей школы является собственная методика
            обучения. Мы разработали собственный стиль обучения серфингу,
            который позволяет новичкам максимально быстро встать на доску.{" "}
          </p>
          <p className="text">
            Именно наша методика и наши преподаватели позволили нам пройти
            аттестацию Федерации серфинга Канарских островов - FEDERACIÓN
            CANARIA DE SURF. Это означает, что наша школа соответствует всем
            мировым стандартам. Переаттестация производится ежегодно и это
            позволяет нам всегда стремиться к улучшению обучения.
          </p>
        </div>
      </div>
    </div>
  );
};
