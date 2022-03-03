import { TextField , InputAdornment, IconButton, Divider} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ColorPicker from './ColorPicker'
import { useState } from "react"

const AddField = ({addRank}) => {
  const [color,setColor] = useState('#000000')
  const [text,setText] = useState('')

  const handleColor = (e) => {setColor(e.target.value)}
  return ( 
    <TextField 
      fullWidth 
      onChange = {(e) => setText(e.target.value)}
      value = {text}
      InputProps={{
        endAdornment: 
          <InputAdornment position="end">
            <IconButton onClick={() => addRank(`${color} ${text}`)}>
              <AddIcon />
            </IconButton>
          </InputAdornment>,
        startAdornment: 
          <InputAdornment position= "start">
            <ColorPicker color={color} handleColor={handleColor}/>
            <Divider 
              sx={{
                height: '35px', 
                width: '1px', 
                marginLeft: '8px', 
                marginRight: '5px'}}
              orientation='vertical'/>
        </InputAdornment>
          }}
      label='Add Rank'>

  </TextField>
  )
}

export default AddField
