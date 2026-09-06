# Universal Video Stream Downloader

A lightweight, limit-free tool designed to detect and download video streams at their maximum possible quality from websites using HLS (`.m3u8`) or DASH (`.mpd`) protocols. 

This project consists of two parts:
1. **Chrome Extension:** Automatically sniffs network traffic to extract high-definition stream manifest links.
2. **Python Backend:** A standalone script that leverages `yt-dlp` and `FFmpeg` to pull down fragments and stitch audio and video together with zero quality degradation or artificial speed caps.

---

## ✨ Features
* **No Limits:** 100% free, open-source, and unrestricted. No premium paywalls or throttled download speeds.
* **Max Quality Resolution:** Grabs the highest quality stream configuration available on the host platform (up to 1080p, 4K, or 8K).
* **Adaptive Stream Stitching:** Automatically merges separate video and audio channels into a clean `.mp4` file.

---

## 🛠️ Prerequisites

Before running the backend, make sure you have the following installed on your machine:

1. **Python 3.7+** -> [Download Python](https://python.org)
2. **FFmpeg** (Crucial for merging HD video and audio tracks)
   * **Windows:** Download via [Gyan.dev](https://gyan.dev) and add it to your System PATH.
   * **macOS:** Install via Homebrew: `brew install ffmpeg`
   * **Linux:** Install via APT: `sudo apt install ffmpeg`

---

## 🚀 Installation & Setup

### 1. Load the Chrome Extension
1. Download or clone this repository to your local machine.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. In the top-right corner, toggle **Developer mode** to **ON**.
4. In the top-left corner, click **Load unpacked**.
5. Select the folder containing the extension files (the directory with `manifest.json`).

### 2. Prepare the Python Backend
1. Open your terminal or command prompt in the project folder.
2. Install the required open-source downloading engine:
   ```bash
   pip install yt-dlp
   ```

---

## 📖 How to Use It

1. Open your browser, navigate to a website, and play the video you wish to download.
2. Click the **Downloader Extension icon** in your extension toolbar.
3. The popup will display a list of detected streaming manifest URLs (`.m3u8` or `.mpd`). Click **Copy URL** next to the highest resolution stream.
4. Launch the Python script in your terminal:
   ```bash
   python downloader_backend.py
   ```
5. Paste the copied URL when prompted, give your file a name, and press **Enter**.
6. The backend will download all video/audio fragments and save your final `.mp4` file directly in the same folder.

---

## ⚖️ Disclaimer

**Educational Purposes Only.** This tool is developed strictly for personal archiving, network monitoring analysis, and educational exploration of modern streaming protocols. The author does not condone, promote, or encourage downloading copyrighted material without explicit permission from the original content creators or platform holders. Users are solely responsible for ensuring compliance with their local legal jurisdictions and the Terms of Service (ToS) of any visited website.

---

## 📄 License
This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.
