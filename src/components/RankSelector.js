/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import Label from './RankSelector/Label';
import AddField from './RankSelector/AddField'
import AddIcon from '@mui/icons-material/Add';

const OptionDiv = ({children}) => {
  return(
    <div css={css`
        width: 100%;
        display: flex;
        align-items: center;
        font-size: 16px;`}>
      {children}
    </div>
  )
}

const RankSelector = ({updateValue,...props}) => {

  let removed = ''
  const [rank, setRank] = useState(props.value)
  const [rankList, setRankList] = useState([
    '#FF0000 Urgent',
    '#FFFF00 Important',
    '#888888 Trivial',
  ])

  const removeRank = (value) => {
    setRankList(
      rankList.filter((val) => val!==value)
    )
    removed = value
    setRank('')
  }

  const addRank = (value) => {
    setRankList([...rankList,value])
    setRank(value)
  }

  const handleChange = (event) => {
    if(removed!==event.target.value){
      setRank(event.target.value);
      updateValue(event.target.value)
    }
  }

  return(
    rank==='add'? <AddField addRank={addRank}/>:
    <FormControl fullWidth>
      <InputLabel id="rank-label">Rank</InputLabel>
      <Select
        labelId="rank-label"
        id="rank"
        value={rank}
        label="Rank"
        onChange={handleChange}>
        {rankList.map((rank,index) => 
          <MenuItem value={rank}key={index}>
            <Label rank={rank} removeRank={removeRank}/>
          </MenuItem>
        )}
        <MenuItem value='add'>
          <OptionDiv>
            <AddIcon 
              sx={{
                marginRight: '10px',
            }}/>
            Add
          </OptionDiv>
        </MenuItem>
      </Select>
    </FormControl>  
  )}

export default RankSelector
