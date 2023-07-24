import { ComponentPropsWithRef, ElementType, forwardRef, ReactNode, Ref } from 'react'

const defaultElement = 'div' as const

type ExcludeDuplicateKeys<E, D> = E & Omit<D, keyof E>

export type PolymorphProps<T extends ElementType> = ExcludeDuplicateKeys<
  PolymorphOwnProps<T>,
  ComponentPropsWithRef<T>
>
type PolymorphRef<R extends HTMLElement = HTMLElement> = Ref<R>
interface PolymorphOwnProps<T extends ElementType> {
  as?: T
  className?: string
  children?: ReactNode
}

const Polymorph = forwardRef(
  <T extends ElementType, R extends HTMLElement = HTMLElement>(
    props: PolymorphProps<T>,
    ref: PolymorphRef<R>,
  ) => {
    const { as = defaultElement, children, ...otherProps } = props
    const PolymorphElement = as as ElementType

    return (
      <PolymorphElement ref={ref} {...otherProps}>
        {children}
      </PolymorphElement>
    )
  },
)

export default Polymorph
