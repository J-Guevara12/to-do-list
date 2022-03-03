/** @jsxImportSource @emotion/react */
import { TextField } from "@mui/material"
import { Grid , Button} from "@mui/material"
import { useFormik } from "formik"
import BasicDateTimePicker from "./BasicDateTimePicker"
import RankSelector from './RankSelector'
//import CategorySelector from './CategorySelector'

const bigButton = {
  width: '100%',
  height: '100%',
}

const Form = () => {
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      time: new Date(),
      rank: '',
    },
    onSubmit: (values) => {
      console.log(values)
    }
  })
  return(
    <form onSubmit={formik.handleSubmit}>
      <Grid container rowSpacing={1}columnSpacing={1}>
        <Grid item xs={12}>
          <TextField 
            fullWidth 
            label='Title' 
            {...formik.getFieldProps('title')}>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField 
            fullWidth  
            rows={2}multiline 
            label="Description" 
            {...formik.getFieldProps('description')}>
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <BasicDateTimePicker 
            {...formik.getFieldProps('time')} 
            onChange={(value) => formik.setFieldValue('time',value)}/>
        </Grid>
        <Grid item xs={6}>
          <RankSelector 
            {...formik.getFieldProps('rank')} 
            updateValue={(value) => formik.setFieldValue('rank',value)}/>
        </Grid>
        {/*
        <Grid item xs={6}>
          <CategorySelector />
        </Grid>
        */}
        <Grid item xs={6}>
          <Button type='submit'variant="contained" sx={bigButton}size='large'>Add Task</Button>
        </Grid>
      </Grid>
    </form>
  )
}
 export default Form
