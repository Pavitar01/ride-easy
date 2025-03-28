'use client'

import axios from 'axios'
import { useState } from 'react'
import Image from 'next/image'
import {
  Box,
  Container,
  Grid,
  Typography,
  Alert,
  CircularProgress,
} from '@mui/material'
import BaseButton from '@/shared/ui/base-button'
import { BaseInput } from '@/shared/ui/base-input'
import './styles.scss'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [isLogging, setIsLogging] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    if (isLogging) return
    setIsLogging(true)
    e.preventDefault()
    setError('')

    try {
      const response = await axios.post('/api/auth/login', { email })
      if (response.status !== 200) {
        throw response
      }
      setSuccess('Please check your email for magic link.')
    } catch (err: any) {
      setError(err.response.data.error || 'Login failed. Please try again.')
    } finally {
      setIsLogging(false)
    }
  }

  return (
    <Container maxWidth="md">
      <Grid container sx={{ height: '100vh', alignItems: 'center' }}>
        <Grid item xs={12} md={6} sx={{ px: 4 }}>
          <Box
            sx={{ textAlign: 'center', mb: 3 }}
            className="auth-heading-container"
          >
            <Typography variant="h4" fontWeight="bold" className="auth-heading">
              Login with Magic Link!
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className="auth-description"
            >
              Enter just your email access your account.
            </Typography>
          </Box>

          {error && <Alert severity="error">{error}</Alert>}
          {success && <Alert severity="success">{success}</Alert>}

          <form className="form-input-container" onSubmit={handleLogin}>
            <BaseInput
              className="email-input"
              placeHolder="Email address *"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <BaseButton
              disabled={isLogging}
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 2, py: 1.5, fontSize: '16px' }}
            >
              {isLogging && <CircularProgress size={18} color="inherit" />}
              &nbsp;Sign in
            </BaseButton>
          </form>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { xs: 'none', md: 'block' }, textAlign: 'center' }}
        >
          <Image
            className="auth-illustration"
            src={'/auth-illustration.jpg'}
            alt="Auth Illustration"
            width={450}
            height={620}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default LoginPage
