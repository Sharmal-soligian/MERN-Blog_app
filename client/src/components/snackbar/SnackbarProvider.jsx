import React, { createContext, useContext, useState } from "react";
import { Snackbar } from "@mui/material";

const SnackbarContext = createContext();

export const SnackbarProvider = ({ children }) => {
  const [snackOpen, setSnackOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");

  const showSnackbar = (message) => {
    setSnackMessage(message);
    setSnackOpen(true);
  };

  const hideSnackbar = () => {
    setSnackOpen(false);
    setSnackMessage("");
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar, hideSnackbar }}>
      {children}
      {snackOpen && (
        <Snackbar
          message={snackMessage}
          autoHideDuration={5000}
          open={snackOpen}
          onClose={hideSnackbar}
        />
      )}
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => {
  return useContext(SnackbarContext);
};
