"use client"
import React from 'react'
import { useSelector } from 'react-redux'

export default function CartCount() {
    const cartItems = useSelector(state=>state.cart)

  return (
    <span>{cartItems.length}</span>
  )
}
