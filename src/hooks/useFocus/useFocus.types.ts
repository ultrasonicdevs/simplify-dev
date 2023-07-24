import { RefObject } from 'react'

export type Focus = () => [boolean, RefObject<HTMLElement>, () => void, () => void]
