import React from 'react'
import InfoCard from '../common/InfoCard'

function AboutUs() {
    return (
        <div className="container mx-auto mt-8 px-4">
            <h1 className="text-5xl font-bold mb-4 text-center">Welcome to our Building Materials Company</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <InfoCard
                    title="Quality Materials"
                    description="We provide high-quality building materials sourced from trusted suppliers."
                    iconColor="green"
                    imageUrl="./Tole.png"
                />
                <InfoCard
                    title="Variety of Products"
                    description="Choose from a wide range of products to meet your construction needs."
                    iconColor="blue"
                    imageUrl="./Tole.png"
                />
                <InfoCard
                    title="Expert Advice"
                    description="Our team of experts is here to provide you with guidance and support."
                    iconColor="orange"
                    imageUrl="./Tole.png"
                />
            </div>
        </div>
    )
}

export default AboutUs
