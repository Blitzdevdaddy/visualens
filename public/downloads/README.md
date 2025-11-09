# Downloads Directory

Place your Windows installer file here to make it available for download.

## Instructions

1. Copy your `.exe` file to this directory
2. Rename it to `VisionAI-Setup.exe` (or update the filename in `client/src/components/DownloadSection.tsx`)
3. The file will be automatically served at `/downloads/VisionAI-Setup.exe`

## Example

```bash
# Copy your installer to this directory
cp /path/to/your/installer.exe public/downloads/VisionAI-Setup.exe
```

The download button on the website will automatically trigger the download of this file.
