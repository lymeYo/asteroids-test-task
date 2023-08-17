'use client' // Error components must be Client Components

import { useEffect } from 'react'

import ErrorMessage from '@/components/ErrorMessage'

interface ErrorProps {
  error: Error & { digest?: string }
}
export default function Error({ error }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return <ErrorMessage />
}
