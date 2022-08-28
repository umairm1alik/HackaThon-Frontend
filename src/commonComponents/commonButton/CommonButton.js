import React from 'react'
import { buttonStyle } from './commonButtonStyle'

export default function CommonButton(props) {
  return (
    <button style={buttonStyle.btn} onClick={props.onClick}>{props.title}</button>
  )
}
