// @ts-ignore: this is safe, we don't want to actually make punctuation.inline.ts a module as
// modules are automatically deferred and we don't want that to happen for critical beforeDOMLoads
// see: https://v8.dev/features/modules#defer
import punctuationScript from "./scripts/punctuation.inline"
import styles from "./styles/punctuation.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { i18n } from "../i18n"
import { classNames } from "../util/lang"

const Punctuation: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
  return (
    <button class={classNames(displayClass, "punctuation")} id="punctuation">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        id="punctuationIcon"
        x="0px"
        y="0px"
        viewBox="0 0 32 32"
        style="enable-background:new 0 0 32 32"
        xmlSpace="preserve"
      >
        <title> q</title>
        <path d="M16 0 C 24.8 0 32 7.2 32 16 C 32 24.8 24.8 32 16 32 C 7.2 32 0 24.8 0 16 C 0 7.2 7.2 0 16 0 z M 16 3 C 9.5 3 4 8.5 4 15 C 4 21.5 9.5 27 16 27 C 22.5 27 28 21.5 28 15 C 28 8.5 22.5 3 16 3 z M 16 10 C 17.5 10 19 11.5 19 13 C 19 14.5 17.5 16 16 16 C 14.5 16 13 14.5 13 13 C 13 11.5 14.5 10 16 10 z M 16 20 C 17.5 20 19 21.5 19 23 C 19 24.5 17.5 26 16 26 C 14.5 26 13 24.5 13 23 C 13 21.5 14.5 20 16 20 z" />
      </svg>
    </button>
  )
}

Punctuation.beforeDOMLoaded = punctuationScript
// Punctuation.css = styles

export default (() => Punctuation) satisfies QuartzComponentConstructor
