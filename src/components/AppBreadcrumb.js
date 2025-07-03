import React from 'react'
import { useLocation, useNavigate, matchPath } from 'react-router-dom'

import routes from '../routes'

const AppBreadcrumb = () => {
  const currentLocation = useLocation().pathname
  const navigate = useNavigate()

  const getRouteName = (pathname, routes) => {
    for (const route of routes) {
      const match = matchPath({ path: route.path, end: true }, pathname)
      if (match) return route.name
    }
    return false
  }

  const getBreadcrumbs = (location) => {
    const breadcrumbs = []
    location.split('/').reduce((prev, curr, index, array) => {
      const currentPathname = `${prev}/${curr}`
      const routeName = getRouteName(currentPathname, routes)
      routeName &&
        breadcrumbs.push({
          pathname: currentPathname,
          name: routeName,
          active: index + 1 === array.length ? true : false,
        })
      return currentPathname
    })
    return breadcrumbs
  }

  const breadcrumbs = getBreadcrumbs(currentLocation)

  const handleBreadcrumbClick = (pathname) => {
    navigate(pathname)
  }

  return (
    <div className="custom-breadcrumb my-0">
      <nav aria-label="breadcrumb">
        {breadcrumbs.length > 1 && (
          <div className="breadcrumb-container d-flex align-items-center">
            {breadcrumbs.map((breadcrumb, index) => (
              <React.Fragment key={index}>
                {index > 0 && (
                  <span className="breadcrumb-separator mx-2" aria-hidden="true">
                    /
                  </span>
                )}
                <div
                  className={`breadcrumb-item ${breadcrumb.active ? 'active' : 'clickable'}`}
                  {...(!breadcrumb.active && {
                    onClick: () => handleBreadcrumbClick(breadcrumb.pathname),
                    role: 'button',
                    tabIndex: 0,
                    onKeyDown: (e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        handleBreadcrumbClick(breadcrumb.pathname)
                      }
                    },
                  })}
                  {...(breadcrumb.active && { 'aria-current': 'page' })}
                >
                  {breadcrumb.name}
                </div>
              </React.Fragment>
            ))}
          </div>
        )}
      </nav>
    </div>
  )
}

export default React.memo(AppBreadcrumb)
