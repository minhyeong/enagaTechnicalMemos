import fs from 'fs'
import { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const scriptsDir = path.join(process.cwd(), 'public/scripts')

        // フォルダが存在するか確認
        if (!fs.existsSync(scriptsDir)) {
            return res.status(404).json({ error: 'ディレクトリが見つかりません。' })
        }

        const files = fs.readdirSync(scriptsDir)
        const pyFiles = files.filter((file) => file.endsWith('.py')) // `.py` ファイルのみ取得

        return res.status(200).json(pyFiles)
    } catch (error) {
        console.error('API エラー:', error)
        return res.status(500).json({ error: 'ファイル一覧を取得できませんでした。' })
    }
}
