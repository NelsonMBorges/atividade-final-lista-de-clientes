import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import ClientList from './ClientList'

describe('ClientForm', () => {
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

    expect(screen.getByText(/telefone inválido/i)).toBeInTheDocument()
  })
})