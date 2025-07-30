import * as React from "react"

function Card({ className = "", children }: { className?: string, children: React.ReactNode }) {
  return (
    <div className={`rounded-2xl bg-gray-800 shadow-lg ${className}`}>
      {children}
    </div>
  )
}

function CardContent({ className = "", children }: { className?: string, children: React.ReactNode }) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  )
}

export { Card, CardContent }
