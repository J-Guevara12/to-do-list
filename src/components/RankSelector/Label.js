/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import CircleIcon from '@mui/icons-material/Circle';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { IconButton} from '@mui/material'

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

const Label = ({rank, removeRank}) => {
  return (
    <OptionDiv>
      <CircleIcon sx={{
        color: `#${rank.substring(1,7)}`,
        selfAlign: 'center', 
        marginRight: '10px'}}/>
      {rank.substring(7)}
      <IconButton 
        sx={{marginLeft: 'auto',padding: '5px'}} 
        size='small'
        onClick={() => removeRank(rank)}>
        <CancelOutlinedIcon
          sx={{
            fontSize: '20px',
        }}/>
      </IconButton>
    </OptionDiv>
  )
}
 export default Label
