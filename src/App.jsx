import { useState } from "react";

function App() {
  const teamData = [
    { team: "CSK", link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE5UPWzjhMnFifbfE7M3dD2upyCwoN9g7FUmHLmMv79Q&s" },
    { team: "DC", link: "https://cdn.dnaindia.com/sites/default/files/2022/12/23/2562417-untitled-design-2022-12-23t225333.153.jpg?im=FitAndFill=(1200,900)" },
    { team: "GT", link: "https://img.jagranjosh.com/images/2023/April/2642023/ipl-gujarat-titans-owner.jpg" },
    { team: "KKR", link: "https://m.economictimes.com/thumb/msid-99120720,width-1200,height-900,resizemode-4,imgsize-119668/ipl-2023-kkr-team-review-check-kolkata-knight-riders-strengths-weaknesses-and-key-players.jpg" },
    { team: "MI", link: "https://staticg.sportskeeda.com/editor/2023/12/f556e-17030116826736-1920.jpg?w=840"},
    { team: "RCB", link: "https://www.royalchallengers.com/PRRCB01/public/styles/817x545_landscape/public/2020-03/RCBSquadWeb.jpg?h=920929c4&itok=GK65M_OV" }
  ];

  const [selectedTeam, setSelectedTeam] = useState(teamData[0]);

  return (
    <div>
      <ul className="flex gap-10 mx-auto bg-black justify-center p-10">
        {teamData.map((team) => (
          <li key={team.team} 
              className={`py-2 px-6 rounded-md cursor-pointer hover:bg-slate-700 ${selectedTeam.team === team.team ? 'bg-blue-500 text-white' : 'bg-slate-500 text-white'}`} 
              onClick={() => setSelectedTeam(team)}>
              {team.team}
          </li>
        ))}
      </ul>

      <div className="flex flex-col items-center mt-10 gap-10">
        <h1 className="font-bold text-2xl">{selectedTeam.team}</h1>
        <div className="h-80 w-80 overflow-hidden">
          <img src={selectedTeam.link} className="h-full w-full object-cover" alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
