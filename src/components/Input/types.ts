import { ReactChild, ReactElement, ReactNode } from "react"

export interface InputProps {
  name: string
  icon?: any
  placeholder: string
}

export interface InputContainerProps {
  isFilled: boolean
  isFocused: boolean
}

export interface InputRefProps extends React.MutableRefObject<null> {
  value: string
}
