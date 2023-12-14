import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React from 'react'
import GoogleMap from './components/contactPage/GoogleMap.tsx'
import { Auth0Provider } from '@auth0/auth0-react'
import routes from './routes.tsx'

const router = createBrowserRouter(routes)
const root = createRoot(document.getElementById('app') as HTMLElement)
// creating a new QueryClient instance
const queryClient = new QueryClient()

root.render(
  <Auth0Provider
    domain="dev-xri5nhxcy03cgakm.au.auth0.com"
    clientId="sjjdTzVriDqmkDx0e0tpIljuBTsxKeC4"
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: 'https://rolley-animal-shelter/api',
    }}
  >
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </Auth0Provider>
)

export function renderToDom(container: HTMLElement) {
  const root = createRoot(container)

  root.render(
    <React.StrictMode>
      <GoogleMap />
    </React.StrictMode>
  )
}
