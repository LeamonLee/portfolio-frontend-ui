import React from "react";

import { makeStyles } from "@material-ui/core";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import { Typography } from "@material-ui/core";

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
  timelineContentText: {
    fontSize: "14px",
    color: "#787878",
    fontWeight: 600,
    "& > span": {
      color: "black"
    },
    "& > a": {
      color: "#787878",
      textDecoration: "none",
    }
  }
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
  const { headerContent, headerIcon, objContents, children } = props;

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
      {objContents &&
        Object.entries(objContents).map(([title, content], idx) => (
          <TimelineItem key={`${title}${idx}`} className={classes.timelineItem}>
            <TimelineSeparator className={classes.timelineSeparator}>
              <TimelineDot variant="outlined" className={classes.timelineDot} />
              <TimelineConnector className={classes.timelineConnector} />
            </TimelineSeparator>
            <TimelineContent className={classes.timelineContent}>
              {typeof content === "object" && content !== null ? (
                content.link ? (
                  <Typography variant="h6" className={classes.timelineContentText}>
                    <span>{title}:</span>{" "}
                    <a href={content.link} target="_blank" rel="noreferrer">
                      {content.displayText}
                    </a>
                  </Typography>
                ) : (
                  <Typography variant="h6" className={classes.timelineContentText}>
                    <span>{title}:</span>{" "}
                    {content.displayText}
                  </Typography>
                )
              ) : (
                <Typography variant="h6" className={classes.timelineContentText}>
                  <span>{title}: </span>
                  {content}
                </Typography>
              )}
            </TimelineContent>
          </TimelineItem>
        ))}
    </Timeline>
  );
};

export default MyProfileTimeline;
