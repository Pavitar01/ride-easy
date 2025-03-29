'use client';
import { ChangeEvent, useState } from "react";
import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    Chip,
    Grid,
    IconButton,
    Stack,
    Typography,
    useMediaQuery,
} from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Link from "next/link";
import { BaseInput } from "@/shared/ui/base-input";
import BaseButton from "@/shared/ui/base-button";
import "./styles.scss"

export default function EditProfile() {
    const isPadView = useMediaQuery("max-width:600px");
    const [skillInput, setSkillInput] = useState("");
    const [profile, setProfile] = useState<Profile>({
        firstName: "Pavitar",
        lastName: "Singh",
        role: "Customer",
        bio: "Full stack product designer with hands-on experience in creating intuitive solutions.",
        tags: ["UI/UX", "Adobe XD", "Mobile Apps", "User Research", "Wireframing"],
        age: "100 years",
        experience: "100 years",
        address: "Ahmedabad, Gujarat",
        phone: "+91 98123 56579",
        email: "pavitarsingh03@gmail.com",
        govId: null
    });

    const handleSkillKeyDown = (e: any) => {
        if (e.key === "Enter" && skillInput.trim()) {
            setProfile((prev) => ({ ...prev, tags: [...prev.tags, skillInput.trim()] }));
            setSkillInput("");
        }
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setProfile((prev) => ({
            ...prev,
            govId: file,
        }));
    };

    const handleSkillDelete = (skillToDelete: string) => {
        setProfile((prev) => ({
            ...prev,
            tags: prev.tags.filter((skill) => skill !== skillToDelete),
        }));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProfile((prev: Profile) => ({ ...prev, [name]: value }));
    };


    const handleSave = () => {
        console.log("Updated Profile:", profile);
    };

    return (
        <Box sx={{ p: isPadView ? 3 : 0 }} className="editing-page-wrapper">
            <Card elevation={0} sx={{ maxWidth: 900, mx: "auto", p: isPadView ? 3 : 0, borderRadius: 3 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
                    <Link href="/profile">
                        <IconButton>
                            <KeyboardBackspaceIcon fontSize="large" />
                        </IconButton>
                    </Link>
                </Stack>

                <Stack alignItems="center" spacing={2} pb={3}>
                    <Avatar src="/login-illustration-1.jpg" sx={{ width: 100, height: 100 }} />
                    <Button component="label" id="upload-button" startIcon={<CloudUploadIcon sx={{ color: "inherit" }} />}>
                        Upload Profile Picture
                        <input hidden accept="image/*" type="file" />
                    </Button>
                </Stack>

                <CardContent>
                    <Grid container spacing={2}>
                        {[
                            { label: "First Name", name: "firstName" },
                            { label: "Last Name", name: "lastName" },
                            { label: "Email Address", name: "email" },
                            { label: "Phone", name: "phone" },

                        ].map(({ label, name }) => (
                            <Grid item xs={6} key={name}>
                                <Typography component="p" className="title">{label}</Typography>
                                <BaseInput
                                    sx={{ bgcolor: "var(--global-color-secondary-alt)" }}
                                    placeholder={label}
                                    name={name}
                                    fullWidth
                                    value={profile[name as keyof Profile]}
                                    onChange={handleChange}
                                />
                            </Grid>
                        ))}
                        <Grid item xs={12}>
                            <Typography component="p" className="title">Address</Typography>
                            <BaseInput
                                sx={{ bgcolor: "var(--global-color-secondary-alt)" }}
                                placeholder="Address"
                                name="address"
                                fullWidth
                                multiline
                                rows={3}
                                value={profile.address}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography component="p" className="title">Bio</Typography>
                            <BaseInput
                                sx={{ bgcolor: "var(--global-color-secondary-alt)" }}
                                placeholder="Bio"
                                name="bio"
                                fullWidth
                                multiline
                                rows={3}
                                value={profile.bio}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography component="p" className="title">Tags</Typography>
                            <BaseInput
                                sx={{ bgcolor: "var(--global-color-secondary-alt)" }}
                                fullWidth
                                placeholder="Add a tag suits you and press Enter"
                                value={skillInput}
                                onChange={(e) => setSkillInput(e.target.value)}
                                onKeyDown={handleSkillKeyDown}
                            />
                            <Stack direction="row" spacing={1} mt={1} flexWrap="wrap">
                                {profile.tags.map((skill, index) => (
                                    <Chip key={index} label={skill} onDelete={() => handleSkillDelete(skill)} />
                                ))}
                            </Stack>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography component="p" className="title">
                                Government ID
                            </Typography>
                            <Box>
                                {!profile.govId ? <BaseInput type="file" accept="image/*,application/pdf" onChange={handleFileChange} /> :
                                    <Typography variant="body1">File uploaded</Typography>
                                }
                            </Box>
                        </Grid>
                    </Grid>

                    <Typography variant="h6" mt={3} fontWeight={600}>Contact Email</Typography>
                    <BaseInput sx={{ bgcolor: "var(--global-color-secondary-alt)" }} fullWidth value={profile.email} disabled />
                    <Typography variant="h6" mt={3} fontWeight={600}>Password</Typography>
                    <Grid container spacing={2}>
                        {[
                            { label: "Current Password", name: "currentPassword" },
                            { label: "New Password", name: "newPassword" },
                        ].map(({ label, name }) => (
                            <Grid item xs={6} key={name}>
                                <BaseInput
                                    sx={{ bgcolor: "var(--global-color-secondary-alt)" }}
                                    placeholder={label}
                                    name={name}
                                    type="password"
                                    fullWidth
                                    value={profile[name as keyof Profile]}
                                    onChange={handleChange}
                                />
                            </Grid>
                        ))}
                    </Grid>

                    <BaseButton variant="contained" fullWidth sx={{ mt: 3 }} onClick={handleSave}>
                        Save Changes
                    </BaseButton>
                </CardContent>
            </Card>
        </Box>
    );
}