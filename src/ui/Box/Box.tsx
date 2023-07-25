import Polymorph, { PolymorphProps } from '../Polymorph/Polymorph'
import { BoxVariants } from 'ui/Box/Box.styles'
import { FC } from 'react'

enum BoxAsVariants {
  article,
  section,
  aside,
  form,
  main,
  div,
  ul,
  ol,
}

export type BoxProps = PolymorphProps<keyof typeof BoxAsVariants> & {
  padding?: 'none' | 'sm' | 'md' | 'lg'
  rounded?: 'none' | 'sm' | 'md' | 'lg'
}

const Box: FC<BoxProps> = ({ rounded, padding, className, children, as, ...props }) => {
  return (
    <Polymorph as={as} className={BoxVariants({ padding, rounded, className })} {...props}>
      {children}
    </Polymorph>
  )
}

export default Box
