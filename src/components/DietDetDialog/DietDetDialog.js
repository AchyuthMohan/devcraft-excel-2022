import React from 'react'
import { Dialog } from '@mui/material'
import './DietDetDialog.css'
const DietDetDialog = ({open, handleClose, description,dName,image}) => {
  return (
    <Dialog
      fullWidth={true}
      maxWidth={"md"}
      PaperProps={{
        sx: { width: "100%", borderRadius: 5, m: 2, minHeight: "40vh" },
      }}
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <div class="diet_detDialog__main">
      <h1>{dName}</h1>
      <img src={image} className="image__inside_dial" alt=" " />
      <p>{description}</p>
      </div>
    </Dialog>
  )
}

export default DietDetDialog
