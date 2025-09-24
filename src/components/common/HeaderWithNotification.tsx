import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, spacing, typography } from '../../styles/theme';

interface HeaderWithNotificationProps {
  title: string;
  subtitle: string;
  notificationCount?: number;
  onNotificationPress?: () => void;
}

const HeaderWithNotification: React.FC<HeaderWithNotificationProps> = ({
  title,
  subtitle,
  notificationCount = 0,
  onNotificationPress,
}) => {
  return (
    <LinearGradient
      colors={[colors.primary, colors.primaryDark]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        {notificationCount > 0 && (
          <TouchableOpacity
            style={styles.notificationButton}
            onPress={onNotificationPress}
          >
            <Text style={styles.notificationText}>{notificationCount}</Text>
          </TouchableOpacity>
        )}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.md,
    paddingTop: spacing.xl,
    paddingBottom: spacing.lg,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  textContainer: {
    flex: 1,
    paddingRight: spacing.md,
  },
  title: {
    fontSize: typography.h3,
    fontWeight: 'bold',
    color: colors.textOnPrimary,
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontSize: typography.body2,
    color: colors.textOnPrimary,
    opacity: 0.9,
    lineHeight: 20,
  },
  notificationButton: {
    backgroundColor: colors.error,
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationText: {
    color: colors.textOnPrimary,
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default HeaderWithNotification;
