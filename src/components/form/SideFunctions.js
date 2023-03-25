import React from 'react'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

function SideFunctions(props) {
  return (
    <div className="side-functions">
        <div className="add-functionality">
          <AddCircleOutlineOutlinedIcon type="button" onClick={props.addQuestion}/>
        </div>
      </div>
  )
}

export default SideFunctions