'use client'
import { Avatar, Box, Card, CardContent, Chip, Divider, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Link from "next/link";

export default function ProfilePage() {
  const isPadView = useMediaQuery("max-width:600px");

  return (
    <Box sx={{ p: isPadView ? 3 : 0 }} >
      <Card elevation={0} sx={{ maxWidth: 900, mx: "auto", p: isPadView ? 3 : 0, borderRadius: 3 }}>
        <Stack direction="row" justifyContent="flex-end" alignItems="center" m={2} mr={4}>
          <Link href="/profile/editing" >
            <BorderColorIcon />
          </Link>
        </Stack>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Stack alignItems="center" spacing={2}>
              <Avatar src="/login-illustration-1.jpg" sx={{ width: 100, height: 100 }} />
              <Typography variant="h6" fontWeight={600}>Pavitar Singh</Typography>
              <Typography variant="body2" color="text.secondary">Cutomer</Typography>
              <Typography variant="body2" textAlign="center" p={1}>
                Full stack product designer with hands-on experience in creating
                intuitive solutions.
              </Typography>
              <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={1}>
                {["UI/UX", "Adobe XD", "Mobile Apps", "User Research", "Wireframing"].map(skill => (
                  <Chip key={skill} label={skill} variant="outlined" />
                ))}
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={8}>
            <CardContent>
              <Typography variant="h6" fontWeight={600}>Basic Information</Typography>
              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={6}>
                  <Typography variant="body2">
                    <strong>Age:</strong> 100 years
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2">
                    <strong>Experience:</strong> 100 years
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2">
                    <strong>Address:</strong> Ahmedabad, Gujarat
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2">
                    <strong>Phone:</strong> +91 98123 56579
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2">
                    <strong>Email:</strong> pavitarsingh03@gmail.com
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" sx={{ml:2}} fontWeight={600}>Ride Bookings</Typography>
        <Stack sx={{ m: 2, maxHeight: "500px", overflow: "scroll" }}>
          <Stack spacing={2} sx={{ mt: 2 }}>
            {[
              { company: "Infosys", role: "Product & UI/UX Designer", time: "Apr 2018 - Present", location: "Pune, India" },
              { company: "Pixel Studio2", role: "UI/UX Designer", time: "Oct 2016 - July 2018", location: "Bangalore, India" },
              { company: "Ramotion Studio1", role: "Web Designer", time: "Apr 2015 - July 2016", location: "Bangalore, India" },
              { company: "Pixel Studio3", role: "UI/UX Designer", time: "Oct 2016 - July 2018", location: "Bangalore, India" },
              { company: "Ramotion Studio4", role: "Web Designer", time: "Apr 2015 - July 2016", location: "Bangalore, India" },
              { company: "Ramotion Studio5", role: "Web Designer", time: "Apr 2015 - July 2016", location: "Bangalore, India" }
            ].map(job => (
              <Card key={job.company} variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
                <Typography variant="subtitle1" fontWeight={600}>{job.company}</Typography>
                <Typography variant="body2" color="text.secondary">{job.role}</Typography>
                <Typography variant="body2" color="text.secondary">{job.time} | {job.location}</Typography>
              </Card>
            ))}
          </Stack>
        </Stack>

      </Card>
    </Box>
  );
}
