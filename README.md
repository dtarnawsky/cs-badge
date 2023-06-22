# Capacitor Badge plugin sample

### iOS

On iOS permissions are required to be approved before `set` will work and allow setting of a badge.

### Android

- On Android devices the badge was not set despite `requestPermissions` returning `granted`, `isSupported` returning true and `set` calling without errors.

Badges are supported on a device by device basis. For example on a Android 11 Pixel 2 the badge appear as a circle with no text. On Android 12 Samsung S10e the badge appears with text.

### Issue
[This issue](https://github.com/capawesome-team/capacitor-plugins/issues/3) describes the problem.

### Workaround
A notification needs to be sent to the application to ensure that the badge will appear. To perform this with a local Notification install `@capacitor/local-notifications` then add:
```typescript
import { LocalNotifications } from '@capacitor/local-notifications';

...

    await LocalNotifications.schedule({
      notifications: [
        { title: 'test', body: 'message', id: 123 }]
    })
```

