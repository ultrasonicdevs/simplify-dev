import Polymorph, { PolymorphProps } from '../Polymorph/Polymorph'
import { ElementType, FC } from 'react'

export enum TypographyAsVariants {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span,
  label,
}

type TypographyProps = PolymorphProps<keyof typeof TypographyAsVariants>

const Typography: FC<TypographyProps> = ({ as, children, ...props }) => {
  return (
    <Polymorph as={as || ('p' as ElementType)} {...props}>
      {children}
    </Polymorph>
  )
}

export default Typography
