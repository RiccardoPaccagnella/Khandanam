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

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 303.19 264.25" x="0px" y="0px" id="addPunctuation">
        <g data-name="Calque 2">
          <g data-name="Calque 1">
            <path d="M140.1,211.4a2.5,2.5,0,0,0,0-5C65.61,206.4,5,145.79,5,71.3a66.3,66.3,0,1,1,66.3,66.3,2.5,2.5,0,1,0,0,5A71.3,71.3,0,1,0,0,71.3C0,148.55,62.85,211.4,140.1,211.4Z"/>
            <path d="M231.89,137.6a2.5,2.5,0,0,0,0,5,71.3,71.3,0,1,0-71.3-71.3c0,77.25,62.85,140.1,140.1,140.1a2.5,2.5,0,0,0,0-5c-74.49,0-135.1-60.61-135.1-135.1a66.3,66.3,0,1,1,66.3,66.3Z"/>
          </g>
        </g>
        <text x="0" y="226.4" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">
        Created by fonk</text>
        <text x="0" y="231.4" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">
        from the Noun Project</text>
      </svg>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 334.56 358.3625" x="0px" y="0px" id="removePunctuation">
          <g data-name="Calque 2">
            <g data-name="Calque 1">
              <path d="M259.86,176.94a2.5,2.5,0,0,0,0,5A74.69,74.69,0,0,0,279.09,35.07l30.8-30.8A2.5,2.5,0,0,0,306.36.73L273.3,33.79a74.59,74.59,0,0,0-88.13,73.46q0,7.08.67,14L76.61,230.48A142,142,0,0,1,5,107.25a69.7,69.7,0,1,1,69.7,69.69,2.5,2.5,0,1,0,0,5A74.7,74.7,0,1,0,0,107.25,147,147,0,0,0,73,234.13L24.67,282.42a2.5,2.5,0,0,0,1.76,4.27A2.53,2.53,0,0,0,28.2,286l49.28-49.29a145.94,145.94,0,0,0,69.41,17.47,2.5,2.5,0,0,0,0-5A141,141,0,0,1,81.18,233l105.4-105.39C196.51,199,258,254.14,332.06,254.14a2.5,2.5,0,1,0,0-5c-72.88,0-133.09-55.24-141-126l83.88-83.89a69.69,69.69,0,0,1-15.08,137.73Zm-69.38-60.33c-.2-3.1-.31-6.22-.31-9.36a69.57,69.57,0,0,1,78.76-69.09Z"/>
            </g>
          </g>
          <text x="0" y="301.69" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">
          Created by fonk</text>
          <text x="0" y="306.69" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">
          from the Noun Project</text>
        </svg>

      </button>
  )
}

Punctuation.beforeDOMLoaded = punctuationScript
Punctuation.css = styles

export default (() => Punctuation) satisfies QuartzComponentConstructor
