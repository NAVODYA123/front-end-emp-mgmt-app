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
        mt:4
      }}
    >
      <Grid width='90%' container spacing={{xs:4, sm:4 , md:4}} columns={{xs:8, sm:12, md:12}}>
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
