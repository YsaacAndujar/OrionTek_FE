import { AppRouter } from 'routers'
import { AuthContextProvider } from './context/auth'
import { LoadingContextProvider } from './context/loading'

function App() {

  return (
    <LoadingContextProvider>
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>
    </LoadingContextProvider>
  )
}

export default App
