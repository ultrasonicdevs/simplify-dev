import { checkboxToggleVariants, checkboxVariants } from './Checkbox.styles'
import useCheckbox from '../../hooks/useCheckbox/useCheckbox'
import defaultCheckedIcon from './assets/checked.svg'
import { forwardRef } from 'react'
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

const Checkbox = forwardRef<boolean, CheckboxProps>(
  ({ disabled = false, className, checkedIcon, checkedClassName, rounded }, ref) => {
    const [checked, changeState] = useCheckbox(disabled, ref)

    return (
      <Box
        as="div"
        rounded={rounded || 'sm'}
        onClick={changeState}
        className={checkboxVariants({ disabled, className })}>
        {
          <img
            src={checkedIcon || defaultCheckedIcon}
            alt=" "
            className={checkboxToggleVariants({ checked, disabled, className: checkedClassName })}
          />
        }
      </Box>
    )
  },
)

export default Checkbox
