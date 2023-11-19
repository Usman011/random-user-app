import React from "react";
import {
  Box,
  Container as MuiContainer,
  ContainerProps,
} from "@mui/material";

interface ContainerBoxProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerBoxProps & ContainerProps> = ({
  children,
}) => {

  return (
    <Box
      sx={{
        background: '#fff',
        width: "100%",
        height: "100%",
        minHeight: '100vh',
        padding: 'rem 0rem'
      }}
    >
      <MuiContainer maxWidth="lg">
        {children}
      </MuiContainer>
    </Box>
  );
};
