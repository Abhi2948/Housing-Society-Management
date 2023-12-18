import React from 'react'
import { Box, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box display="flex" flexDirection="row" justifyContent="space-around" alignItems="center" sx={{ background: "#000", width: "100%", height: 60, mt: 20 }}>
      <Typography variant='h8' sx={{ color: "#fff" }}>
        © 2023 Housing Society Management. All Rights Reserved. | Email:{' '}
        <a href="mailto:helpdesk@housingsocietymanagement.com" style={{ color: "#fff", textDecoration: "none" }}>
          helpdesk@housingsocietymanagement.com
        </a>
      </Typography>
    </Box>
  )
}

export default Footer