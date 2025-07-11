import { useState, useEffect } from 'react'
import ClientForm from './components/ClientForm'
import ClientList from './components/ClientList'
import './styles/global.css'

function App() {
  const [tab, setTab] = useState('form')
  const [clients, setClients] = useState([])

  // Carrega clientes salvos no localStorage ao iniciar o app
  useEffect(() => {
    const savedClients = localStorage.getItem('clients')
    if (savedClients) {
      setClients(JSON.parse(savedClients))
    }
  }, [])

  // Salva automaticamente no localStorage sempre que a lista mudar
  useEffect(() => {
    localStorage.setItem('clients', JSON.stringify(clients))
  }, [clients])

  return (
    <div className="container">
      <h1>Cadastro de Clientes</h1>

      <nav>
        <button onClick={() => setTab('form')}>Cadastrar</button>
        <button onClick={() => setTab('list')}>Ver Clientes</button>
      </nav>

      {tab === 'form' && <ClientForm setClients={setClients} />}
      {tab === 'list' && <ClientList clients={clients} />}
    </div>
  )
}

export default App