import Backdrop from '@mui/material/Backdrop'
import { useSelector } from 'react-redux'
import { selectEmployees } from '../store/slices/employee'
import CircularProgress from '@mui/material/CircularProgress'

const LayoutWrapper = ({ children }: any) => {
  const loaderSelector = useSelector(selectEmployees).loadingState

  return (
    <>
      <Backdrop sx={{ zIndex: 1 }} open={loaderSelector}>
        <CircularProgress sx={{ color: '#ffffff' }} />
      </Backdrop>
      {children}
    </>
  )
}

export default LayoutWrapper
