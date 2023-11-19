import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { Box, styled } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LockIcon from '@mui/icons-material/Lock';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { Centered } from 'components/layout';
import { useViewports } from 'helpers/viewports';
import { User } from 'components/UserLists/types';
import { ShowFormProps, UserTabs } from './types';
import BasicInfoTab from './BasicInfoTab';
import LocationTab from './LocationTab';


const ShowForm: React.FC<ShowFormProps> = ({ activeTab, userInfo }) => {
  const formattedDate = new Date(userInfo.dob.date).toLocaleString();

  switch (activeTab) {
    case UserTabs.BasicInfo:
      return (
        <BasicInfoTab
          heading="name"
          info={`${userInfo.name.first} ${userInfo.name.last}`}
        />
      );
    case UserTabs.Email:
      return <BasicInfoTab heading="email" info={userInfo.email} />;
    case UserTabs.Dob:
      return <BasicInfoTab heading="date of birth" info={formattedDate} />;

    case UserTabs.Phone:
      return <BasicInfoTab heading="phone number" info={userInfo.phone} />;
    case UserTabs.Lock:
      return <BasicInfoTab heading="username" info={userInfo.login.username} />;
    case UserTabs.Location:
      return <LocationTab />;
    default:
      return null;
  }
};

const ProfileTabs = () => {
  const { isMobile } = useViewports();
  const state: User = useLocation().state;

  const [activeTab, setActiveTab] = useState(UserTabs.BasicInfo);
  const clickHandler = (tab: UserTabs) => {
    setActiveTab(() => tab);
  };

  return (
    <Box width="100vw">
      <Centered>
        <ContainerBox isMobile={isMobile}>
          <AccountCircleIcon
            sx={{
              color: activeTab === UserTabs.BasicInfo ? "#4caf50" : "#000",
              fontSize: isMobile ? "2rem" : "3rem",
            }}
            onClick={() => {
              clickHandler(UserTabs.BasicInfo);
            }}
          />
          <EmailIcon
            sx={{
              color: activeTab === UserTabs.Email ? "#4caf50" : "#000",
              fontSize: isMobile ? "2rem" : "3rem",
            }}
            onClick={() => {
              clickHandler(UserTabs.Email);
            }}
          />
          <CalendarMonthIcon
            sx={{
              color: activeTab === UserTabs.Dob ? "#4caf50" : "#000",
              fontSize: isMobile ? "2rem" : "3rem",
            }}
            onClick={() => {
              clickHandler(UserTabs.Dob);
            }}
          />
          <MyLocationIcon
            sx={{
              color: activeTab === UserTabs.Location ? "#4caf50" : "#000",
              fontSize: isMobile ? "2rem" : "3rem",
            }}
            onClick={() => {
              clickHandler(UserTabs.Location);
            }}
          />
          <LocalPhoneIcon
            sx={{
              color: activeTab === UserTabs.Phone ? "#4caf50" : "#000",
              fontSize: isMobile ? "2rem" : "3rem",
            }}
            onClick={() => {
              clickHandler(UserTabs.Phone);
            }}
          />
          <LockIcon
            sx={{
              color: activeTab === UserTabs.Lock ? "#4caf50" : "#000",
              fontSize: isMobile ? "2rem" : "3rem",
            }}
            onClick={() => {
              clickHandler(UserTabs.Lock);
            }}
          />
        </ContainerBox>
      </Centered>
      <Centered>
        <TabsContainer isMobile={isMobile}>
          <ShowForm activeTab={activeTab} userInfo={state} />
        </TabsContainer>
      </Centered>
    </Box>
  );
};

export default ProfileTabs;

const ContainerBox = styled(Box)(({ isMobile }: { isMobile: boolean }) => ({
  marginTop: "2rem",
  width: isMobile ? "350px" : "600px",
  display: "flex",
  justifyContent: "space-evenly",
}));

const TabsContainer = styled(Box)(({ isMobile }: { isMobile: boolean }) => ({
  marginTop: "2rem",
  width: isMobile ? "350px" : "600px",
  display: "flex",
  justifyContent: "space-evenly",
  boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
  padding: "2rem 0rem",
}));
