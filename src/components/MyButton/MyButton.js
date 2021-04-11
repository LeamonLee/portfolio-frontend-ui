import React from "react";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  btnRoot: {
    backgroundColor: theme.mainColor,
    // fontSize: "14px",
    // fontWeight: 600,
    // lineHeight: "35px",
    border: 0,
    borderRadius: "50px",
    padding: "1px 12px",
    minWidth: "100px",
    outline: "none" 
  },
  btnIconContainer: {
    color: "#000",
    backgroundColor: "#fff",
    borderRadius: "50px",
    height: "27px",
    width: "27px",
    lineHeight: "29px",
    textAlign: "center",
    display: "center",
    alignItems: "center",
    justifyContent: "center",
    "& > .MuiSvgIcon-root": {
      fontSize: "16px"
    }
  },
  btnTextContainer: {
    fontSize: "14px",
    fontWeight: 700,
    lineHeight: "35px",
    textTransform: "none",
    textAlign: "center",
    width: "100%",
    marginLeft: "5px",
    marginRight: "5px"
  },
}));

const MyButton = (props) => {
  const { text, icon } = props;
  const classes = useStyles();

  return (
    <Button
      // variant="contained"
      // color="primary"
      className={classes.btnRoot}
      endIcon={
        icon ? <div className={classes.btnIconContainer}>{icon}</div> : null
      }
    >
      <div className={classes.btnTextContainer}>{text}</div>
    </Button>
  );
};

export default MyButton;
