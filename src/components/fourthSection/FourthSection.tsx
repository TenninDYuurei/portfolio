
import React from "react";
import CarouselProjects from "../CarouselProjects";

const FourthSection: React.FC = () => {
    return (
        <section className="py-12 bg-dark-black">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl md:text-4xl font-bold font-orbitron text-primary-gold text-right  mb-6">About My Work</h2>
            </div>
            <CarouselProjects />
        </section>
    );
};

export default FourthSection;