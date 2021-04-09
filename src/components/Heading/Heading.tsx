import React from 'react'
import { HeadingWrapper, HeadingText } from './style'

export interface Props {
  text: string,
}

export const Heading: React.FC<Props> = ({
  text,
}) => {
  return (
    <HeadingWrapper>
      <HeadingText>
        {text}
      </HeadingText>
    </HeadingWrapper>
  )
}