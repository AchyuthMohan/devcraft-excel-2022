import React from "react";
import "./PlanPg.css";
import MainLayout from "../../components/MainLayout/MainLayout";
const PlanPg = () => {
  return (
    <MainLayout>
      <div className="profile__container">
        <div className="profile__div">
          <p>User id:<span></span></p>
          <p>Name :<span></span></p>
          <p>email :<span></span></p>
        </div>
      </div>
    </MainLayout>
  );
};

export default PlanPg;
