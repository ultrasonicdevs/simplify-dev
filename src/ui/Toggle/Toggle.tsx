import { forwardRef, ForwardRefExoticComponent, RefAttributes } from 'react'
import { toggleHandleVariants, toggleVariants } from './Toggle.styles'
import useCheckbox from 'hooks/useCheckbox/useCheckbox'
import Box from 'ui/Box/Box'

enum RoundedVariants {
  none,
  sm,
  md,
  lg,
}

interface ToggleProps {
  rounded?: keyof typeof RoundedVariants
  handleClassName?: string
  className?: string
  disabled?: boolean
}

type ToggleType = ForwardRefExoticComponent<Omit<ToggleProps, 'ref'> & RefAttributes<boolean>>

const Toggle: ToggleType = forwardRef(
  ({ disabled = false, className, handleClassName, rounded }, ref) => {
    const [checked, changeState] = useCheckbox(disabled, ref)

    return (
      <Box
        rounded={rounded || 'lg'}
        className={toggleVariants(disabled)({ checked, className })}
        onClick={changeState}>
        <Box
          rounded={rounded || 'lg'}
          className={toggleHandleVariants(disabled)({ checked, className: handleClassName })}
        />
      </Box>
    )
  },
)

export default Toggle
