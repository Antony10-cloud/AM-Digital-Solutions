type LogoProps = {
  className?: string;
};

export function Logo({ className = "" }: LogoProps) {
  return (
    <span className={`logo ${className}`.trim()} aria-hidden="true">
      <svg className="logo-mark" viewBox="0 0 112 58" role="img">
        <path
          className="logo-a"
          d="M2 52 24 5c1.2-2.6 3.3-4 6.2-4h7.4L59 52H46.2l-5.1-12H19.5l-5.2 12H2Zm22.7-23.8h11.2L30.4 14l-5.7 14.2Z"
        />
        <path
          className="logo-m"
          d="M45 2h13.7l13.6 23.4L86 2h14l10 50H97.2l-6-31.1-18.9 31.6L53.6 21 48 52H35.2L45 2Z"
        />
      </svg>
      <span className="logo-type">
        <strong>Digital</strong>
        <strong>Studio</strong>
      </span>
    </span>
  );
}
