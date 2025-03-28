import { Resend } from 'resend'
import { MagicLinkEmail } from '@/shared/ui/email-template'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { email, name, magicLink } = await req.json()
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: email,
      subject: 'Your Magic Link to Sign In',
      react: MagicLinkEmail({ userName: name, magicLink }),
    })

    if (error) {
      return Response.json({ error }, { status: 500 })
    }

    return Response.json(data)
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}
