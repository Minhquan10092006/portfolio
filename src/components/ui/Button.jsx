import './Button.css';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconRight,
  href,
  external,
  onClick,
  className = '',
  ...props
}) {
  const cls = `btn btn--${variant} btn--${size} ${className}`.trim();
  const isMailto = href?.startsWith('mailto:');

  if (href) {
    return (
      <a
        href={href}
        className={cls}
        target={external && !isMailto ? '_blank' : undefined}
        rel={external && !isMailto ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {Icon && !iconRight && <Icon size={size === 'sm' ? 14 : 16} />}
        <span>{children}</span>
        {Icon && iconRight && <Icon size={size === 'sm' ? 14 : 16} />}
      </a>
    );
  }

  return (
    <button className={cls} onClick={onClick} {...props}>
      {Icon && !iconRight && <Icon size={size === 'sm' ? 14 : 16} />}
      <span>{children}</span>
      {Icon && iconRight && <Icon size={size === 'sm' ? 14 : 16} />}
    </button>
  );
}
