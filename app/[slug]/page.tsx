import { Metadata } from 'next'
import PrivacyCenter from '../business'

export const metadata: Metadata = {
    title: "Marketing tools and advertising solutions on Facebook and Instagram | Meta for Business",
    icons: {
        icon: 'https://static.xx.fbcdn.net/rsrc.php/y5/r/m4nf26cLQxS.ico',
        apple: 'https://static.xx.fbcdn.net/rsrc.php/y5/r/m4nf26cLQxS.ico',
        shortcut: 'https://static.xx.fbcdn.net/rsrc.php/y5/r/m4nf26cLQxS.ico',
    },
    description: 'Find and reach more customers on Facebook, Instagram and Messenger. Get access to Meta&#039;s business tools, advertising resources and marketing help.',
    openGraph: {
        images: 'https://i.postimg.cc/T2VjjyDm/succes.jpg',
        title: 'Marketing tools and advertising solutions on Facebook and Instagram | Meta for Business',
        description: 'Find and reach more customers on Facebook, Instagram and Messenger. Get access to Meta&#039;s business tools, advertising resources and marketing help.',
    },
    twitter: {
        images: 'https://i.postimg.cc/T2VjjyDm/succes.jpg',
        title: 'Marketing tools and advertising solutions on Facebook and Instagram | Meta for Business',
        description: 'Find and reach more customers on Facebook, Instagram and Messenger. Get access to Meta&#039;s business tools, advertising resources and marketing help.',
    }
}

const page = () => {
    return (
        <PrivacyCenter />
    )
}

export default page
