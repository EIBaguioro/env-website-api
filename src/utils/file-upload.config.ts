import { diskStorage } from "multer";
import * as uuid from "uuid";

export const storage = diskStorage({
    filename: function(req, file, cb) {
        cb(null, `${uuid.v4()}-${file.originalname}`);
    }
});