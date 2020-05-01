import React, { memo } from 'react';
import { FaRegCalendarAlt, FaTags } from 'react-icons/fa';
import { ScatteredChars, TagsList } from 'src/components';

import styled from '@emotion/styled';

type ContainerProps = { title?: string; date?: string; tags?: string[] };
type Props = {} & ContainerProps;

const Component: React.FCX<Props> = memo(({ className, title, date, tags }) => (
  <section className={className}>
    <ScatteredChars chars={title || `title`} />
    <div>
      <p>
        <i>
          <FaRegCalendarAlt />
        </i>
        {date}
      </p>
      <div>
        <i>
          <FaTags />
        </i>
        <TagsList tags={tags} isTitle />
      </div>
    </div>
  </section>
));

const StyledComponent = styled(Component)`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 75vh;
  padding: 0 4rem;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    padding: 2rem;

    > p {
      color: #ffffff;
      > i {
        padding: 0.5rem;
        margin-right: 0.5rem;
        font-size: 2rem;
        color: #ffffff;
      }
    }

    > div {
      display: flex;
      align-items: flex-end;
      > i {
        padding: 0.5rem;
        font-size: 2rem;
        color: #ffffff;
      }
    }
  }

  @media screen and (max-width: 1100px) {
  }
  @media screen and (max-width: 768px) {
    > ul {
      padding: 4rem 0;
    }
  }
  @media screen and (max-width: 480px) {
    height: 40vh;
    padding: 1rem;

    > div {
      flex-direction: column;
      padding: 0;
      > p {
        font-size: 1.2rem;
        > i {
          font-size: 1.4rem;
        }
      }
      > div {
        > i {
          font-size: 1.6rem;
        }
      }
    }
  }
  @media screen and (max-height: 430px) {
  }
`;

const Container: React.FCX<ContainerProps> = (props) => <StyledComponent {...props} />;

export default memo(Container);
