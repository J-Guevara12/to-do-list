/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

const ColorPicker = ({color,handleColor}) => {
  return(
    <input type="color" css={css`
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      align-self: center;
      width: 35px;
      height: 35px;
      border: none;
      background-color: transparent;
      cursor: pointer;
      transition: 0.1s ease;

      &::-webkit-color-swatch {
        border-radius: 30%;
        border: none
      }
      &::-moz-color-swatch {
        border-radius: 30%;
        border: none
      }
      &:hover {
        transform: scale(1.1)
      }`}
      onChange={(e) => handleColor(e)}
      value={color}
    />
  )
}
export default ColorPicker
