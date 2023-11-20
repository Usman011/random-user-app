import { useState } from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import { useLocation } from "react-router";
import { User } from "components/UserLists/types";
import { useViewports } from "helpers/viewports";

const LocationTab = () => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const data: User = useLocation().state;
  const { isMobile } = useViewports();
  const { street, city, state, country } = data.location;
  const embedUrl = `https://www.google.com/maps/embed/v1/place?q=${
    street.number
  }+${encodeURIComponent(street.name)},${city},${state},${country}&key=${
    import.meta.env.VITE_GOOGLE_MAP_API_KEY
  }`;

  const handleMapLoad = () => {
    setIsMapLoaded(true);
  };

  return (
    <Box mt={1}>
      <Typography variant="subtitle1" textAlign="center" color="grey" mb={2}>
        My Location is
      </Typography>
      <Box position="relative">
        {!isMapLoaded && (
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            display="flex"
            justifyContent="center"
            alignItems="center"
            bgcolor="rgba(255, 255, 255, 0.7)"
          >
            <CircularProgress />
          </Box>
        )}
        <iframe
          title="Google Map"
          width={isMobile ? "300" : "500"}
          height={isMobile ? "300" : "500"}
          style={{ border: 0 }}
          src={embedUrl}
          allowFullScreen
          onLoad={handleMapLoad}
        ></iframe>
      </Box>
    </Box>
  );
};

export default LocationTab;
