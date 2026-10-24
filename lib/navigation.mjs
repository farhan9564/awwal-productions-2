export function transitionDestination(currentHref, linkHref, options = {}) {
  if (
    options.defaultPrevented ||
    options.button > 0 ||
    options.metaKey ||
    options.ctrlKey ||
    options.shiftKey ||
    options.altKey ||
    options.download ||
    (options.target && options.target !== "_self")
  )
    return null;
  const current = new URL(currentHref);
  let next;
  try {
    next = new URL(linkHref, current);
  } catch {
    return null;
  }
  if (
    !["http:", "https:"].includes(next.protocol) ||
    next.origin !== current.origin ||
    next.pathname === current.pathname ||
    /^\/(api|_next|assets)(\/|$)/.test(next.pathname)
  )
    return null;
  return next.pathname + next.search + next.hash;
}
