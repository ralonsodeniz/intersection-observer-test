export const breakPoints = {
  mobile: 414,
  portrait: 768,
  landscape: 1024,
  desktop: 1366,
  bigDesktop: 1920,
};

export const mediaQueries = {
  mobileOnly: `@media only screen and (max-width: ${breakPoints.mobile}px)`,
  portrait: `@media only screen and (min-width: ${breakPoints.portrait}px)`,
  landscape: `@media only screen and (min-width: ${breakPoints.landscape}px)`,
  desktop: `@media only screen and (min-width: ${breakPoints.desktop}px)`,
  bigDesktop: `@media only screen and (min-width: ${breakPoints.bigDesktop}px)`,
};
