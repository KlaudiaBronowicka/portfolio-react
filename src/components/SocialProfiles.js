import React from 'react';
import SOCIAL_PROFILES from '../data/socialMediaProfiles';

const SocialMediaProfile = props => {

    const { image, link } = props.profile;

    return (
        <div style={{ display: 'inline-block', width: 75, margin: 10 }}>
            <a href={link}>
                <img src={image} alt='project' style={{ width: 50, height: 50 }}/>
            </a>
        </div>
    )
}

const SocialMediaProfiles = () => (
    <div>
        <h2>Get in touch!</h2>
        <div>
            {
                SOCIAL_PROFILES.map( PROFILE => <SocialMediaProfile key={PROFILE.id} profile={PROFILE} /> )
            }
        </div>
    </div>
)
export default SocialMediaProfiles;