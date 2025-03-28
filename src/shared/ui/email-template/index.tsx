import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Img,
  Button,
  Hr,
} from '@react-email/components'
import * as React from 'react'
import { styles } from './react-styles'

interface MagicLinkEmailProps {
  userName: string
  magicLink: string
}

export const MagicLinkEmail = ({
  userName,
  magicLink,
}: MagicLinkEmailProps) => {
  return (
    <Html>
      <Head />
      <Body style={styles.body}>
        <Container style={styles.container}>
          {/* Header Image */}
          <Img
            src="https://via.placeholder.com/600x200?text=Welcome+to+Our+App"
            width="100%"
            height="auto"
            alt="Welcome Banner"
          />

          {/* Welcome Text */}
          <Section style={styles.section}>
            <Text style={styles.h1}>Welcome, {userName}! 🎉</Text>
            <Text style={styles.text}>
              Click the button below to log in instantly. Your magic link is
              valid for **15 minutes**.
            </Text>

            {/* Call-to-Action Button */}
            <Button href={magicLink} style={styles.button}>
              Sign in to Your Account
            </Button>

            {/* Alternative Link */}
            <Text style={styles.text}>
              Or copy and paste this link into your browser:
              <br />
              <a href={magicLink} style={styles.link}>
                {magicLink}
              </a>
            </Text>
          </Section>

          <Hr style={styles.hr} />

          {/* Footer */}
          <Section style={styles.footer}>
            <Text style={styles.text}>
              Need help? Contact our support team.
            </Text>
            <Button
              href="mailto:support@yourapp.com"
              style={styles.secondaryButton}
            >
              Contact Support
            </Button>
            <Text style={styles.text}>Follow us on:</Text>

            {/* Social Media Links */}
            <div style={styles.socialIcons}>
              <a href="https://twitter.com/yourapp" target="_blank">
                <Img
                  src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                  width="24"
                  height="24"
                  alt="Twitter"
                />
              </a>
              <a href="https://facebook.com/yourapp" target="_blank">
                <Img
                  src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                  width="24"
                  height="24"
                  alt="Facebook"
                />
              </a>
              <a href="https://instagram.com/yourapp" target="_blank">
                <Img
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                  width="24"
                  height="24"
                  alt="Instagram"
                />
              </a>
            </div>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

