interface ActionLink {
    path: string;
    name: string;
}

const actionLinks: ActionLink[] = [
    { path: '/home', name: 'Home' },
    { path: '/bikes', name: 'Bikes' },
    { path: '/about', name: 'About Us' },
    { path: '/contact', name: 'Contact' }
];

export default actionLinks;