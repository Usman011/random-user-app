import { Box, styled } from "@mui/material";
import { useLocation } from "react-router";
import { User } from "components/UserLists/types";
import { Centered } from "components/layout";
import ProfileTabs from "components/ProfileTabs";

const Profile = () => {
  const { state }: { state: User } = useLocation();

  console.log(location);

  return (
    <Box>
      <BackgroundBox />

      <SectionBox>
        <Centered flexDirection="column">
          <StyledImg src={state.picture.large} />
          <ProfileTabs />
        </Centered>
      </SectionBox>
    </Box>
  );
};

export default Profile;

export const StyledImg = styled("img")(() => ({
  height: "11rem",
  width: "11rem",
  borderRadius: "50%",
}));

export const SectionBox = styled(Box)(() => ({
  position: "relative",
  bottom: 95,
}));

export const BackgroundBox = styled(Box)(() => ({
  background: "#dcdcdc",
  height: "150px",
}));
