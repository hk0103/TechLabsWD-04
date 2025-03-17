'use client';
import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Logo from '@/app/components/Logo';
import LoginRegister from '@/app/components/LoginRegister';

const signup = () => {
    return (
        <div>
            <Header />
            <Logo />
            <LoginRegister />
            <Footer />
        </div>
    );
};

export default signup;