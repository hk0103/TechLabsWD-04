'use client';
import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Logo from '@/app/components/Logo';
import LoginFormComponent from '@/app/components/Login';  

const Login = () => {
    return (
        <div>
            <Header />
            <Logo />
            <LoginFormComponent />
            <Footer />
        </div>
    );
};

export default Login;