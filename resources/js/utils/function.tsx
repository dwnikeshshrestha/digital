import { toast } from "sonner";
import { ALLOWED_IMAGE_FILE_SIZE_MB, ALLOWED_IMAGE_FILE_TYPE } from "./constant";



interface ImageFile {
    name: string;
    size: number;
  }
export const handleImageValidation = (e: ImageFile) => {
  const { name, size } = e;
  const fileName = name;
  const fileSize = size;
  const fileExtension = fileName?.split(".")?.pop()?.toLowerCase()??"";
  if (ALLOWED_IMAGE_FILE_TYPE.indexOf(fileExtension) === -1) {
     toast.error(
      "Invalid file type. Allowed types: " + ALLOWED_IMAGE_FILE_TYPE.join(", ")
    )
    return false;
  } else if (fileSize > ALLOWED_IMAGE_FILE_SIZE_MB * 1024 * 1024) {
     toast.error(
      "Invalid file Size size must be :" + ALLOWED_IMAGE_FILE_SIZE_MB + "MB"
    )
    return false;
  } else {
    return true;
  }
};


