import React from 'react';
import {Composition} from 'remotion';
import {HelloWorld} from './HelloWorld';
import {JaneIntro} from './JaneIntro';

export const RemotionRoot: React.FC = () => (
  <>
    <Composition
      id="HelloWorld"
      component={HelloWorld}
      durationInFrames={90}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={{title: 'Hello from Remotion'}}
    />
    <Composition id="JaneIntro" component={JaneIntro} durationInFrames={150} fps={30} width={1920} height={1080} />
  </>
);
