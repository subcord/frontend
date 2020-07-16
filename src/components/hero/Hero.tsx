import React from 'react';
import './hero.css';

import reddit from './reddit.svg';
import discord from './discord.svg';
import wave from './wave.svg';

function Hero() {
    return (
        <div className="Hero">
                <h1 className="Hero-top Hero-line">
                    Connecting
                </h1>
                <div className="Hero-brand-line">
                    <img src={reddit} className="Hero-brand" alt="reddit logo"/>
                    <h1 className="Hero-ampersand">&amp;</h1>
                    <img src={discord} className="Hero-brand" alt="discord logo"/>
                </div>
                <h1 className="Hero-bottom Hero-line">
                    Seamlessly
                </h1>
                <h2 className="Hero-content">
                    Bring a powerful toolset to your Subreddit, centralising your moderation across Reddit and Discord with an intuitive ModMail &amp; Modqueue system
                </h2>
                <img src={wave} className="Hero-wave" alt=""/>
        </div>
    );
}

export default Hero;
