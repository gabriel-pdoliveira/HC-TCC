import { AuthGoogleProvider } from './contexts/authGoogle';
import { Rota } from './routes/routes';

function App() {
  return (
    <AuthGoogleProvider>
      <Rota />
    </AuthGoogleProvider>
  )
}

export default App
