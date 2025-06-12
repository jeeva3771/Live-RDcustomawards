import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CFormCheck,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import logo from '../../../../src/logo.svg'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center justify-content-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={5}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <div>
                    <div className="text-center mb-1">
                      <img src={logo} alt="Logo" className="bg-white-login" />
                    </div>
                    <>
                      <h2>Login</h2>
                      <p className="text-body-secondary">Sign In to your account</p>
                    </>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilUser} className="text-body-secondary" />
                      </CInputGroupText>
                      <CFormInput
                        type="text"
                        placeholder="Username"
                        autoComplete="text"
                        defaultValue="rd_domain"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} className="text-body-secondary" />
                      </CInputGroupText>
                      <CFormInput
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        autoComplete="current-password"
                        defaultValue="rd#123"
                      />
                    </CInputGroup>
                    <div className="mb-3 checkbox-blue">
                      <CFormCheck
                        id="showPassword"
                        label="Show Password"
                        checked={showPassword}
                        onChange={togglePasswordVisibility}
                      />
                    </div>
                    <CRow>
                      <CCol xs={6}>
                        <button
                          className="px-4 bg-blue clr-white button-sizing"
                          onClick={() => navigate('/dashboard')}
                        >
                          Login
                        </button>
                      </CCol>
                      <CCol xs={6} className="text-end">
                        <CButton color="link" className="clr-blue px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
