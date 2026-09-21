import React from 'react'

type Props = React.SVGProps<SVGSVGElement> & {
  /** Single knob to control both width & height */
  size?: number | string // e.g. 24 | "1em"
  title?: string
}

const WhatsappIcon = ({ size = 24, title = 'WhatsApp', className, ...rest }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor" // <- color follows CSS text color
      xmlns="http://www.w3.org/2000/svg"
      aria-label={title}
      role="img"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      {...rest}
    >
      <path
        fill="currentColor"
        d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.42-1.36a9.9 9.9 0 0 0 4.62 1.14h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2zm0 18.1a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.78.83-3.04-.2-.31a8.15 8.15 0 0 1-1.26-4.29c0-4.51 3.68-8.18 8.24-8.18 4.55 0 8.24 3.67 8.24 8.18 0 4.51-3.69 8.19-8.25 8.19zm4.53-6.13c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.24-.64.81-.78.97-.14.17-.29.19-.53.06-.25-.12-1.04-.38-1.98-1.21-.73-.65-1.22-1.45-1.37-1.7-.14-.24-.02-.37.11-.49.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.77-1.83-.2-.48-.41-.42-.56-.42h-.48c-.16 0-.43.06-.65.31-.23.24-.85.83-.85 2.03s.87 2.35 1 2.51c.12.17 1.71 2.61 4.15 3.66.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.09.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.28z"
      />
    </svg>
  )
}

export default WhatsappIcon
