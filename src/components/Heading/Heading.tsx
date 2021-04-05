import React from 'react'
import { HeadingWrapper, HeadingText } from './style'

export interface Props {}

export const Heading: React.FC<Props> = () => {
  return (
    <HeadingWrapper>
      <HeadingText>
        Weather App - Using react typescript, redux and styled components.
      </HeadingText>
    </HeadingWrapper>
  )
}