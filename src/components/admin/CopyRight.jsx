import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function CopyRight() {
  return (
    <>
      <Typography color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit">BanjarPride.com</Link> {new Date().getFullYear()}
        {"."}
      </Typography>
    </>
  );
}

export default CopyRight;
