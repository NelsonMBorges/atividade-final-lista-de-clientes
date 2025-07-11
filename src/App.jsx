import { useState, useEffect } from 'react'
import ClientForm from './components/ClientForm'
import ClientList from './components/ClientList'
import './styles/global.css'

function App() {
  const [tab, setTab] = useState('form')
  const [clients, setClients] = useState([])
  const [loading, setLoading] = useState(false)

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

  // Troca de aba com efeito de carregamento
  function trocarAba(novaAba) {
    setLoading(true)
    setTimeout(() => {
      setTab(novaAba)
      setLoading(false)
    }, 500) // meio segundo de "suspense"
  }

  return (
    <div className="container">
      <h1>Cadastro de Clientes</h1>

      <nav>
        <button onClick={() => trocarAba('form')}>Cadastrar</button>
        <button onClick={() => trocarAba('list')}>Ver Clientes</button>
      </nav>

      {loading ? (
        <p className="loading">⏳ Carregando conteúdo...</p>
      ) : (
        <>
          {tab === 'form' && <ClientForm setClients={setClients} />}
          {tab === 'list' && <ClientList clients={clients} />}
        </>
      )}
    </div>
  )
}

export default App