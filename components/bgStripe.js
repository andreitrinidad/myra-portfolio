import React from 'react'

export default function BgStripe (props, children) {
  const {
    stripeColor = 'var(--color-akaroa)',
    bgColor = 'var(--color-ecru-white)',
    fixed = false
  } = props;

  return (
    <div className={`bg-stripe ${fixed ? 'bg-stripe--fixed' : ''}`} style={{backgroundColor: bgColor, borderColor: stripeColor}}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}