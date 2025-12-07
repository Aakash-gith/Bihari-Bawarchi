import React from 'react';

export interface Post {
  id: string;
  title: string;
  image: string;
  likes: string;
  description: string;
  videoUrl?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}