import Grid from '@mui/material/Unstable_Grid2'

type Props = {
//   children?: JSX.Element|JSX.Element[],
children?: React.ReactNode
  condition: boolean
}

const ConditionalWrapper = ({ condition, children }: Props) => {
    // const wrappedChild = condition ? (<Grid>{children}</Grid>):({children})
  return (condition ? (<Grid>{children}</Grid>):(<>{children}</>))
}

export default ConditionalWrapper
