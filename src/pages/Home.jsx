import { useState, useEffect } from "react"
import axios from "axios"
import Card from "../components/Card"

const Home = () => {
const [applications, setApplications] = useState([])

  useEffect(() => {

    const fetchApplications = async () => {
      const response = await axios.get('http://localhost:5000/');
      console.log(response.data[0]);
      if(response.status===200) {
        setApplications(response.data)
      }
    }

    fetchApplications();

  }, [])


  return (
    <div className="p-8">
    <h2 className="text-4xl font-bold text-center mb-4">Applications</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-screen-2xl gap-4">
      {
        applications?.map(application => <Card key={application._id} data={application} />)
      }
    </div>
    </div>
  )
}
export default Home