import * as Notifications from "expo-notifications";
import { useEffect } from "react";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: false,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

useEffect(() => {
  registerForPushNotificationsAsync().then(
    (token) => token && setExpoPushToken(token),
  );

  if (Platform.OS === "android") {
    Notifications.getNotificationChannelsAsync().then((value) =>
      setChannels(value ?? []),
    );
  }
  const notificationListener = Notifications.addNotificationReceivedListener(
    (notification) => {
      setNotification(notification);
    },
  );

  const responseListener =
    Notifications.addNotificationResponseReceivedListener((response) => {
      console.log(response);
    });

  return () => {
    notificationListener.remove();
    responseListener.remove();
  };
}, []);
