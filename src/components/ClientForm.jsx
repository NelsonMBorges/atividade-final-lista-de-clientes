import { useState } from 'react'
import '../styles/form.css' // garante o estilo

function ClientForm({ setClients }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [note, setNote] = useState('')
  const [error, setError] = useState('')

  const isPhoneValid = (phone) => /^\d{10,11}$/.test(phone)

  function handleSubmit(e) {
    e.preventDefault()

    if (!name || !phone) {
      setError('Nome e telefone são obrigatórios.')
      return
    }

    if (!isPhoneValid(phone)) {
      setError('Telefone inválido. Use apenas dígitos com 10 ou 11 caracteres.')
      return
    }

    const newClient = { name, phone, note }
    setClients(prev => [...prev, newClient])

    // limpar os campos
    setName('')
    setPhone('')
    setNote('')
    setError('')
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}

      <label>Nome:</label>
      <input value={name} onChange={e => setName(e.target.value)} />

      <label>Telefone:</label>
      <input value={phone} onChange={e => setPhone(e.target.value)} />

      <label>Observação:</label>
      <textarea value={note} onChange={e => setNote(e.target.value)} />

      <button type="submit">Cadastrar</button>
    </form>
  )
}

export default ClientForm