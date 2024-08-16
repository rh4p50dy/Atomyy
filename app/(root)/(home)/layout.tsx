import Header from '@/components/Navbar/Header';
import { Metadata } from 'next';
import { ReactNode } from 'react';


export const metadata: Metadata = {
  title: 'ATOMY',
  description: 'A workspace for your team, powered by Stream Chat and Clerk.',
};

const HomeLayout = ({ children }: Readonly<{children: ReactNode}>) => {
  return (
    <>
        <Header />
        <main className="h-screen bg-white">
            {children}
        </main>
        
    </>
    
  );
};

export default HomeLayout;
