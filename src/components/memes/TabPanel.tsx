import React from "react";
import styled from "styled-components";

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

export default function TabPanel({
  children,
  value,
  index,
  ...other
}: TabPanelProps) {
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
