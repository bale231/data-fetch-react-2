export const GithubUser = ({ username, img }) => {
  return (
    <>
      <div className="container-card">
        <div className="card-profile">
          <h1>{username}</h1>
          <div className="img-container">
            <img src={img} alt="img-profile-git" />
          </div>
        </div>
      </div>
    </>
  );
};
