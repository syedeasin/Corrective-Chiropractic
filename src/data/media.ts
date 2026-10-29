// Video sources. These are PLACEHOLDERS taken from the live South Charlotte landing page
// (go.correctivechiropractic.com/south-charlotte/corrective-chiropractor) until the Newberry clips are ready.
// Swap the URLs here (or point them at files in /public/videos) and every player updates.
const cdn = 'https://assets.cdn.filesafe.space/X5stlbq9V4Uu44842UZ7/media';

export const media = {
  // Hero + thank-you walkthrough (subtitles are burned into the clip).
  heroVideo: `${cdn}/6ad608ca9cfc3bf8b3779956.mp4`,
  heroPoster: `${cdn}/6ad6089f436f78fefb96e4a5.jpg`,
  walkthroughVideo: `${cdn}/6ad608ca9cfc3bf8b3779956.mp4`,
  walkthroughPoster: `${cdn}/6ad6089f436f78fefb96e4a5.jpg`,

  // "See what care actually looks like" slider.
  sessions: [
    `${cdn}/6a045f9735196fed41baa961.mp4`,
    `${cdn}/6a045f9782125b9874ae5399.mp4`,
    `${cdn}/6a045f9735196fed41baa962.mp4`,
    `${cdn}/6a045f9782125b9874ae539a.mp4`,
    `${cdn}/6a045f97c56db4013f639d0f.mp4`,
    `${cdn}/6ad71cc1436f78fefbb510a9.mp4`,
  ],
} as const;
