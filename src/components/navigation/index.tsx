import React from "react";
import { useHistory } from "react-router-dom";
import { AppBar, Tabs, Tab } from "@material-ui/core";

type Props = {
  children: React.ReactElement | Array<React.ReactElement>;
};

export default function Navigation({ children }: Props) {
  const history = useHistory();
  const path = history.location.pathname.replace("/", "");

  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    history.push(newValue);
  }
  return (
    <>
      <AppBar color="default" position="static">
        <Tabs value={path} onChange={handleChange}>
          <Tab label="home" value="" aria-controls="tabpanel-home" />
          <Tab
            label="regular"
            value="regular"
            aria-controls="tabpanel-regular"
          />
          <Tab label="hot" value="hot" aria-controls="tabpanel-hot" />
        </Tabs>
      </AppBar>
      <main>{children}</main>
    </>
  );
}
