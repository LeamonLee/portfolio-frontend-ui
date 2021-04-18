import React from "react";

import { makeStyles } from "@material-ui/core";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import { Typography } from "@material-ui/core";

// import WorkIcon from "@material-ui/icons/Work";

const useStyles = makeStyles((theme) => ({
  timelineRoot: {
    padding: 0,
    // backgroundColor: '#fff',
  },
  // First item
  timelineFirstItem: {
    minHeight: "80px",
    "&.MuiTimelineItem-missingOppositeContent:before": {
      display: "none",
    },
  },
  timelineFirstDot: {
    color: "black",
    backgroundColor: theme.mainColor,
    padding: "10px",
    "& .MuiSvgIcon-root": {
      fontSize: "18px",
      color: "darkslategray",
    },
  },
  timelineFirstConnector: {
    backgroundColor: "#eee",
  },
  timelineFirstContent: {
    paddingTop: "8px", // To centralize the text along with the Icon on the left
  },

  // Remaining item
  timelineItem: {
    minHeight: "0px",
    "&.MuiTimelineItem-missingOppositeContent:before": {
      display: "none",
    },
  },
  timelineSeparator: {
    paddingLeft: "17px",
  },
  timelineDot: {
    // color: "black",
    borderColor: theme.mainColor,
    fontSize: "small",
    padding: "2px",
  },
  timelineConnector: {},
  timelineContent: {
    paddingTop: "0px",
    marginBottom: "10px",
  },
  timelineContentTitle: {
    fontWeight: 600
  },
  timelineContentDuration: {
    color: "darkslategray"
  },
  timelineContentDesc: {
    color: "gray",
    marginTop: "6px",
    
  },
  // searchInput: {
  //     opacity: '0.6',
  //     padding: `0px ${theme.spacing(1)}px`,
  //     fontSize: '0.8rem',
  //     '&:hover': {
  //         backgroundColor: '#f2f2f2'
  //     },
  //     '& .MuiSvgIcon-root': {
  //         marginRight: theme.spacing(1)
  //     }
  // }
}));

const MyProfileTimeline = (props) => {
  const { headerContent, headerIcon, lstContents, children } = props;

  const classes = useStyles();

  return (
    <Timeline className={classes.timelineRoot}>
      {/* Header */}
      <TimelineItem className={classes.timelineFirstItem}>
        <TimelineSeparator>
          <TimelineDot className={classes.timelineFirstDot}>
            {headerIcon}
            {/* <WorkIcon /> */}
          </TimelineDot>
          <TimelineConnector className={classes.timelineFirstConnector} />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" className={classes.timelineFirstContent}>
            {headerContent}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      {children}

      {/* Remaining */}
      {lstContents &&
        lstContents.map((objContent, idx) => (
          <TimelineItem key={`${objContent.title}${idx}`} className={classes.timelineItem}>
            <TimelineSeparator className={classes.timelineSeparator}>
              <TimelineDot variant="outlined" className={classes.timelineDot} />
              <TimelineConnector className={classes.timelineConnector} />
            </TimelineSeparator>
            <TimelineContent className={classes.timelineContent}>
              <Typography variant="h6" className={classes.timelineContentTitle}>{objContent.title}</Typography>
              <Typography variant="caption" className={classes.timelineContentDuration}>{objContent.duration}</Typography>
              <Typography variant="body2" className={classes.timelineContentDesc}>{`${objContent.description}`}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
    </Timeline>
  );
};

export default MyProfileTimeline;
