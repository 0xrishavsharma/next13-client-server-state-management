import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { Pokemon } from '@/types'

export interface SearchState {
  search: string
  startupPokemon: Pokemon[]
}

const initialState: SearchState = {
  search: '',
  startupPokemon: [],
}
