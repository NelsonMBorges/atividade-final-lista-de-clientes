import { render, screen, fireEvent } from '@testing-library/react'
import ClientForm from './ClientForm'

test('exibe erro para telefone inválido', () => {
  const setClients = vi.fn()
  render(<ClientForm setClients={setClients} />)

  fireEvent.change(screen.getByLabelText('Nome:'), {
    target: { value: 'Ana' }
  })
  fireEvent.change(screen.getByLabelText('Telefone:'), {
    target: { value: 'abc123' }
  })
  fireEvent.click(screen.getByText('Cadastrar'))

  expect(screen.getByText(/Telefone inválido/i)).toBeInTheDocument()
})