import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'cs.badge',
  appName: 'cs-badge',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    Badge: {
      persist: true,
      autoClear: false,
    },
  },
};

export default config;
