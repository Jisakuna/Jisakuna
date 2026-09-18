import { defineConfig, tierPresets } from 'sponsorkit'

export default defineConfig({
  providers: ['github'],
  // Refresh the API data even though the cache is committed.
  force: true,
  github: {
    login: 'Jisakuna',
    type: 'user',
  },
  outputDir: './sponsorkit',
  formats: ['svg', 'json'],
  // Filter before caching so private sponsorships are never committed.
  onSponsorsFetched: sponsors => sponsors.filter(sponsor => sponsor.privacyLevel === 'PUBLIC'),
  width: 800,
  tiers: [
    { title: 'Past Sponsors', monthlyDollars: -1, preset: tierPresets.xs },
    { title: 'Backers', monthlyDollars: 0, preset: tierPresets.base },
    { title: 'Sponsors', monthlyDollars: 10, preset: tierPresets.medium },
    { title: 'Silver Sponsors', monthlyDollars: 50, preset: tierPresets.large },
    { title: 'Gold Sponsors', monthlyDollars: 100, preset: tierPresets.xl },
  ],
})
