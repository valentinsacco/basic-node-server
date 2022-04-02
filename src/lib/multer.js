import { diskStorage } from 'multer'
import path from 'path'

export const storage = diskStorage({
    destination: path.join(__dirname, '../public/assets'),
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
    }
})

export const fileFilter = (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif/
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
    const mimetype = filetypes.test(file.mimetype)
    if (mimetype && extname) {
        return cb(null, true)
    } else {
        const error = new Error(`Error: File upload only supports the following filetypes - ${filetypes}`)
        cb(error)
    }
}