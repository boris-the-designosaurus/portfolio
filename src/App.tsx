import { BrowserRouter, Routes, Route, Navigate } from 'react-router'
import { NewHomePageDraft } from './app/pages/NewHomePageDraft'
import { TeamYouDraftPage } from './app/pages/TeamYouDraftPage'
import { OntraportSelfSchedulingPage } from './app/pages/OntraportSelfSchedulingPage'
import { OntraportInboxPage } from './app/pages/OntraportInboxPage'
import { AboutPage } from './app/pages/AboutPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewHomePageDraft />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/draft" element={<Navigate to="/" replace />} />
        <Route path="/teamyou" element={<TeamYouDraftPage />} />
        <Route path="/draft/teamyou" element={<Navigate to="/teamyou" replace />} />
        <Route path="/self-scheduling" element={<OntraportSelfSchedulingPage />} />
        <Route path="/draft/self-scheduling" element={<OntraportSelfSchedulingPage />} />
        <Route path="/inbox" element={<OntraportInboxPage />} />
        <Route path="/draft/inbox" element={<OntraportInboxPage />} />
      </Routes>
    </BrowserRouter>
  )
}