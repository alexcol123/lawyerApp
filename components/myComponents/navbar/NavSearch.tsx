'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'
import { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'


function NavSearch() {
  const searchParams = useSearchParams()
  const { replace } = useRouter()

  const [busqueda, setBusqueda] = useState(
    searchParams.get('search')?.toString() || ''
  )

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams()

    if (value) {
      params.set('search', value)
    }
    else {
      params.delete('search')
    }
    replace(`/?${params.toString()}`)
  }, 300)

  useEffect(() => {
    if (!searchParams.get('search')) {
      setBusqueda('')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams.get('search')])


  return (
    <Input
      type='search'
      placeholder='Buscar...'
      className='max-w-sm dark:bg-muted '
      value={busqueda}
      onChange={(e) => {
        setBusqueda(e.target.value)
        handleSearch(e.target.value)
      }}
    />
  )
}
export default NavSearch