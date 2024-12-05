import React, { useState } from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Button, Grid, List, ListItem, useMediaQuery } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Carousel from 'react-material-ui-carousel';
import imgone from '../../Assets/png/img-1.png';
import imgtwo from '../../Assets/png/img-2.png';
import imgfour from '../../Assets/jpg/img-4.jpg';
import imgsix from '../../Assets/jpg/img-6.jpg';
import imgseven from '../../Assets/jpg/Cooperative-Learning.jpg';

const events = [
  { id: 1, title: 'New Exam event', date: 'Monday, 1st, 9:56 pm', location: 'India', image: imgone },
  { id: 2, title: 'New Exam event', date: 'Tuesday, 2nd, 9:00 pm', location: 'India', image: imgtwo },
  { id: 3, title: 'New Exam event', date: 'Thursday, 6th, 6:16 pm', location: 'China', image: imgseven },
  { id: 4, title: 'New Exam event', date: 'Thursday, 4th, 6:16 pm', location: 'India', image: imgfour },
  { id: 5, title: 'New Exam event', date: 'Thursday, 6th, 6:16 pm', location: 'India', image: imgseven },
  { id: 6, title: 'New Exam event', date: 'Saturday, 6th, 7:45 am', location: 'Russia', image: imgsix },
  { id: 7, title: 'New Exam event', date: 'Monday, 8th, 3:50 pm', location: 'Sri Lanka', image: imgseven },
  { id: 8, title: 'New Exam event', date: 'Sunday, 3rd, 3:50 pm', location: 'India', image: imgtwo },
  { id: 9, title: 'New Exam event', date: 'Monday, 9th, 3:50 pm', location: 'USA', image: imgone },
];

const EventCardComponent = ({ event }) => (
  <Card sx={{ minWidth: 300, maxWidth: 300, m: 1, boxShadow: 3 , marginLeft:{sm:" 43px" ,lg:"35px"}}}>
    <CardMedia component="img" height="140" image={event.image} alt={event.title} />
    <CardContent>
      <Typography variant="h6" color="primary" sx={{ textAlign: 'left' }}>
        {event.title}
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ textAlign: 'left', fontSize: '12px' }}>
        {event.date}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
        <LocationOnIcon fontSize="small" color="action" />
        <Typography variant="body2" color="textSecondary" ml={0.5}>
          {event.location}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2, fontSize: '15px' }}>
        <Button color="primary" size="small">I'll attend</Button>
        <Button color="error" size="small">I won't attend</Button>
      </Box>
    </CardContent>
  </Card>
);

const NotificationList = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Box sx={{ mt: 2  , marginLeft:{sm:"30px", md:"0px"}  }}>
      <Typography variant="h6" style={{ fontWeight: 'bold' }} sx={{ textAlign: 'left', marginLeft: '13px' }}>Notification</Typography>
      <List>
        <ListItem>• You have received 1 new application for the Stagiair(e) Jongerenreizen Offer in 365 days</ListItem>
        <ListItem>• Reminder – Deadline for the Stagiair(e) Jongerenreizen Offer <br />in 307 days.</ListItem>
        <ListItem>• You have received 0 new messages.</ListItem>
        <ListItem>• You have received 1 new applications</ListItem>
        <ListItem>• You have received 1 new applications messages.</ListItem>
        {expanded && (
          <>
            <ListItem>• You have received 0 new applications</ListItem>
            <ListItem>• You have received 4 new applications messages.</ListItem>
          </>
        )}
      </List>
      <Button
        onClick={handleToggle}
        color="primary"
        sx={{
          textTransform: 'none',
          textAlign: 'left'
        }}
      >
        {expanded ? 'View Less' : 'View All'}
      </Button>

    </Box>
  );
};

const EventPage = () => {
  const isDesktopOrLaptop = useMediaQuery('(min-width: 1024px)');
  const isMobileOrTablet = useMediaQuery('(max-width: 1023px)');

  const chunkedEvents = [];
  for (let i = 0; i < events.length; i += 3) {
    chunkedEvents.push(events.slice(i, i + 3));
  }

  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ textAlign: 'left', marginLeft:{sm:"40px" , lg:"35px"} }}>Upcoming Events</Typography>
      <Grid container spacing={3} justifyContent="center">

        <Grid item xs={12} md={8}>
          {isMobileOrTablet ? (

            <Box
              sx={{
                display: 'flex',
                overflowX: 'auto',
                gap: 1,
                padding: '10px',
                scrollSnapType: 'x mandatory',
                '&::-webkit-scrollbar': { display: 'none' },
              }}
            >
              {events.map((event) => (
                <Box key={event.id} sx={{ flex: '0 0 auto', scrollSnapAlign: 'start' }}>
                  <EventCardComponent event={event} />
                </Box>
              ))}
            </Box>
          ) : (

            <Carousel indicators={true} indicatorContainerProps={{ style: { marginTop: '0px' } }}>
              {chunkedEvents.map((eventGroup, index) => (
                <Grid container justifyContent="center" spacing={3} key={index}>
                  {eventGroup.map((event) => (
                    <Grid item xs={12} sm={6} md={4} key={event.id}>
                      <EventCardComponent event={event} />
                    </Grid>
                  ))}
                </Grid>
              ))}
            </Carousel>
          )}
        </Grid>


        {isDesktopOrLaptop && (
          <Grid item xs={12} md={4}>
            <NotificationList />
          </Grid>
        )}
      </Grid>


      {isMobileOrTablet && <NotificationList />}
    </Box>
  );
};

export default EventPage;
