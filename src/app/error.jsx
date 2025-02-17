"use client"


import { useEffect } from "react"

export default function error({error, reset}) {
  useEffect(() => {
    console.log(error);
  }, [error])
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-semibold">Error</h1>
      <p className="text-xl font-semibold">An error occurred, Please try again</p>
      <button onClick={() => reset()} className="cursor-pointer bg-amber-500 text-white font-semibold px-4 py-2 rounded-lg mt-4">Retry</button>
    </div>
  )
}
