interface ActionLink {
  path: string
  name: string
}

const actionLinks: ActionLink[] = [
  { path: '/home', name: 'Home' },
  { path: '/vehicles', name: 'Vehicles' },
  { path: '/about-us', name: 'About Us' },
  { path: '/contact-us', name: 'Contact Us' },
  { path: '/login', name: 'Login' },
]

export type { ActionLink }
export default actionLinks
