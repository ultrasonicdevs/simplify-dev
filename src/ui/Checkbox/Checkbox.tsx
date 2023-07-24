import { CheckboxToggleVariants, CheckboxVariants } from './Checkbox.styles'
import { forwardRef, ForwardRefExoticComponent, RefAttributes } from 'react'
import useCheckbox from 'hooks/useCheckbox/useCheckbox'
import Box from 'ui/Box/Box'

enum RoundedVariants {
  none,
  sm,
  md,
  lg,
}

interface CheckboxProps {
  rounded?: keyof typeof RoundedVariants
  toggleClassName?: string
  className?: string
  disabled?: boolean
}

type CheckboxType = ForwardRefExoticComponent<Omit<CheckboxProps, 'ref'> & RefAttributes<boolean>>

const Checkbox: CheckboxType = forwardRef(
  ({ disabled = false, className, toggleClassName, rounded }, ref) => {
    const [checked, changeState] = useCheckbox(disabled, ref)

    return (
      <Box
        rounded={rounded || 'sm'}
        onClick={changeState}
        className={CheckboxVariants({ disabled, className })}>
        <Box
          className={CheckboxToggleVariants({
            disabled,
            checked,
            className: toggleClassName,
          })}
        />
      </Box>
    )
  },
)

export default Checkbox
