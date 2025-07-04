import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

//masters
const ProcessList = React.lazy(() => import('./views/pages/masters/process/List'))
const ProcessForm = React.lazy(() => import('./views/pages/masters/process/Form'))

const MaterialsList = React.lazy(() => import('./views/pages/masters/materials/List'))
const MaterialForm = React.lazy(() => import('./views/pages/masters/materials/Form'))

const DepartmentsList = React.lazy(() => import('./views/pages/masters/departments/List'))
const DepartmentForm = React.lazy(() => import('./views/pages/masters/departments/Form'))

const RolesList = React.lazy(() => import('./views/pages/masters/roles/List'))
const RoleForm = React.lazy(() => import('./views/pages/masters/roles/Form'))

const EnquiriesList = React.lazy(() => import('./views/pages/enquiry/List'))
const EnquiryForm = React.lazy(() => import('./views/pages/enquiry/Form'))

//admin
const AdminEnquiriesList = React.lazy(() => import('./views/pages/enquiry/AdminList'))

const SampleOrdersAdminList = React.lazy(() => import('./views/pages/sample/AdminList'))
const SampleOrdersDesignerList = React.lazy(() => import('./views/pages/sample/DesignerList'))
const SampleOrdersAccountList = React.lazy(() => import('./views/pages/sample/AccountantList'))


const JobsList = React.lazy(() => import('./views/pages/masters/jobs/List'))

const ProductionPlanning = React.lazy(() => import('./views/pages/Productionplanning'))
const SalesOrderForm = React.lazy(() => import('./views/pages/sales/Salesorderform'))

const UsersList = React.lazy(() => import('./views/pages/Users/List'))
const UserForm = React.lazy(() => import('./views/pages/Users/Form'))

const UserProfile = React.lazy(() => import('./views/pages/Userprofile'))

const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/process', name: 'Process List', element: ProcessList },
  { path: '/process/add', name: 'Add', element: ProcessForm },
  { path: '/process/:processId', name: 'Edit', element: ProcessForm },
  { path: '/materials', name: 'Materials List', element: MaterialsList },
  { path: '/materials/add', name: 'Add', element: MaterialForm },
  { path: '/materials/:materialId', name: 'Edit', element: MaterialForm },
  { path: '/departments', name: 'Departments List', element: DepartmentsList },
  { path: '/departments/add', name: 'Add', element: DepartmentForm },
  { path: '/departments/:departmentId', name: 'Edit', element: DepartmentForm },
  { path: '/enquiriesdesigner', name: 'Enquiries List', element: EnquiriesList },

  { path: '/enquiriesadmin', name: 'Enquiries List', element: AdminEnquiriesList }, //Admin

  { path: '/enquiry/add', name: 'Add', element: EnquiryForm },
  { path: '/sampleordersadmin', name: 'Sample Orders List', element: SampleOrdersAdminList },
    { path: '/sampleordersdesigner', name: 'Sample Orders List', element: SampleOrdersDesignerList },
    { path: '/sampleordersaccounts', name: 'Sample Orders List', element: SampleOrdersAccountList },

  { path: '/jobs', name: 'Jobs List', element: JobsList },

  { path: '/productionplanning', name: 'Production Planning', element: ProductionPlanning },
  { path: '/salesorder', name: 'Sales Order Form', element: SalesOrderForm },
  { path: '/users', name: 'Users List', element: UsersList },
  { path: '/users/add', name: 'Add', element: UserForm },
  { path: '/users/:userId', name: 'Edit', element: UserForm },
  { path: '/roles', name: 'Roles List', element: RolesList },
  { path: '/roles/add', name: 'Add', element: RoleForm },
  { path: '/roles/:roleId', name: 'Edit', element: RoleForm },
  { path: '/profile', name: '', element: UserProfile },

  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', element: Cards },
  { path: '/base/carousels', name: 'Carousel', element: Carousels },
  { path: '/base/collapses', name: 'Collapse', element: Collapses },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tabs', name: 'Tabs', element: Tabs },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/select', name: 'Select', element: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
