import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Become a Meta Business Partner specialising in Facebook, Instagram and Messenger",
  icons: {
    icon: 'https://static.xx.fbcdn.net/rsrc.php/y5/r/m4nf26cLQxS.ico',
    apple: 'https://static.xx.fbcdn.net/rsrc.php/y5/r/m4nf26cLQxS.ico',
    shortcut: 'https://static.xx.fbcdn.net/rsrc.php/y5/r/m4nf26cLQxS.ico',
  },
  description: 'Learn how to become a Meta Business Partner. Connect with clients and increase a business&#039; visibility and credibility on Facebook, Instagram and Messenger.',
  openGraph: {
    images: 'https://i.postimg.cc/HWrvSxV9/creative.webp',
    title: 'Become a Meta Business Partner specialising in Facebook, Instagram and Messenger',
    description: 'Learn how to become a Meta Business Partner. Connect with clients and increase a business&#039; visibility and credibility on Facebook, Instagram and Messenger.',
  },
  twitter: {
    images: 'https://i.postimg.cc/HWrvSxV9/creative.webp',
    title: 'Become a Meta Business Partner specialising in Facebook, Instagram and Messenger',
    description: 'Learn how to become a Meta Business Partner. Connect with clients and increase a business&#039; visibility and credibility on Facebook, Instagram and Messenger.',
  }
}

export default function MetaDataPage() {
  return (
    <>
      <p className='text-white opacity-0'>Learn how to become a Meta Business Partner. Connect with clients and increase a business&#039; visibility and credibility on Facebook, Instagram and Messenger</p>
    </>
  )
}