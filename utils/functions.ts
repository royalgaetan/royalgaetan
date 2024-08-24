export function getFileType(filePath: string): "image" | "video" | "unknown" {
  // Define the image and video file extensions
  const imageExtensions = [
    ".jpg",
    ".jpeg",
    ".png",
    ".gif",
    ".bmp",
    ".webp",
    ".tiff",
    ".svg",
  ];
  const videoExtensions = [
    ".mp4",
    ".mov",
    ".wmv",
    ".flv",
    ".avi",
    ".mkv",
    ".webm",
    ".mpeg",
    ".m4v",
  ];

  // Extract the extension from the file path
  const extension = filePath.toLowerCase().slice(filePath.lastIndexOf("."));

  // Determine if the file is an image or video
  if (imageExtensions.includes(extension)) {
    return "image";
  } else if (videoExtensions.includes(extension)) {
    return "video";
  } else {
    return "unknown";
  }
}
