import { Box, Typography, Button, Avatar, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material"

const FormTemplate = () => {
  return (
    <><Box
    sx={{
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      pl:8,
      pt:4
    }}
  > 
  <Typography variant='h4' color='primary.dark' sx={{textTransform:'capitalize'}}>
    Edit Employee</Typography>
  </Box>

<Box
  sx={{
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    mb: 4,
    mt: 4,
  }}
>
  <Box
    component='form'
    sx={{
      minHeight: '600px',
      width: '40%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      boxShadow: 3,
      borderRadius: '16px',
      pt: 4,
      pb: 4,
    }}
  >
    {/* <Grid container alignItems="flex-start" spacing={4} columns={16}>
<Grid style={{ marginTop: 15 }}  xs={6}>       */}
    <Button
      variant='outlined'
      component='label'
      sx={{ height: '120px', width: '120px', borderRadius: '50%' }}
    >
      <Avatar
        alt=''
        src=''
        sx={{ width: 100, height: 100 }}
        variant='circular'
      />
      <input hidden accept='image/*' multiple type='file' />
    </Button>

    <TextField
      // error={errorMesseges?.firstName.length!==0}
      sx={{ width: '60%' }}
      required
      id='standard-basic'
      label='Employee Id'
      variant='standard'
      // helperText={errorMesseges?.firstName}
      // onChange={(e) => setfirstName(e?.target.value)}
    />
    <TextField
      sx={{ width: '60%' }}
      required
      id='standard-basic'
      label='Last Name'
      variant='standard'
    />

    <TextField
      sx={{ width: '60%' }}
      required
      id='standard-basic'
      label='Email'
      variant='standard'
    />

    <TextField
      sx={{ width: '60%' }}
      required
      id='standard-required'
      label='Phone'
      variant='standard'
    />
    <FormControl variant='standard' sx={{ m: 1, width: '60%' }}>
      <InputLabel id='gender-select-label'>Select a gender</InputLabel>
      <Select
        labelId='gender-select-label'
        // value={gender}
        // onChange={handleChange}
        label='Select a gender'
      >
        <MenuItem value={'M'}>Male</MenuItem>
        <MenuItem value={'F'}>Female</MenuItem>
      </Select>
    </FormControl>
    <Box
      sx={{
        height: '80px',
        width: '60%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Button variant='contained' >Update Record</Button>
      {/* onClick={()=>dispatch(decrement())} */}
      <Button variant='outlined'>Cancel</Button>
    </Box>
    {/* </Grid>
  </Grid> */}
  </Box>
</Box></>
  )
}


export default FormTemplate