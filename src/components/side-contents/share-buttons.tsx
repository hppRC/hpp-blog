import React from 'react';
import {
    FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TwitterIcon,
    TwitterShareButton
} from 'react-share';

import styled from '@emotion/styled';

import { useSiteMetadata } from '../../hooks';

type ContainerProps = { title: string; slug: string };
type Props = { twitter: string; siteUrl: string } & ContainerProps;
type HatebuProps = { url: string; title: string };

const HatebuButton: React.FCX<HatebuProps> = ({ className, url, title }) => (
  <button className={className} type='button'>
    <a
      href={`http://b.hatena.ne.jp/add?mode=confirm&url=${url}&title=${title}`}
      target='_blank'
      rel='noopener noreferrer'
    >
      B!
    </a>
  </button>
);

const StyledHatebuButton = styled(HatebuButton)`
  width: 32px;
  height: 32px;
  > a {
    display: block;
    font-weight: 700;
    line-height: 32px;

    color: #ffffff;
    text-align: center;
    text-decoration: none;
    background: linear-gradient(#00a5e0 0%, #00a5e0 40%, #008de1 60%, #008de1 100%);
    border-radius: 50%;
  }
`;

const Component: React.FCX<Props> = ({ className, title, slug, twitter, siteUrl }) => {
  const twitterAccount = twitter.split(`/`).pop(); // @hpp_ricecaeke -> hpp_ricecake
  const articleUrl = `${siteUrl}blog/${slug}`;
  return (
    <div className={className}>
      <FacebookShareButton url={articleUrl}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <LinkedinShareButton url={articleUrl}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <TwitterShareButton title={`${title}\n`} via={twitterAccount} url={articleUrl}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <StyledHatebuButton url={articleUrl} title={title} />
    </div>
  );
};

const StyledComponent = styled(Component)`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 5rem 1rem;

  > button {
    margin: 0 0.8rem 0 0;
    transition: opacity 0.15s;
    :hover {
      opacity: 0.6;
    }
  }

  @media screen and (max-width: 1100px) {
    padding: 0 10rem;
  }
  @media screen and (max-width: 768px) {
    padding: 4rem 2rem;
  }
  @media screen and (max-width: 480px) {
    padding: 2rem;

    > button {
      margin: 0 0.5rem;
    }
  }
  @media screen and (max-height: 430px) {
  }
`;

const Container: React.FCX<ContainerProps> = ({ title, slug }) => {
  const { siteUrl = 'https://blog.hpprc.com', social = {} } = useSiteMetadata();
  const { twitter = `https://twitter.com/hpp_ricecake` } = social;

  return <StyledComponent {...{ twitter, siteUrl, title, slug }} />;
};

export default Container;
