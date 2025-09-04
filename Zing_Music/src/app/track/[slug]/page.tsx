"use client"
import { useSearchParams } from "next/navigation"

const DetailTrackPage = ({ params }: { params: { slug: string } }) => {
  const searchParams = useSearchParams()

  return <div>DetailTrackPage</div>
}

export default DetailTrackPage
