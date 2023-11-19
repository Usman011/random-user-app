import { Box, Button, Grid, Typography, styled } from '@mui/material';
import { useNavigate } from 'react-router';
import { User, UserListsProps } from './types';
import { Centered } from 'components/layout';



const UserLists: React.FC<UserListsProps> = ({ data }) => {
  const navigate = useNavigate();
  const handleClick = (userProfile: User) => {
    navigate(`/profile/${userProfile.login.uuid}`, { state: userProfile });
  };
  return (
    <>
      <Grid container spacing={3} mt={2}>
        {data &&
          data.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <CardBox>
                <Centered>
                  <StyledImg src={item.picture.large} alt="profile img" />
                </Centered>

                <Typography variant="h6" pt={1} fontWeight="500" color="blue">
                  {`${item.name.last}, ${item.dob.age}`}
                </Typography>

                <Typography variant="subtitle2" fontWeight="400">
                  {`${item.location.state}, ${item.location.country}`}
                </Typography>

                <Typography variant="subtitle1" fontWeight="600" pt={1}>
                  Phone no:
                </Typography>

                <Typography variant="subtitle2" fontWeight="400">
                  {item.phone}
                </Typography>

                <Typography variant="subtitle1" fontWeight="600" pt={1}>
                  Email:
                </Typography>

                <Typography variant="subtitle2" fontWeight="400" pb={2}>
                  {item.email}
                </Typography>

                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => {
                    handleClick(item);
                  }}
                >
                  View Profile
                </Button>
              </CardBox>
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default UserLists;

export const CardBox = styled(Box)(() => ({
  alignItems: "center",
  padding: ".8rem",
  border: "1px solid #fff",
  boxShadow:
    "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
}));

export const StyledImg = styled("img")(() => ({
  height: "100%",
  width: "100%",
}));
