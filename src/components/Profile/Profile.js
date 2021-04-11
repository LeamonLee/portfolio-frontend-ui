import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import GetAppIcon from "@material-ui/icons/GetApp";

import myImage from "../../assets/images/me.jpg";
import MyProfileTimeline from "../MyTimeline/MyProfileTimeline";
import MyButton from "../MyButton/MyButton";

import resumeData from "../../dummyData/resumeData";
import "./Profile.css";

const Profile = () => {
  const [profileInfo, setProfileInfo] = useState({});
  useEffect(() => {
    const tempObj = {
      ...resumeData.profile,
      ...resumeData.socials,
    };
    setProfileInfo(tempObj);
  }, []);
  console.log(profileInfo);
  return (
    <div className="profile_container container_shadow">
      <div className="profile_header">
        <Typography className="name">{resumeData.profile.Name}</Typography>
        <Typography className="title">{resumeData.profile.Title}</Typography>
      </div>
      <div className="profile_image_container">
        <img src={myImage} alt=""></img>
      </div>
      <div className="profile_information_container">
        <MyProfileTimeline
          headerIcon={<PersonOutlineIcon />}
          objContents={profileInfo}
        />
      </div>
      <div className="button_container">
        <MyButton text="Download CV" icon={<GetAppIcon />} />
      </div>
    </div>
  );
};

export default Profile;
