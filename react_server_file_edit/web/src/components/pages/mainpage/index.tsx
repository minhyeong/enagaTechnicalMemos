import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useEffect, useState } from 'react'

const MainPage = () => {
    const [files, setFiles] = useState([])
    const [selectedFile, setSelectedFile] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        fetch('/api/scripts')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP エラー: ${response.status}`)
                }
                return response.json()
            })
            .then((data) => setFiles(data))
            .catch((error) => {
                console.error('ファイル一覧の取得エラー:', error)
                setError('ファイルを取得できませんでした。')
            })
    }, [])

    return (
        <FormControl fullWidth>
            <InputLabel id="py-file-label">Python ファイル</InputLabel>
            <Select labelId="py-file-label" value={selectedFile} onChange={(e) => setSelectedFile(e.target.value)}>
                {files.map((file, index) => (
                    <MenuItem key={index} value={file}>
                        {file}
                    </MenuItem>
                ))}
            </Select>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </FormControl>
    )
}

export default MainPage
