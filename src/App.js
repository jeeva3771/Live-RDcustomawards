// import React, { Suspense, useEffect } from 'react'
// import { HashRouter, Route, Routes } from 'react-router-dom'
// import { useSelector } from 'react-redux'

// import { CSpinner, useColorModes } from '@coreui/react'
// import './scss/style.scss'

// // We use those styles to show code examples, you should remove them in your application.
// import './scss/examples.scss'
// import './App.css'

// // Containers
// const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// // Pages
// const Login = React.lazy(() => import('./views/pages/login/Login'))
// const Register = React.lazy(() => import('./views/pages/register/Register'))
// const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
// const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

// const App = () => {
//   const { isColorModeSet, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')
//   const storedTheme = useSelector((state) => state.theme)

//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.href.split('?')[1])
//     const theme = urlParams.get('theme') && urlParams.get('theme').match(/^[A-Za-z0-9\s]+/)[0]
//     if (theme) {
//       setColorMode(theme)
//     }

//     if (isColorModeSet()) {
//       return
//     }

//     setColorMode(storedTheme)
//   }, []) // eslint-disable-line react-hooks/exhaustive-deps

//   return (
//     <HashRouter>
//       <Suspense
//         fallback={
//           <div className="pt-3 text-center">
//             <CSpinner color="primary" variant="grow" />
//           </div>
//         }
//       >
//         <Routes>
//           {/* <Route path="/register" name="Register Page" element={<Register />} /> */}
//           {/* <Route path="/404" name="Page 404" element={<Page404 />} />
//           <Route path="/500" name="Page 500" element={<Page500 />} /> */}
//           <Route path="/dashboard/*" name="Home" element={<DefaultLayout />} />
//           <Route path="/" name="Login Page" element={<Login />} />
//         </Routes>
//       </Suspense>
//     </HashRouter>
//   )
// }

// export default App

import React, { Suspense, useEffect } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { CSpinner, useColorModes } from '@coreui/react'

import './scss/style.scss'
import './App.css'
import './media.css'

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))

// Layout-wrapped Pages
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

const App = () => {
  // const { isColorModeSet, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')
  // const storedTheme = useSelector((state) => state.theme)

  // useEffect(() => {
  //   const urlParams = new URLSearchParams(window.location.href.split('?')[1])
  //   const theme = urlParams.get('theme')?.match(/^[A-Za-z0-9\s]+/)[0]
  //   if (theme) setColorMode(theme)
  //   if (!isColorModeSet()) setColorMode(storedTheme)
  // }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="pt-3 text-center">
            <CSpinner color="primary" variant="grow" />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/404" element={<Page404 />} />

          {/* Internal app routes without /dashboard */}
          <Route path="/*" element={<DefaultLayout />} />

          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
