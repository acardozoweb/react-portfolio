import React from "react";
import tonyprofilepic from "../../assets/images/tonyprofilepic.jpeg"

const About = () => (
  <div>
    <h1 class="pro-title">About Me</h1>
    <img className="tony" src={tonyprofilepic} alt="photo of anthony smiling laughing" />
    <p className="para">
   I have a broad range of interests and experiences, which has simultaneously equipped me with with a high
   level of adaptability and a readiness to embrace non-linear career paths. I've gone from working at a 
   community centre, to cafes / restaurants, to rehearsal studios, music venues, as well as doing contract work with 
   numerous federal government departments. I've been playing in bands since I was 15; writing, recording and 
   performing original music and touring throughout Ontario, Quebec and the Maritimes. I've founded an independent music festival and even opened 
   a small music venue. All somehow before the age of 30. Suffice to say I've been extremely fortunate to have 
   had some amazing opportunities.
    </p>
    <br />
    <br />
    <p className="para">
    When the COVID pandemic hit, I was thankfully able to work my call centre job from home, but ground to a halt 
    on almost all of the music and event-related work I'd been doing. I cancelled the festival I'd spent 10 months
    organizing, shuttered the music venue that had only been open for 6 months and eventually was laid off from my job
    as well. Going into 2021, most aspects of my life were in flux and I dug deep to think about how I wanted to move
    forward. I knew I wanted to go back to school for something specialized and in-demand and, since I'd always been interested
    in coding but never took the time or felt it was accessible for me, I started some free online courses and eventually found 
    out about Carleton University's web development boot camp. The more I learned about the world of tech work, and about the work
    itself, the more I wanted to continue learning and incorporate these skills into my already diverse skill set. The boot camp 
    has been a challenging and eye-opening experience, and I'm excited to continue developing and applying these new skills.
    </p>

  </div>
);

export default About;