import { DetailedHTMLProps, KeyboardEventHandler, useRef } from 'react'
import { Input } from '@/components/ui/input'

export default function ColorInput({
  value,
  onChange,
  ...props
}: DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) {
  const ref = useRef<HTMLInputElement>(null)

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

  const handleClick = () => {
    ref.current?.focus()
  }

  return (
    <div
      onClick={handleClick}
      className="flex items-center border border-input h-10 w-full max-w-44 rounded-md bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none "
    >
      <span className="text-xl">#</span>
      <Input
        ref={ref}
        value={value}
        minLength={6}
        maxLength={6}
        title="Enter a 6-digit hex color code"
        pattern="^#?([a-fA-F0-9]{6})$"
        onChange={onChange}
        onKeyDown={handleKeyDown}
        className="border-none focus-visible:border-none focus-visible:ring-0"
        {...props}
      />
      <span className="w-full justify-self-end">
        {(value as string).length ?? 0} / 6
      </span>
    </div>
  )
}
