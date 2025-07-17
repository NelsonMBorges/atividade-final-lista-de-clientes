import ClientList from './ClientList';
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, test, expect, vi } from 'vitest'
import ClientForm from './ClientForm'

describe('ClientList', () => {
  test('renderiza lista de clientes', () => {
    const clients = [
      { name: 'João', phone: '11999999999', note: 'Cliente fiel' }
    ]

    render(<ClientList clients={clients} />)

    expect(screen.getByText(/João/i)).toBeInTheDocument()
    expect(screen.getByText(/Cliente fiel/i)).toBeInTheDocument()
  })
})