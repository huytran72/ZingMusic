"use client"
import { useSearchParams } from "next/navigation"

const DetailTrackPage = ({ params }: { params: { slug: string } }) => {
  const searchParams = useSearchParams()

  const search = searchParams.get("search")

  return <div>DetailTrackPage</div>
}

export default DetailTrackPage
