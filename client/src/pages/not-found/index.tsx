import { useLocation } from "react-router-dom"


const NotFound = () => {
    const location=useLocation();
    //console.log(location);
  return (
    <div>
      <h1>{`The Page You are trying to access:${location.pathname} is not found`}</h1>
    </div>
  )
}

export default NotFound
