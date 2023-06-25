import type { RequestEvent } from "@sveltejs/kit";

export function generateRedirectToLoginPageURL(
  url: URL,
  message = "Please log into your account."
) {
  // This is to make sure attackers cannot put full links as a parameter, so there will always be a /
  const redirectTo = `/${url.pathname.slice(1)}` + url.search;
  return `/login?redirectTo=${redirectTo}&message=${message}`;
}
