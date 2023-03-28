import React from 'react'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import ImportQuestion from '@mui/icons-material/UploadFileOutlined';
import FormatSizeOutlinedIcon from '@mui/icons-material/FormatSizeOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import HorizontalSplitOutlinedIcon from '@mui/icons-material/HorizontalSplitOutlined';

function SideFunctions(props) {
  return (
    <div className="side-functions">
        <div className="add-functionality">
          <AddCircleOutlineOutlinedIcon type="button" onClick={props.addQuestion}/>
          <ImportQuestion type="button"/>
          <FormatSizeOutlinedIcon type="button"/>
          <ImageOutlinedIcon type="button"/>
          <SlideshowOutlinedIcon type="button"/>
          <HorizontalSplitOutlinedIcon type="button"/>
        </div>
      </div>
  )
}

export default SideFunctions