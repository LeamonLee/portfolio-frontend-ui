import React from "react";
import { Grid, Paper, Typography, List, ListItem, ListItemText, ListItemIcon, makeStyles } from "@material-ui/core";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

import MyResumeTimeline from "../../components/MyTimeline/MyResumeTimeline";
import resumeData from "../../dummyData/resumeData";

import "./Resume.css";

const useStyles = makeStyles(theme => ({
  skillContainer: {
    padding: "20px",
  },
  skillTitle: {
    fontSize: "16px",
    fontWeight: 700,
  },
  skillDescIcon:{
    color: theme.mainColor,
    minWidth: 0,
    marginRight: theme.spacing(2),
    "& > .MuiSvgIcon-root": {
      fontSize: "12px"
    }
  },
  skillDescText: {
    color: "#989898",
    "& .MuiTypography-root":{
      fontWeight: 500,
      fontSize: "14px"
    }
  },

})
);

const Resume = () => {

  const classes = useStyles();
  return (
    <>
      {/* About me */}
      <Grid container className="section">
        <Grid item className="section_title_container">
          <h6 className="section_title">About me</h6>
          <span></span>
        </Grid>
        <Grid item className="section_aboutme_content_container" xs={12}>
          <Typography variant="body2" className="section_aboutme_content">
            {resumeData.about}
          </Typography>
        </Grid>
      </Grid>

      {/* Resume */}
      <Grid container className="section">
        <Grid item className="section_title_container">
          <h6 className="section_title">Resume</h6>
          <span></span>
        </Grid>
        <Grid item container xs={12}>
          {/* Working Experience */}
          <Grid item sm={12} md={6}>
            <MyResumeTimeline
              headerIcon={<WorkIcon />}
              headerContent="Working Experience"
              lstContents={resumeData.experiences}
            />
          </Grid>

          {/* Education */}
          <Grid item sm={12} md={6}>
            <MyResumeTimeline
              headerIcon={<SchoolIcon />}
              headerContent="Working Experience"
              lstContents={resumeData.education}
            />
          </Grid>
        </Grid>
      </Grid>

      {/* Services */}
      <Grid container className="section">
        <Grid item className="section_title_container">
          <h6 className="section_title">Services</h6>
          <span></span>
        </Grid>
        <Grid item container justify="space-around" xs={12}>
          {resumeData.services.map((service, idx) => (
            <Grid
              key={`${service.title}${idx}`}
              item
              xs={12}
              sm={6}
              md={4}
              xl={3}
            >
              <div className="service_container">
                <div className="service_icon">{service.icon}</div>
                <Typography className="service_title" variant="h6">
                  {service.title}
                </Typography>
                <Typography className="service_description" variant="body2">
                  {service.description}
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>

      {/* Skills */}
      <Grid container className="section">
        <Grid item className="section_title_container">
          <h6 className="section_title">Skills</h6>
          <span></span>
        </Grid>
        <Grid item container justify="space-around" spacing={3} xs={12}>
          {
            resumeData.skillSets.map((skill, idx) => (
              <Grid key={`${skill.title}${idx}`} item xs={12} sm={6} md={4} lg={3}>
                <Paper elevation={2} className={classes.skillContainer}>
                  <Typography variant="h6" className={classes.skillTitle}>
                    {skill.title}
                  </Typography>
                  {
                    skill.description.map((item, idx) => (
                      <List key={`${item}${idx}`} className={classes.skillDescContainer}>
                        {
                          <ListItem className={classes.skillDescItem} disableGutters={true}>
                            <ListItemIcon className={classes.skillDescIcon}>
                              <RadioButtonUncheckedIcon />
                            </ListItemIcon>
                            <ListItemText
                              className={classes.skillDescText}
                              primary={item}
                              secondary={null}
                            />
                          </ListItem>
                        }
                      </List>
                    ))
                  }
                </Paper>
              </Grid>
            ))
          }
        </Grid>
      </Grid>

      {/* Contact me */}
      <Grid container className="section"></Grid>
    </>
  );
};

export default Resume;
