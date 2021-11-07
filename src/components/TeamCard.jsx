const TeamCard = () => {
  return (
    <div className="card bg-secondary max-300">
      <div className="card-body">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">description</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button className="btn btn-primary"> Create + </button>
      </div>
    </div>
  );
};

export default TeamCard;
