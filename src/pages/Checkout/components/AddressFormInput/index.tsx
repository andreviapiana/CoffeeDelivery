/* eslint-disable react/display-name */
import { forwardRef, InputHTMLAttributes } from 'react'
import {
  InputStyleContainer,
  InputStyled,
  InputWrapper,
  RegularText,
  RightText,
} from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
  rightText?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, rightText, ...props }, ref) => {
    return (
      <InputWrapper className={className}>
        <InputStyleContainer hasError={!!error}>
          <InputStyled {...props} ref={ref} />
          {rightText && <RightText>{rightText}</RightText>}
        </InputStyleContainer>
        {error && <RegularText>{error}</RegularText>}
      </InputWrapper>
    )
  },
)
