import React from 'react';
import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import CoursesSection from '../components/home/CoursesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import BecomeSellerSection from '../components/home/BecomeSellerSection';

const HomePage: React.FC = () => {
    return (
        <>
            <HeroSection />
            <StatsSection />
            <CoursesSection />
            <TestimonialsSection />
            <BecomeSellerSection />
        </>
    );
};

export default HomePage;
