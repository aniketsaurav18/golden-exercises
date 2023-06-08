import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        borderBottomLeftRadius: "20px",
        background: "#fff",
        width: "150px",
        height: "140px",
        cursor: "pointer",
        gap: "25px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1650, left: 100, behavior: "smooth" });
      }}
    >
      <img src={Icon} alt="dumbell" style={{ width: "40px", height: "40px" }} />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
