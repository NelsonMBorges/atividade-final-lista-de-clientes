import { useState, useEffect } from 'react'
import ClientForm from './components/ClientForm'
import ClientList from './components/ClientList'
import './styles/global.css'

function App() {
  const [tab, setTab] = useState('form')
  const [clients, setClients] = useState([])

  // Carrega os clientes salvos ao iniciar o app
  useEffect(() => {
    const saved = localStorage.getItem('clients')
    if (saved) {
      setClients(JSON.parse(saved))
      console.log('📦 Clientes restaurados do localStorage!')
    }
  }, [])

  // Salva os clientes automaticamente sempre que mudam
  useEffect(() => {
    localStorage.setItem('clients', JSON.stringify(clients))
    console.log('💾 Clientes atualizados no localStorage!')
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