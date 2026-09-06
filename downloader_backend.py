import os
import subprocess
import sys

def check_dependencies():
    # Verify FFmpeg is installed
    try:
        subprocess.run(["ffmpeg", "-version"], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    except FileNotFoundError:
        print("[!] ERROR: FFmpeg is not installed or not in your system PATH.")
        print("    Please install FFmpeg to allow stitching video and audio tracks together.")
        sys.exit(1)

    # Verify yt-dlp is installed
    try:
        import yt_dlp
    except ImportError:
        print("[*] Installing missing dependency: yt-dlp...")
        subprocess.run([sys.executable, "-m", "pip", "install", "yt-dlp"])

def download_stream(url, output_name="downloaded_video"):
    import yt_dlp
    
    # Configuration forcing the maximum video quality and maximum audio quality merged together
    ydl_opts = {
        'format': 'bestvideo+bestaudio/best',
        'outtmpl': f'{output_name}.%(ext)s',
        'merge_output_format': 'mp4',
        'noplaylist': True,
    }
    
    print(f"\n[*] Connecting to stream endpoint...")
    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        try:
            ydl.download([url])
            print("\n[+] Download completed successfully at maximum quality!")
        except Exception as e:
            print(f"\n[!] An error occurred during download: {e}")

if __name__ == "__main__":
    print("=============================================")
    print("   UNIVERSAL MAXIMUM QUALITY DOWNLOADER     ")
    print("=============================================")
    check_dependencies()
    
    video_url = input("\nPaste the captured stream URL from your extension: ").strip()
    if not video_url:
        print("[!] No URL provided. Exiting.")
        sys.exit(0)
        
    custom_name = input("Enter a filename for the output (or press Enter for default): ").strip()
    if custom_name:
        download_stream(video_url, output_name=custom_name)
    else:
        download_stream(video_url)
