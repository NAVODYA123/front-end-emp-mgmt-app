import Grid from '@mui/material/Unstable_Grid2'
import Box from '@mui/material/Box'
import ListTableHeader from './ListTableHeader'


type Props = {
  children?: React.ReactNode
  condition: boolean
}

const ConditionalWrapper = ({ condition, children }: Props) => {
   return condition ? (
    <Box
      sx={{
        width: '100%',
        display: 'flex !important',
        justifyContent: 'center !important',
      }}
    >
      <Grid width='90%' container spacing={4} columns={16}>
        {children}
      </Grid>
    </Box>
  ) : (
    <>
    <ListTableHeader/>
      <Box>{children}</Box>
    </>
  )
}

export default ConditionalWrapper
