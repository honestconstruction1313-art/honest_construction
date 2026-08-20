interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: 'light' | 'dark';
}

export default function Logo({ className = '', showText = true, variant = 'light' }: LogoProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-navy-900';
  const subColor = variant === 'light' ? 'text-sky-200' : 'text-sky-600';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 56 56"
        className="h-11 w-11 flex-shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Honest Construction logo"
      >
        {/* C - protective curve resembling a roof */}
        <path
          d="M28 4C14.7 4 4 14.7 4 28C4 41.3 14.7 52 28 52"
          stroke="#60A5FA"
          strokeWidth="5"
          strokeLinecap="round"
        />
        {/* H - structural steel beams */}
        <rect x="18" y="18" width="4" height="28" rx="1" fill="#1E3A8A" />
        <rect x="34" y="18" width="4" height="28" rx="1" fill="#1E3A8A" />
        <rect x="18" y="30" width="20" height="4" rx="1" fill="#1E3A8A" />
        {/* Steel rivets */}
        <circle cx="20" cy="24" r="1.5" fill="#60A5FA" />
        <circle cx="36" cy="24" r="1.5" fill="#60A5FA" />
        <circle cx="20" cy="40" r="1.5" fill="#60A5FA" />
        <circle cx="36" cy="40" r="1.5" fill="#60A5FA" />
      </svg>
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`font-display text-lg font-extrabold tracking-tight ${textColor}`}>
            Honest<span className={subColor}>Construction</span>
          </span>
          <span className={`text-[10px] font-medium tracking-[0.15em] uppercase ${variant === 'light' ? 'text-sky-200/70' : 'text-accent-steel'}`}>
            Solid Builds. Honest Results.
          </span>
        </div>
      )}
    </div>
  );
}
