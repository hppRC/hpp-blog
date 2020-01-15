import React from 'react';
import { animated, config, useSpring } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import { ColorModeContainer } from 'src/store';

import styled from '@emotion/styled';

type Props = { text: string; mode: boolean };

export const ScatteredCharacters: React.FCX<Props> = ({ className, text }) => {
  const texts = [...text];

  return (
    <section className={className}>
      {texts.map((ch: string, i: number) => (
        <React.Fragment key={i}>
          <Block ch={ch} />
        </React.Fragment>
      ))}
    </section>
  );
};

const Block: React.FCX<{ ch: string }> = ({ ch }) => {
  const [{ x, y }, set] = useSpring(() => ({
    config: config.gentle,
    x: 0,
    y: 0
  }));
  const bind = useDrag(({ offset: [x, y] }) => {
    set({ x, y });
  });
  return (
    <animated.h2 {...bind()} style={{ x, y }}>
      {ch}
    </animated.h2>
  );
};

const StyledScatteredCharacters = styled(ScatteredCharacters)`
  h2 {
    font-size: 10rem;
    cursor: pointer;
    user-select: none;
    color: ${({ mode }) => (mode ? '#ffffff' : '#09090f')};
  }
`;

export default ({ text }: { text: string }) => {
  const { mode } = ColorModeContainer.useContainer();
  return <StyledScatteredCharacters text={text} mode={mode} />;
};
