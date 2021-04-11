import React from 'react'
import { Typography } from '@material-ui/core'

import resumeData from "../../dummyData/resumeData";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer_container">
            <div className="footer_left">
              {/* <Typography className="footer_name">{resumeData.profile.Name}</Typography> */}
            </div>
            <div className="footer_right">
              <Typography className="footer_copyright">
                Designed and developed by {"  "}{resumeData.profile.Name}
              </Typography>
            </div>
        </div>
    )
}

export default Footer
