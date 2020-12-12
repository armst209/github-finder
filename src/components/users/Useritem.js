import React from "react";
import { Link } from "react-router-dom";

const Useritem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="card">
      <div>
        <img
          src={avatar_url}
          alt=""
          className="round-img"
          style={{
            width: "60px",
            borderRadius: "50px",
            transform: "scale(1.4)",
            boxShadow: "2px 2px 3px grey",
            marginBottom: "10px",
          }}
        />
      </div>
      <div style={{ padding: "5px 0" }}>
        <h3>{login}</h3>
      </div>
      <div style={{ padding: "20px 0 0 0" }}>
        <Link to={`/user/${login}`} className="useritem-a">
          <i
            class="lni lni-arrow-right-circle"
            style={{ marginRight: "5px" }}
          ></i>
          More
        </Link>
      </div>
    </div>
  );
};

export default Useritem;
