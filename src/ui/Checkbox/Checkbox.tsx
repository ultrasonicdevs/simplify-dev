import { CheckboxToggleVariants, CheckboxVariants } from './Checkbox.styles'
import { forwardRef, ForwardRefExoticComponent, RefAttributes } from 'react'
import useCheckbox from '../../hooks/useCheckbox/useCheckbox'
import CheckedIcon from './assets/checked.svg'
import Box from 'ui/Box/Box'

enum RoundedVariants {
  none,
  sm,
  md,
  lg,
}

export interface CheckboxProps {
  rounded?: keyof typeof RoundedVariants
  checkedClassName?: string
  className?: string
  disabled?: boolean
  checkedIcon?: string
}

type CheckboxType = ForwardRefExoticComponent<Omit<CheckboxProps, 'ref'> & RefAttributes<boolean>>

const Checkbox: CheckboxType = forwardRef(
  ({ disabled = false, className, checkedIcon, checkedClassName, rounded }, ref) => {
    const [checked, changeState] = useCheckbox(disabled, ref)

    return (
      <Box
        as="div"
        rounded={rounded || 'sm'}
        onClick={changeState}
        className={CheckboxVariants({ disabled, className })}>
        {
          <img
            src={checkedIcon || CheckedIcon}
            alt=" "
            className={CheckboxToggleVariants({ checked, disabled, className: checkedClassName })}
          />
        }
      </Box>
    )
  },
)

export default Checkbox
