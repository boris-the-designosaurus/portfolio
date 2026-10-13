import { BrowserRouter, Routes, Route, Navigate } from 'react-router'
import { NewHomePageDraft } from './app/pages/NewHomePageDraft'
import { TeamYouDraftPage } from './app/pages/TeamYouDraftPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewHomePageDraft />} />
        <Route path="/draft" element={<Navigate to="/" replace />} />
        <Route path="/draft/teamyou" element={<TeamYouDraftPage />} />
      </Routes>
    </BrowserRouter>
  )
}