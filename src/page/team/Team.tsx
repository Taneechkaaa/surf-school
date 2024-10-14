import "./team.css";

export const Team = () => {
  return (
    <div>
      <h1 className="description-title team-title">НАША КОМАНДА</h1>
      <div className="team-container">
        <div className="team-card">
          <img src="/mike.png" alt="" />
          <p className="teamCard-name">Mike</p>
          <p className="teamCard-jobTitle">Главный инстуктор</p>
        </div>

        <div className="team-card">
          <img className="teamCard-img" src="/Mary.png" alt="" />
          <p className="teamCard-name">Mary</p>
          <p className="teamCard-jobTitle">Инстуктор</p>
        </div>

        <div className="team-card">
          <img className="teamCard-img" src="/Olga.png" alt="" />
          <p className="teamCard-name">Olga</p>
          <p className="teamCard-jobTitle">Инстуктор</p>
        </div>
      </div>
    </div>
  );
};
