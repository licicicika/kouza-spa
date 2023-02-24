import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { getApi } from "../../common/service/ApiUtils";
import { ApiIds } from "../../assets/constants/api-id.constant";
import { SH1APIDUMLGNRequestBody } from "../../assets/interfaces/api/shiapidumlgn";

/**
 * 描述
 * @returns {JSX.Element}
 */
const Login = (): JSX.Element => {
  const navigate = useNavigate();

  const loadMain = async () => {
    const { userName, userPwd } = getValues();

    const param: SH1APIDUMLGNRequestBody = {
      userName: userName,
      userPwd: userPwd,
    };

    const response = await getApi(ApiIds.SH1APIDUMLGN, param);

    console.log(response);

    navigate("/Main");
  };

  const { register, handleSubmit, getValues } = useForm();

  const boxStyle = {
    width: 500,
    maxWidth: "100%",
    marginBottom: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const formStyle = {
    width: 500,
    border: "1px solid #000",
    padding: "40px 40px",
  };

  return (
    <div className="form">
      <Box sx={formStyle}>
        <form onSubmit={handleSubmit(loadMain)}>
          <Box sx={boxStyle}>
            <TextField
              fullWidth
              required
              {...register("userName")}
              label="userName"
            />
          </Box>

          <Box sx={boxStyle}>
            <TextField
              fullWidth
              required
              {...register("userPwd")}
              label="userPwd"
            />
          </Box>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <Button variant="contained" type="submit">
              login
            </Button>
          </Box>
        </form>
      </Box>
    </div>
  );
};

export default Login;
