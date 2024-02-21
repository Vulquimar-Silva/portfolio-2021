import { ButtonContainer } from './Button.styles'

interface IProps {
  children?: React.ReactNode;
  target?: string,
  rel?: string,
  href?: string,
  type?: "button" | "submit" | undefined,
}

export function Button({ type, children }: IProps) {
  return (
    <ButtonContainer>
      <div className="button">
        <button type={type} >
          {children}
        </button>
      </div>
    </ButtonContainer>
  )
}
