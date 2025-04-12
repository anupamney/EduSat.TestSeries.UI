import { Box, Typography, Fade } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import SchoolIcon from '@mui/icons-material/School';

const TitleBox: React.FC = () => {
  return (
    <Grid xs={0} sm={0} md={6} lg={6} xl={6} minHeight={550}>
      <Fade in={true} timeout={1000}>
        <Box
          sx={{
            backgroundImage: `linear-gradient(135deg, rgba(0, 255, 60, 0.4), rgba(0, 157, 255, 0.4))`,
            padding: "30px",
            display: {
              xs: "none",
              sm: "none",
              md: "flex",
              lg: "flex",
              xl: "flex",
            },
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            borderRadius: "0px 30px 30px 0",
            boxShadow: "inset 0 0 20px rgba(255, 255, 255, 0.3)",
            backdropFilter: "blur(10px)",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "radial-gradient(circle at center, transparent 30%, rgba(0, 0, 0, 0.1) 100%)",
              zIndex: 0,
            }
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            position="relative"
            zIndex={1}
          >
            <Box 
              sx={{
                mb: 5,
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <SchoolIcon 
                sx={{ 
                  fontSize: 80, 
                  color: "white",
                  mb: 2,
                  filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))",
                }}
              />
              <Typography 
                variant="h3" 
                fontWeight="bold" 
                color="white" 
                mb={1}
                sx={{
                  textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                  letterSpacing: "1px",
                }}
              >
                Join Our <br /> Community
              </Typography>
            </Box>
            
            <Typography 
              variant="h6" 
              color="white" 
              sx={{
                textShadow: "1px 1px 3px rgba(0,0,0,0.4)",
                lineHeight: 1.6,
                letterSpacing: "0.5px",
                fontWeight: 300,
                textAlign: "center",
                maxWidth: "80%",
                margin: "0 auto",
              }}
            >
              Effortless Exam Prep: Streamline, Manage, and
              Track Practice Paper Orders for Schools
            </Typography>
            
            <Box 
              sx={{
                mt: 5,
                width: "60%",
                height: "5px",
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
                borderRadius: "10px",
              }}
            />
          </Box>
        </Box>
      </Fade>
    </Grid>
  );
};

export default TitleBox;
