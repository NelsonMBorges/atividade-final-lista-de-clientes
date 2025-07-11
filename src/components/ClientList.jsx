function ClientList({ clients }) {
  // Se não houver clientes, exibir mensagem
  if (clients.length === 0) {
    return <p>Nenhum cliente cadastrado ainda.</p>
  }

  return (
    <div>
      <h2>Clientes Cadastrados</h2>
      <ul>
        {clients.map((client, index) => (
          <li key={index}>
            <strong>{client.name}</strong> – {client.phone}
            {client.note && <p>Observação: {client.note}</p>}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ClientList