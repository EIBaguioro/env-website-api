import { diskStorage } from "multer";
import * as uuid from "uuid";

export const storage = diskStorage({
    destination: function(req, file, cb) {
        cb(null, '')
    },
    filename: function(req, file, cb) {
        cb(null, `${uuid.v4()}-${file.originalname}`);
    }
});