import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp'
import { OTPInputProps } from 'input-otp'
import { KeyboardEventHandler } from 'react'

export default function OtpInput({
  value,
  onChange,
  maxLength = 6,
  ...props
}: Omit<OTPInputProps, 'render'>) {
  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    switch (e.key) {
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '0':
      case 'a':
      case 'b':
      case 'c':
      case 'd':
      case 'e':
      case 'f':
      case 'A':
      case 'B':
      case 'C':
      case 'D':
      case 'E':
      case 'F':
        if ('value' in e.currentTarget! && e.currentTarget!.value.length === 6)
          e.preventDefault()
        return
      case 'Backspace':
      case 'Delete':
      case 'ArrowLeft':
      case 'ArrowRight':
      case 'ArrowUp':
      case 'ArrowDown':
      case 'Tab':
      case 'Enter':
        return
      default:
        e.preventDefault()
    }
  }

  return (
    <InputOTP
      value={value}
      onChange={onChange}
      onKeyDown={handleKeyDown}
      {...props}
      maxLength={maxLength}
    >
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  )
}
