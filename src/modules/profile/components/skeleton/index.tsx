'use client'

import Link from "next/link";
import { Box, Card, CardContent, Divider, Grid, Stack, Typography, useMediaQuery, Skeleton } from "@mui/material";
import BorderColorIcon from '@mui/icons-material/BorderColor';

export const SkeletonScreen = () => {
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
                            <Skeleton variant="circular" width={100} height={100} />
                            <Skeleton variant="text" width="60%" height={30} />
                            <Skeleton variant="text" width="40%" />
                            <Skeleton variant="text" width="80%" />
                            <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={1}>
                                {Array.from({ length: 3 }).map((_, index) => (
                                    <Skeleton key={index} variant="rounded" width={50} height={30} />
                                ))}
                            </Stack>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <CardContent>
                            <Typography variant="h6" fontWeight={600}>Basic Information</Typography>
                            <Grid container spacing={2} sx={{ mt: 1 }}>
                                <Grid item xs={6}>
                                    <Skeleton variant="text" width="60%" />
                                </Grid>
                                <Grid item xs={6}>
                                    <Skeleton variant="text" width="60%" />
                                </Grid>
                                <Grid item xs={6}>
                                    <Skeleton variant="text" width="60%" />
                                </Grid>
                                <Grid item xs={6}>
                                    <Skeleton variant="text" width="60%" />
                                </Grid>
                                <Grid item xs={6}>
                                    <Skeleton variant="text" width="60%" />
                                </Grid>

                                <Grid item xs={6}>
                                    <Skeleton variant="text" width="60%" />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Grid>
                </Grid>
                <Divider sx={{ my: 3 }} />
                <Typography variant="h6" sx={{ ml: 2 }} fontWeight={600}>Ride Bookings</Typography>
                <Stack sx={{ m: 2, maxHeight: "500px", overflow: "scroll" }}>
                    <Stack spacing={2} sx={{ mt: 2 }}>
                        {Array.from({ length: 2 }).map((_, index) => (
                            <Card key={index} variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
                                <Skeleton variant="text" width="80%" />
                                <Skeleton variant="text" width="60%" />
                                <Skeleton variant="text" width="60%" />
                            </Card>
                        ))}
                    </Stack>
                </Stack>
            </Card>
        </Box>
    );
};
