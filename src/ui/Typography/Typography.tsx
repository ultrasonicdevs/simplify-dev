import Polymorph, { PolymorphProps } from '../Polymorph/Polymorph'
import { FC } from 'react'

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

export type TypographyProps = PolymorphProps<keyof typeof TypographyAsVariants>

const Typography: FC<TypographyProps> = ({ as = 'p', children, ...props }) => {
  return (
    <Polymorph as={as} {...props}>
      {children}
    </Polymorph>
  )
}

export default Typography
