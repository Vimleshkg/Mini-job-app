import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import Jobs from './Components/Jobs/Jobs'
import { RouterProvider } from 'react-router'
import JobProfile from './Components/JobProfile/JobProfile'

function App() {
  const myRouter = createBrowserRouter([
    {
      path:'/',
      element:<Jobs/>
    },
    {
      path:'/jobProfile',
      element:<JobProfile/>
    }
  ])

  return (
    <>
     <RouterProvider router={myRouter} />
    </>
  )
}

export default App
