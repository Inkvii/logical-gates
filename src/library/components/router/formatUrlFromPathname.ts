import { format, UrlObject } from "url"

export function formatUrlFromPathname(url: UrlObject) {
  return format(url)
}
