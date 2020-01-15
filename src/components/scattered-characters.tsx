import React from 'react';
import { animated, config, useSpring } from 'react-spring';
import { useDrag } from 'react-use-gesture';

type Props = { text: string };

export const ScatteredCharacters: React.FCX<Props> = ({ className, text }) => {
  const texts = [
    ...'AOJCoordinatorはAOJ関連の色々をいい感じになんやかんやするサービスです'
  ];

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

export default ScatteredCharacters;
