import React, { Fragment, useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import Repos from "../repos/Repos";

import { Link } from "react-router-dom";
import GithubContext from "../../context/github/githubContext";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { getUser, loading, user, repos, getUserRepos } = githubContext;
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);
  //[]= mimics componentDidMount

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repo,
    public_gists,
    hireable,
    company,
  } = user;

  if (loading) {
    <Spinner />;
  }
  return (
    <Fragment>
      <div className="user-card">
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "flex-start",
          }}
        >
          <Link to="/" className="" style={{ padding: "10px 0 0 20px" }}>
            <i
              class="lni lni-arrow-left"
              style={{ fontSize: "30px", fontWeight: "500" }}
            ></i>
          </Link>
        </div>
        <div className="user-back">
          <div
            style={{
              padding: "10px",
              fontSize: "20px",
            }}
          >
            Hireable:{" "}
            {hireable ? (
              <i className="fas fa-check " />
            ) : (
              <i className="fas fa-times-circle " />
            )}
          </div>
          <div style={{}}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src={avatar_url}
                  className=""
                  alt="Github User Avatar"
                  style={{
                    width: "150px",
                    borderRadius: "100px",
                  }}
                />
                <div>
                  <h1 style={{ color: "black", paddingTop: "10px" }}>{name}</h1>
                </div>
                <div>
                  <p>Location: {location}</p>
                </div>
              </div>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  width: "100%",
                  padding: "0 15px",
                  alignItems: "center",
                }}
              >
                {bio && (
                  <Fragment>
                    <h3>Bio:</h3>
                    <p
                      style={{
                        textAlign: "center",
                        padding: "0 10px 10px 10px",
                      }}
                    >
                      {bio}
                    </p>
                  </Fragment>
                )}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <a
                    style={{
                      textAlign: "center",
                      textShadow: "none",
                      fontWeight: "bold",
                      color: "blue",
                    }}
                    href={html_url}
                    className=""
                  >
                    Visit Github Profile
                  </a>
                  <ul>
                    <li>
                      {login && (
                        <Fragment>
                          <span>Username:</span> {login}
                        </Fragment>
                      )}
                    </li>
                    <li>
                      {company && (
                        <Fragment>
                          <span>Company:</span> {company}
                        </Fragment>
                      )}
                    </li>
                    <li>
                      {blog && (
                        <Fragment>
                          <span>Website:</span>
                          {blog}
                        </Fragment>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="stats-btm">
            <div
              className="badge badge-primary"
              style={{ padding: "0 5px", fontSize: "20px" }}
            >
              <span>Followers: </span> {followers}
            </div>
            <div
              className="badge badge-success"
              style={{ padding: "0 5px", fontSize: "20px" }}
            >
              <span>Following: </span> {following}
            </div>
            <div
              className="badge badge-light"
              style={{ padding: "0 5px", fontSize: "20px" }}
            >
              <span>Public Repos: </span> {public_repo}
            </div>
            <div
              className="badge badge-dark"
              style={{ padding: "0 5px", fontSize: "20px" }}
            >
              <span>Public Gists:</span> {public_gists}
            </div>
          </div>
        </div>
        <div
          className=""
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "20px 20px",
            width: "100%",
          }}
        >
          <h1 style={{ marginBottom: "10px" }}>Repos</h1>
          <Repos repos={repos} />
        </div>
      </div>
    </Fragment>
  );
};

export default User;
