"use client"
import { useTheme } from 'next-themes'
import React, { useEffect } from 'react'

function dashboard() {
    const { setTheme } = useTheme()
    useEffect(() => {
    setTheme('system')
    }, [])
  return (
    <div>dashboard</div>
  )
}

export default dashboard