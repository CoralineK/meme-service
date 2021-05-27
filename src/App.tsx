import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getMemes } from "./API";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import Memes from "./components/Memes";
import { MemeType } from "./types";

const TabPanelStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel({ children, value, index, ...other }: TabPanelProps) {
  return (
    <TabPanelStyle
      role="tabpanel"
      hidden={value !== index}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && children}
    </TabPanelStyle>
  );
}

function TabProps(index: any) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

export default function App() {
  const [value, setValue] = useState(0);
  const [memes, setMemes] = useState<MemeType[]>([]);
  const [hotMemes, setHotMemes] = useState<MemeType[]>([]);

  useEffect(() => {
    getMemes().then((result) => {
      setMemes(result);
    });
  }, []);

  function handleUpvoteClick(memeProp: MemeType) {
    const updateMemes = memes.map((meme) =>
      meme.id === memeProp.id ? { ...meme, upvote: meme.upvote + 1 } : meme
    );
    setMemes(updateMemes);

    setHotMemes(memes.filter((meme) => meme.upvote > 10));
  }

  function handleDownvoteClick(memeProp: MemeType) {
    const updateMemes = memes.map((meme) =>
      meme.id === memeProp.id ? { ...meme, downvote: meme.downvote + 1 } : meme
    );
    setMemes(updateMemes);
  }

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue);
  }

  return (
    <>
      <AppBar color="default" position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="regular" {...TabProps(0)} />
          <Tab label="hot" {...TabProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Memes
          memes={memes}
          handleUpvoteClick={handleUpvoteClick}
          handleDownvoteClick={handleDownvoteClick}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Memes
          memes={hotMemes}
          handleUpvoteClick={handleUpvoteClick}
          handleDownvoteClick={handleDownvoteClick}
        />
      </TabPanel>
    </>
  );
}
