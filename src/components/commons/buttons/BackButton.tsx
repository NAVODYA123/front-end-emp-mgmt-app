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
            '&:hover': {
              backgroundColor: 'primary.light',
            },
            m: 4,
          }}
          aria-label='add'
        >
          <ArrowBackOutlinedIcon
            sx={{
              color: 'white',
              '&:hover': {
                color: 'white',
              },
            }}
          />
        </Fab>
      </Link>
    </>
  )
}

export default BackButton
