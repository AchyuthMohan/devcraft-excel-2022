import React from 'react'
import { Dialog } from '@mui/material'
import './DietDetDialog.css'
const DietDetDialog = () => {
  return (
    <Dialog
      fullWidth={true}
      maxWidth={"md"}
      PaperProps={{
        sx: { width: "100%", borderRadius: 5, m: 2, minHeight: "60vh" },
      }}
      open={openDet}
      onClose={handleCloseDet}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >

    </Dialog>
  )
}

export default DietDetDialog
