import { useState } from "react"

const LikePage = () => {
  const [name, setName] = useState("Harry")
  return <div>Like Page : with name = {name}</div>
}
export default LikePage
