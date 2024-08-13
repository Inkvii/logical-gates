import { UrlObject } from "url"

export interface UrlObjectWithPath extends UrlObject {
  path: string
}
