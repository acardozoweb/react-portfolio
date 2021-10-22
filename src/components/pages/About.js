import React from "react";
import tonyprofilepic from "../../assets/images/tonyprofilepic.jpeg"

const About = () => (
  <div>
    <h1>About</h1>
    <img className="tony" src={tonyprofilepic} alt="photo of anthony smiling laughing" />
    <p className="para">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare sem malesuada, 
    finibus magna et, ultricies quam. Integer et arcu tellus. Donec diam urna, tempor ac sodales 
    consequat, blandit in velit. Vivamus nec luctus dui. Aliquam et dapibus arcu, quis iaculis nisi. 
    Curabitur volutpat aliquet rutrum. Sed facilisis nulla ut elit facilisis rutrum. Lorem ipsum 
    dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus efficitur, condimentum lectus 
    quis, ultricies nibh. Duis consectetur dui tellus, eu tempor purus convallis at. Vestibulum 
    sed mauris auctor, volutpat odio vitae, sagittis neque. Sed pretium feugiat egestas. Proin 
    cursus dolor nec finibus consectetur.
    </p>
    <br />
    <br />
    <p className="para">
    Donec laoreet libero quis ex mattis, et viverra metus congue. Mauris luctus faucibus rutrum. 
    Mauris mattis velit at quam consequat aliquam. Mauris maximus pellentesque libero, lacinia 
    dictum leo euismod et. Sed ultricies scelerisque metus. Praesent et massa dictum, porta eros 
    in, tristique quam. Proin a arcu et dui faucibus malesuada. Fusce porta sed odio sed ornare. 
    Pellentesque eu tellus pulvinar diam imperdiet sodales. In porta in libero eget ultricies. 
    Phasellus quam nulla, posuere nec commodo vel, feugiat vel tortor. Nam feugiat sapien vel 
    luctus finibus.
    </p>

  </div>
);

export default About;