import React from 'react'
import { HeadingWrapper, HeadingText } from './style'

export interface Props {}

export const Heading: React.FC<Props> = () => {
  return (
    <HeadingWrapper>
      <HeadingText>
        TypescriptWeatherApp
      </HeadingText>
    </HeadingWrapper>
  )
}