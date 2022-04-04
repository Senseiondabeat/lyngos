import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'
import './Body.css'

function Body() {
  return (
    <div className='body'>
        <div className="body_header">
            <h3>Search for words or phrases in a song</h3>
        </div>
        <div className="body_main">
            <div className="body_mainInput">
                <TextField 
                    className='mainInputLyrics'
                    multiline
                    fullWidth
                    minRows={10}
                    label='Enter Lyrics'
                    variant="outlined"
                
                />
                <FormControl fullWidth className='body_settings'>
                    <InputLabel id="demo-simple-select-label">Setting</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={setting}
                        label="Setting"
                        // onChange={handleChange}
                    >
                        <MenuItem value={10}>Top Word</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    </div>
  )
}

export default Body