import React from 'react';
import Link from 'next/link';

export type CardProps = {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  description?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  href?: string;
  badge?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode; // custom content (replaces description if provided)
  overlay?: boolean; // put content over image with gradient
  gradientClassName?: string; // custom gradient when overlay=true
  hoverScale?: boolean; // scale image on hover
  className?: string;
  imageClassName?: string;
  contentClassName?: string;
  roundedClassName?: string; // e.g. 'rounded-lg'
  shadowClassName?: string; // e.g. 'shadow-lg'
};

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export function Card({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  href,
  badge,
  footer,
  children,
  overlay = false,
  gradientClassName = 'bg-gradient-to-t from-black/80 via-black/30 to-transparent',
  hoverScale = true,
  className,
  imageClassName,
  contentClassName,
  roundedClassName = 'rounded-lg',
  shadowClassName = 'shadow-lg',
}: CardProps) {
  const Wrapper: React.ElementType = href ? Link : 'div';
  const wrapperProps = href ? { href } : {};

  return (
    <Wrapper
      {...(wrapperProps as any)}
      className={cx(
        'group relative overflow-hidden transition-transform duration-300',
        roundedClassName,
        shadowClassName,
        className
      )}
    >
      {imageSrc && (
        <div className={cx('relative w-full h-full', overlay ? 'min-h-[18rem]' : '')}>
          <img
            src={imageSrc}
            alt={imageAlt || ''}
            className={cx(
              'w-full h-full object-cover',
              hoverScale && 'transition-transform duration-700 group-hover:scale-110',
              imageClassName
            )}
          />
          {overlay && (
            <div className={cx('absolute inset-0', gradientClassName)} />
          )}

          {/* Badge (e.g., Popular/New) */}
          {badge && (
            <div className="absolute top-4 right-4 z-10">
              <div className="px-3 py-1 rounded-full text-sm font-medium bg-amber-600 text-white">
                {badge}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div
        className={cx(
          overlay
            ? 'absolute inset-x-0 bottom-0 z-10 p-6 text-white'
            : 'p-6 text-gray-900',
          contentClassName
        )}
      >
        {subtitle && (
          <div className={cx(overlay ? 'text-white/80' : 'text-gray-500', 'text-sm mb-1')}>{subtitle}</div>
        )}

        {title && (
          <h3 className={cx(overlay ? 'text-white' : 'text-gray-900', 'text-xl font-light mb-2')}>{title}</h3>
        )}

        {children ? (
          <div className={overlay ? 'text-white/90' : 'text-gray-700'}>{children}</div>
        ) : description ? (
          <p className={overlay ? 'text-white/80' : 'text-gray-700'}>{description}</p>
        ) : null}
      </div>

      {/* Footer area (e.g., price + button) */}
      {footer && (
        <div className={cx(overlay ? 'absolute inset-x-0 bottom-0 z-10 p-6 pt-0 text-white' : 'px-6 pb-6')}>{footer}</div>
      )}
    </Wrapper>
  );
}

export default Card;
