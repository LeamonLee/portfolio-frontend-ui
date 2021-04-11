import React, { Fragment, useState } from "react";
import {
  Grid,
  Typography,
  Tabs,
  Tab,
  Grow,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  makeStyles,
} from "@material-ui/core";
import resumeData from "../../dummyData/resumeData";

const useStyles = makeStyles((theme) => ({
  tabsRoot: {},
  tabRoot: {
    padding: 0,
    marginRight: "20px",
    minWidth: 0,
    textTransform: "inherit",
    fontSize: "14px",
    fontWeight: 400,
  },
  tabItemActive: {
    color: theme.mainColor
  },
  cardRoot: {
    height: "100%",
    maxWidth: "350px",
    boxShadow: "0px 0px 48px 0px rgba(4, 6, 4, 0.08)",
    borderRadius: "5px",
    overflow: "hidden"
  },
  cardMedia: {
    height: "200px"
  },
  cardContent: {},
  cardContentTitle: {
    fontWeight: 500
  },
  cardContentCaption: {
    color: "gray",
    fontWeight: 400
  },
  projectDialogRoot:{
    // maxWidth: "800px"
  },
  projectDialogImage:{
    maxHeight: "400px",
    width: "100%",
    objectFit: "cover",
    objectPosition: "center center",
    marginBottom: "10px"
  },
  projectDialogDesc:{
    marginBottom: "10px"
  },
  projectDialogActions: {
    marginBottom: "10px"
  },
  projectDialogActionsIcon: {
    margin: "0 10px",
    cursor: "pointer",
    "&:hover": {
      color: theme.mainColor
    },
    "& > .MuiSvgIcon-root": {
      fontSize: "30px"
    } 
  }
}));

const Portfolio = () => {
  const classes = useStyles();
  const [tabValue, setTabValue] = useState("All");
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  // const [projectModalData, setProjectModalData] = useState({});

  return (
    <>
      <Grid container className="section">
        {/* Title */}
        <Grid item className="section_title_container">
          <h6 className="section_title">Portfolio</h6>
          <span></span>
        </Grid>

        {/* Tabs */}
        <Grid item xs={12}>
          <Tabs
            value={tabValue}
            indicatorColor="white"
            className={classes.tabsRoot}
            onChange={(e, value) => setTabValue(value)}
          >
            <Tab
              label="All"
              value="All"
              className={`${classes.tabRoot} ${
                tabValue === "All" ? classes.tabItemActive : null
              }`}
            />
            {[...new Set(resumeData.portfolio.map((item) => item.tag))].map(
              (tag) => (
                <Tab
                  label={tag}
                  value={tag}
                  className={`${classes.tabRoot} ${tabValue === tag ? classes.tabItemActive: null}`}
                />
              )
            )}
          </Tabs>
        </Grid>

        {/* Portofolio Card */}
        <Grid item container xs={12} spacing={2}>
          {resumeData.portfolio.map((project, idx) => (
            <Fragment key={`${project.tag}${project.title}${idx}`}>
              {tabValue === project.tag || tabValue === "All" ? (
                <Grid item xs={12} sm={6} lg={4}>
                  <Grow in timeout={1000}>
                    <Card
                      className={classes.cardRoot}
                      onClick={() => setProjectModalOpen(project)}
                    >
                      <CardActionArea>
                        <CardMedia
                          className={classes.cardMedia}
                          image={project.image}
                          title={project.title}
                        />
                        <CardContent className={classes.cardContent}>
                          <Typography 
                            className={classes.cardContentTitle}
                            variant="body2"
                          >
                            {project.title}
                          </Typography>
                          <Typography
                            className={classes.cardContentCaption}
                            variant="caption"
                          >
                            {project.caption}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </Fragment>
          ))}
        </Grid>

        <Dialog
          open={projectModalOpen}
          onClose={() => setProjectModalOpen(false)}
          className={classes.projectDialogRoot}
          fullWidth
        >
          <DialogTitle>{projectModalOpen.title}</DialogTitle>
          <img src={projectModalOpen.image} alt="project" className={classes.projectDialogImage} />
          <DialogContent>
            <Typography className={classes.projectDialogDesc}>
              {projectModalOpen.description}
            </Typography>
          </DialogContent>
          <DialogActions className={classes.projectDialogActions}>
            {projectModalOpen?.links?.map((link, idx) => (
              <a
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className={classes.projectDialogActionsIcon}
              >
                {link.icon}
              </a>
            ))}
          </DialogActions>
        </Dialog>
      </Grid>
    </>
  );
};

export default Portfolio;
