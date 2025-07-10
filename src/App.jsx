import { useState } from 'react'
import ClientForm from './components/ClientForm'
import ClientList from './components/ClientList'
import './styles/global.css'

function App() {
  const [tab, setTab] = useState('form')
  const [clients, setClients] = useState([])

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