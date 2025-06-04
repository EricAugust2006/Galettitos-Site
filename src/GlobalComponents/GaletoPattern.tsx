export function GaletosPattern({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <pattern id="galeto-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path
            d="M30,50 C30,40 40,30 50,30 C60,30 70,40 70,50 C70,60 60,70 50,70 C40,70 30,60 30,50 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle cx="50" cy="50" r="3" fill="currentColor" />
          <path d="M50,30 L50,20 M50,70 L50,80 M30,50 L20,50 M70,50 L80,50" stroke="currentColor" strokeWidth="1" />
        </pattern>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#galeto-pattern)" />
      </svg>
    </div>
  )
}