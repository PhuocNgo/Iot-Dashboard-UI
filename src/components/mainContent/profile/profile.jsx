import {
  Avatar,
  Card,
  Container,
  Link,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { profileData } from "./data";

function Profile() {
  return (
    <Container>
      <Typography sx={{ fontSize: "36px", mb: "16px" }}>Profile</Typography>
      <Card sx={{ maxWidth: "650px" }}>
        <Avatar
          sx={{
            width: "100px",
            height: "100px",
            bgcolor: deepPurple[500],
            fontSize: "50px",
            marginTop: "16px",
            marginLeft: "16px",
          }}
        >
          PN
        </Avatar>
        <TableContainer>
          <Table sx={{ maxWidth: 650 }}>
            {profileData.map((curData, index) => (
              <TableRow>
                <TableCell key={index} sx={{ fontSize: 16 }}>
                  {curData.label}
                </TableCell>
                <TableCell sx={{ fontSize: 16 }}>:</TableCell>

                <TableCell sx={{ fontSize: 16 }}>
                  {index === profileData.length - 1 ? (
                    <Link href={curData.value} target="_blank" rel="noopener">
                      {curData.value}
                    </Link>
                  ) : (
                    curData.value
                  )}
                </TableCell>
              </TableRow>
            ))}
          </Table>
        </TableContainer>
      </Card>
    </Container>
  );
}

export default Profile;
