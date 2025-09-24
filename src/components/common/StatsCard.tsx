import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, typography, borderRadius } from '../../styles/theme';

interface StatsCardProps {
  value: string;
  label: string;
  color: string;
  flex?: number;
}

const StatsCard: React.FC<StatsCardProps> = ({ value, label, color, flex = 1 }) => {
  return (
    <View style={[styles.container, { flex }]}>
      <View style={[styles.colorBar, { backgroundColor: color }]} />
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f9ff',
    borderRadius: borderRadius.medium,
    padding: spacing.sm,
    alignItems: 'center',
    minHeight: 70,
    justifyContent: 'center',
  },
  colorBar: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 4,
    borderTopLeftRadius: borderRadius.medium,
    borderBottomLeftRadius: borderRadius.medium,
  },
  value: {
    fontSize: typography.h3,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 2,
  },
  label: {
    fontSize: 10,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 12,
  },
});

export default StatsCard;
