# One Click Electrical website

Static website for GitHub Pages. Keep all website files in the repository root.

## Publish an update
1. Upload the updated files to the existing `main` branch and replace files with the same names.
2. Keep `logo.png`, `favicon.svg`, `index.html`, `styles.css` and `script.js` in the repository root.
3. GitHub Pages will publish the changes automatically.

## Add drone footage / project videos
The website includes a responsive project-video gallery. It automatically appears when one or more of the following MP4 files are added:

- `media/drone-project-01.mp4` — Commercial solar installation
- `media/drone-project-02.mp4` — Site works & installation
- `media/drone-project-03.mp4` — Completed project overview

Upload the `media` folder and video files to the repository, preserving the filenames above. If you have fewer than three videos, that is fine; the gallery only shows videos that load successfully. To change a video's title, edit the matching heading in `index.html`.

### Video recommendations
- MP4 (H.264 video and AAC audio) is the most compatible format.
- 1080p landscape, 16:9, is a good website format; trim clips to around 30–90 seconds.
- Compress videos before committing. GitHub warns for files over 50 MB and blocks ordinary Git files over 100 MB. For larger footage or several long videos, host the videos on a video platform or object-storage service and embed them rather than committing large MP4s to the repository.
- Check that the footage does not reveal customer details, security arrangements, vehicle registrations, site access codes or people who have not agreed to appear.

## Domain and email
The custom domain is `oneclickelectrical.co.uk`. Do not remove or replace the Microsoft 365 MX, SPF, autodiscover or other mail-related DNS records when changing website hosting.

The enquiry form opens the visitor's email application; it does not store submissions on a server.
