import Polymorph, { PolymorphProps } from '../Polymorph/Polymorph'
import { boxVariants } from 'ui/Box/Box.styles'
import { forwardRef } from 'react'

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

const Box = forwardRef<HTMLElement | HTMLDivElement, BoxProps>(
  ({ rounded, padding, className, children, as, ...props }, ref) => {
    return (
      <Polymorph
        className={boxVariants({ padding, rounded, className })}
        ref={ref}
        {...props}
        as={as}>
        {children}
      </Polymorph>
    )
  },
)
export default Box
