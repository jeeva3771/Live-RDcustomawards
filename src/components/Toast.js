import React from 'react'
import { CToast, CToastBody, CToastClose } from '@coreui/react'

const ToastColorSchemesExample = ({ value }) => {
  return (
    <CToast autohide={true} visible={true} className="text-white align-items-center mt-5 bg-blue">
      <div className="d-flex">
        <CToastBody>{value}</CToastBody>
        <CToastClose className="me-2 m-auto" white />
      </div>
    </CToast>
  )
}

export default ToastColorSchemesExample
