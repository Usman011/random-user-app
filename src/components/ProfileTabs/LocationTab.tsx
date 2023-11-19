import { Box, Typography } from '@mui/material';
import { useLocation } from 'react-router';
import { User } from 'components/UserLists/types';
import { useViewports } from 'helpers/viewports';


const LocationTab = () => {
  const data: User = useLocation().state;
  const { isMobile } = useViewports();
  const { street, city, state, country } = data.location;
  const embedUrl = `https://www.google.com/maps/embed/v1/place?q=${
    street.number
  }+${encodeURIComponent(
    street.name
  )},${city},${state},${country}&key=${import.meta.env.VITE_GOOGLE_MAP_API_KEY}`;

  return (
    <Box mt={1}>
      <Typography variant="subtitle1" textAlign="center" color="grey" mb={2}>
        My Location is
      </Typography>
      <Box>
        <iframe
          title="Google Map"
          width={isMobile ? "300" : "500"}
          height={isMobile ? "300" : "500"}
          style={{ border: 0 }}
          src={embedUrl}
          allowFullScreen
        ></iframe>
      </Box>
    </Box>
  );
};

export default LocationTab;
