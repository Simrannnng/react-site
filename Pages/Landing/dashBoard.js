import React from "react";
import { Typography, Box, Card, CardContent, Grid, Container } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import giftImage from "../../Assets/png/gift 1.png";
import positionimg from "../../Assets/png/position 1.png";
import applicationimg from "../../Assets/png/application 1.png";
import interview from "../../Assets/png/interview 1.png";
import search from "../../Assets/png/search 1.png";
import filter from "../../Assets/png/filter 1.png";
import leftclick from "../../Assets/png/left-click 1.png";
import CardsComponent from "../../Components/Cards/cards";
import ButtonComponent from "../../Components/Button/button";

function Dashboard() {
  const cardData = [
    {
      count: 253,
      title: "Jobs",
      subtitle: "Total Jobs Posted",
      backgroundColor: "#f8f9fa",
      imageSrc: positionimg,
    },
    {
      count: 301,
      title: "Jobs",
      subtitle: "Total Jobs Posted",
      backgroundColor: "#E1FFD9",
      imageSrc: applicationimg,
    },
    {
      count: 10.31,
      title: "Jobs",
      subtitle: "Total Jobs Posted",
      backgroundColor: "#D9F8FF",
      imageSrc: interview,
    },
    {
      count: 664,
      title: "Jobs",
      subtitle: "Total Jobs Posted",
      backgroundColor: "#FFF4F4",
      imageSrc: search,
    },
    {
      count: 450,
      title: "Jobs",
      subtitle: "Total Jobs Posted",
      backgroundColor: "#FCFBDC",
      imageSrc: filter,
    },
    {
      count: 203,
      title: "Jobs",
      subtitle: "Total Jobs Posted",
      backgroundColor: "#F5F5F5",
      imageSrc: leftclick,
    },
  ];
  const handleAddCredits = () => {
    console.log("Add Credits button clicked");
  };

  return (
    <Box>
      <Box sx={{ p: 6, backgroundColor: "#F6FBFF" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "80px",
            "@media (max-width: 600px)": {
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            },
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontSize: "25px", fontWeight: "bold" }}
          >
            Welcome to Nxus!
          </Typography>
          <ButtonComponent 
          text="Add Credits" 
          icon={<AddIcon />} 
          onClick={handleAddCredits} 
        />
        </Box>
        <Typography
          variant="subtitle1"
          color="textSecondary"
          gutterBottom
          sx={{
            textAlign: { xs: 'center', sm: 'left' }
          }}
        >
          At Nxus we look at what really matters: talent.
        </Typography>


        <Grid container spacing={3} sx={{ marginTop: 2 }}>
          <Grid item xs={13} md={4} lg={4}>
            <Card
              sx={{
                backgroundColor: "#3a7bf7",
                color: "#ffffff",
                "@media (min-width: 1024px) and (max-width: 1024px)": {
                  height: "390px",
                },
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{
                    "@media (min-width: 1024px) and (max-width: 1024px)": {
                      marginTop: "20px",
                      marginBottom: "10px",
                    },
                  }}
                >
                  Ongoing job offers
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    marginTop: 1,
                    "@media (min-width: 1024px) and (max-width: 1024px)": {
                      marginBottom: "20px",
                    },
                  }}
                >
                  We have 50 ongoing offers this month.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: 1,
                  }}
                >
                  <Typography></Typography>
                  <Box
                    sx={{
                      width: "60px",
                      height: "60px",
                      marginRight: "50px",
                      "@media (min-width: 1024px) and (max-width: 1024px)": {
                        marginRight: "110px",
                        marginTop: "40px",
                      },
                    }}
                  >
                    <img
                      src={giftImage}
                      alt="Gift Icon"
                      style={{ width: "130%", height: "130%" }}
                    />
                  </Box>
                </Box>
                <Typography
                  fontWeight="bold"
                  fontSize="15px"
                  sx={{
                    "@media (min-width: 1024px) and (max-width: 1024px)": {
                      marginTop: "60px",
                    },
                  }}
                >
                  20,5862
                </Typography>
                <Typography variant="body2">Matched Candidates</Typography>
                <Box
                  sx={{ display: "flex", alignItems: "center", marginTop: 1 }}
                >
                  <Box
                    sx={{
                      width: "80%",
                      height: 6,
                      backgroundColor: "#ffffff",
                      borderRadius: 5,
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <Box
                      sx={{
                        width: "65%",
                        height: "100%",
                        backgroundColor: "#1a5ec1",
                      }}
                    ></Box>
                  </Box>
                  <Typography variant="caption" sx={{ marginLeft: 1 }}>
                    Last Year 83.04%
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item md={8}>
            <Grid container spacing={3} >
              <Container>
                <Grid container spacing={1} sx={{ marginTop: "20px" }} >
                  {cardData.map((data, index) => (
                    <CardsComponent

                      key={index}
                      count={data.count}
                      title={data.title}
                      subtitle={data.subtitle}
                      backgroundColor={data.backgroundColor}
                      imageSrc={data.imageSrc}
                    />
                  ))}
                </Grid>
              </Container>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Dashboard;
