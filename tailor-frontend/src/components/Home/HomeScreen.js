import React from 'react'
import {ImageSliders} from '../Home/ImageSliders';
import {HowItWork} from '../Home/HowItWork';
import {WhyChoose} from '../Home/WhyChoose';
import {OurTeam} from '../Home/OurTeam';

export const HomeScreen = () => {
    return (
        <div>
        <ImageSliders/>
        <HowItWork/>
        <WhyChoose/>
        <OurTeam/>
        </div>
    )
}
