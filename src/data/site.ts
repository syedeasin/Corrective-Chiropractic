// Practice details used across the site. Edit here and every page updates.
export const site = {
  name: 'Corrective Chiropractic',
  city: 'Newberry, SC',
  phoneDisplay: '(803) 597-5099',
  phoneHref: 'tel:+18035975099',
  email: 'newberry@correctivechiropractic.com',
  address: '1112 Calhoun St, Newberry, SC 29108',
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=1112+Calhoun+St%2C+Newberry%2C+SC+29108',
  // Live Google Maps embed of the clinic listing (no API key needed).
  mapEmbedUrl:
    'https://maps.google.com/maps?q=Corrective+Chiropractic,+1112+Calhoun+St,+Newberry,+SC+29108&t=m&z=16&ie=UTF8&iwloc=&output=embed',
  rating: '4.9',
  reviewCount: '98+',
  // Where every "Check my coverage" button goes.
  ctaHref: '/#check-coverage',
  hours: [
    { day: 'Monday:', times: ['8:30 AM - 12:30 PM', '1:30 PM - 5:30 PM'] },
    { day: 'Tuesday:', times: ['8:30 AM - 12:30 PM'] },
    { day: 'Wednesday:', times: ['8:30 AM - 12:30 PM', '1:30 PM - 5:30 PM'] },
    { day: 'Thursday:', times: ['8:30 AM - 12:30 PM', '2:00 PM - 6:00 PM'] },
    { day: 'Friday:', times: ['Closed'] },
    { day: 'Saturday & Sunday:', times: ['Closed'] },
  ],
} as const;
