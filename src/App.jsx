import { Container } from "@chakra-ui/react"
import { Routes, Route } from "react-router-dom"
import { UserPage, PostPage } from "./pages"
import { Header } from "./components";


function App() {

  return (
    <Container maxW="620px">
      <Header /> 
      <Routes>
        <Route path="/:username" element={<UserPage />}/>
        <Route path="/:username/post/:pId" element={<PostPage />}/>
      </Routes>
    </Container>
  )
}

export default App;
