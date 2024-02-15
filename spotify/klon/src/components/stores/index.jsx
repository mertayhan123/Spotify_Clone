import { configureStore } from '@reduxjs/toolkit'
import player from './player'

export default configureStore({
  reducer: {
    player: player,
  },
})