import React from "react";
import { Button } from "@mui/material";
import { logOutHandler } from "../../redux/actions/auth";
import { useDispatch } from "react-redux";

const MainPage = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div>Main Page</div>
      <div>
        <Button variant="contained" onClick={() => dispatch(logOutHandler())}>
          Logout
        </Button>
      </div>
    </>
  );
};
export default MainPage;
