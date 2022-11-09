import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined'
import Fab from '@mui/material/Fab'
import Link from 'next/link'

type Props = {
  navigationLink: string
}
const BackButton = ({ navigationLink }: Props) => {
  return (
    <>
      <Link href={navigationLink} passHref>
        <Fab
          sx={{
            background: 'black',
            color: 'white',
            '&hover': {
              boxShadow: 12,
            },
          }}
          aria-label='add'
        >
          <ArrowBackOutlinedIcon />
        </Fab>
      </Link>
    </>
  )
}

export default BackButton
