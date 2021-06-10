import React from "react";
import { useHistory } from "react-router-dom";
import {
  AppBar,
  Tabs,
  Tab,
  Button,
  withStyles,
  makeStyles,
} from "@material-ui/core";
import { createStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { AddRounded } from "@material-ui/icons";

const useStyles = makeStyles(() =>
  createStyles({
    appBar: {
      padding: "0 50px",
    },
    button: {
      color: "#ec4c4c",
      borderColor: "#ec4c4c",
    },
    buttonIcon: {
      marginRight: "5px",
    },
  })
);

const LogoName = styled.p`
  color: #ec4c4c;
  font-family: "Francois One", sans-serif;
  font-size: 20px;
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

interface StyledTabsProps {
  value: string;
  onChange: (event: React.ChangeEvent<{}>, newValue: string) => void;
}

const StyledTabs = withStyles({
  indicator: {
    height: "3px",
    backgroundColor: "#EC4C4C",
  },
})((props: StyledTabsProps) => (
  <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />
));

type Props = {
  children: React.ReactElement | Array<React.ReactElement>;
};

export default function Navigation({ children }: Props) {
  const history = useHistory();
  const path = history.location.pathname.replace("/", "");
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) =>
    history.push(newValue);

  return (
    <>
      <AppBar color="default" position="static" className={classes.appBar}>
        <TopBar>
          <div>
            <LogoName>Meme</LogoName>
            <LogoName>Service</LogoName>
          </div>

          <StyledTabs value={path} onChange={handleChange}>
            <Tab
              label="regular"
              value="regular"
              aria-controls="tabpanel-regular"
            />
            <Tab label="hot" value="hot" aria-controls="tabpanel-hot" />
          </StyledTabs>

          <Button
            variant="outlined"
            className={classes.button}
            onClick={() => history.push("form")}
          >
            <AddRounded className={classes.buttonIcon} />
            new meme
          </Button>
        </TopBar>
      </AppBar>
      <main>{children}</main>
    </>
  );
}
