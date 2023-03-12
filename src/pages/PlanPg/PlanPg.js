import React from "react";
import "./PlanPg.css";
import MainLayout from "../../components/MainLayout/MainLayout";
import { UserContext } from "../../contexts/UserContext";
import roadmap from "../../assets/roadmap.svg";
const PlanPg = () => {
  const { signedInUser } = React.useContext(UserContext);
  if (!signedInUser) {
    return <div>Loading...</div>;
  }
  return (
    <MainLayout>
      <div className="profile__container">
        <div className="profile__div">
          <div>
            {" "}
            <img
              src={signedInUser.photoURL}
              alt=""
              style={{
                borderRadius: "50%",
                border: "1px solid #265e1d",
              }}
            />
          </div>
          <div style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
          }}>
            <div>
              Name : <span>{signedInUser.displayName}</span>
            </div>
            <br/>
            <div>
              Email : <span>{signedInUser.email}</span>
            </div>
            
          </div>
        </div>
        <div
          style={{
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{color:'#32de84', fontFamily:'monospace'}}>You Keto Diet Progress</h1>
          <img
            src={roadmap}
            alt=""
            style={{
              width: "80vw",
              height: "auto",
            }}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default PlanPg;
