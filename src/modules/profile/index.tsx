'use client'
import Link from "next/link";
import { Avatar, Box, Card, CardContent, Chip, Divider, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { useDetails } from "./hooks/useDetails";
import { SkeletonScreen } from "./components/skeleton";

export const Profile = () => {
    const { user, isLoading } = useDetails()
    const isPadView = useMediaQuery("max-width:600px");
    if (isLoading) {
        return <SkeletonScreen />
    }
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
                            <Typography variant="h6" fontWeight={600}>{user?.details.name}</Typography>
                            <Typography variant="body2" color="text.secondary">{user?.details?.role ?? "Customer"}</Typography>
                            <Typography variant="body2" textAlign="center" p={1}>
                                {
                                    user?.details?.description ?? "Full stack product designer with hands-on experience in creating intuitive solutions."
                                }
                            </Typography>
                            <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={1}>
                                {(user?.details.skills).map(skill => (
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
                                        <strong>Age:</strong> {user?.details?.age}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body2">
                                        <strong>Email Verified:</strong> {user?.details?.emailVerification ? "Yes" : "No"}
                                    </Typography>
                                </Grid>

                                <Grid item xs={6}>
                                    <Typography variant="body2">
                                        <strong>Address:</strong> {user?.details?.address}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body2">
                                        <strong>Phone Verified:</strong> {user?.details?.phoneVerification ? "Yes" : "No"}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body2">
                                        <strong>Phone:</strong> {user?.details?.phone}
                                    </Typography>
                                </Grid>

                                <Grid item xs={6}>
                                    <Typography variant="body2">
                                        <strong>Email:</strong> {user?.details?.email}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 3 }} />

                <Typography variant="h6" sx={{ ml: 2 }} fontWeight={600}>Ride Bookings</Typography>
                <Stack sx={{ m: 2, maxHeight: "500px", overflow: "scroll" }}>
                    <Stack spacing={2} sx={{ mt: 2 }}>
                        {user?.details?.bookings.map(booking => (
                            <Card key={booking.$id} variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
                                <Typography variant="subtitle1" fontWeight={600}>{booking.pickup_location}</Typography>
                                <Typography variant="body2" color="text.secondary">{booking.vehicle}</Typography>
                                <Typography variant="body2" color="text.secondary">{booking.pickup_date} - {booking.return_date}</Typography>
                            </Card>
                        ))}
                    </Stack>
                </Stack>

            </Card>
        </Box>
    );
}
