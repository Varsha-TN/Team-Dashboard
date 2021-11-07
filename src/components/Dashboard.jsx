import TeamCard from "./TeamCard";
import TeamList from "./TeamList";

const Dashboard = () => {
  return (
    <div className="row container mt-3">
      <div className="col-3">
        <TeamList />
      </div>
      <div className="col">
        <TeamCard />
      </div>
    </div>
  );
};

export default Dashboard;
