import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { Bill } from '../../types';
import { colors, spacing, typography, borderRadius, shadows } from '../../styles/theme';

interface BillCardProps {
  bill: Bill;
  onPress: () => void;
  showStatus?: boolean;
  showCategory?: boolean;
  style?: ViewStyle;
}

const BillCard: React.FC<BillCardProps> = ({
  bill,
  onPress,
  showStatus = false,
  showCategory = false,
  style,
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'debate':
        return colors.warning;
      case 'vote':
        return colors.primary;
      case 'passed':
        return colors.success;
      case 'rejected':
        return colors.error;
      default:
        return colors.textLight;
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'debate':
        return 'En débat';
      case 'vote':
        return 'En vote';
      case 'passed':
        return 'Voté';
      case 'rejected':
        return 'Rejeté';
      case 'enacted':
        return 'Promulgué';
      default:
        return status;
    }
  };

  const getCategoryColor = (category: string) => {
    const categoryColors = {
      agriculture: colors.categories.agriculture,
      economy: colors.categories.economy,
      education: colors.categories.education,
      health: colors.categories.health,
      digital: colors.categories.digital,
      environment: colors.categories.environment,
      justice: colors.categories.justice,
      defense: colors.categories.defense,
      social: colors.categories.social,
      infrastructure: colors.categories.infrastructure,
      other: colors.categories.other,
    };
    return categoryColors[category as keyof typeof categoryColors] || colors.categories.other;
  };

  const getCategoryLabel = (category: string) => {
    const categoryLabels = {
      agriculture: 'Agriculture',
      economy: 'Économie',
      education: 'Éducation',
      health: 'Santé',
      digital: 'Numérique',
      environment: 'Environnement',
      justice: 'Justice',
      defense: 'Défense',
      social: 'Social',
      infrastructure: 'Infrastructure',
      other: 'Autre',
    };
    return categoryLabels[category as keyof typeof categoryLabels] || category;
  };

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.header}>
        {showStatus && (
          <View style={[styles.badge, styles.statusBadge, { backgroundColor: `${getStatusColor(bill.status)}20` }]}>
            <Text style={[styles.badgeText, { color: getStatusColor(bill.status) }]}>
              {getStatusLabel(bill.status)}
            </Text>
          </View>
        )}
        <Text style={styles.timeText}>{bill.time_since_submitted}</Text>
      </View>
      
      <Text style={styles.title} numberOfLines={2}>
        {bill.title}
      </Text>
      
      <Text style={styles.description} numberOfLines={3}>
        {bill.description}
      </Text>
      
      {showCategory && (
        <View style={styles.footer}>
          <View style={[styles.badge, styles.categoryBadge, { backgroundColor: `${getCategoryColor(bill.category)}20` }]}>
            <Text style={[styles.badgeText, { color: getCategoryColor(bill.category) }]}>
              {getCategoryLabel(bill.category)}
            </Text>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.medium,
    padding: spacing.md,
    marginHorizontal: spacing.md,
    marginBottom: spacing.sm,
    ...shadows.small,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  title: {
    fontSize: typography.body1,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.sm,
    lineHeight: 20,
  },
  description: {
    fontSize: typography.body2,
    color: colors.textSecondary,
    lineHeight: 18,
    marginBottom: spacing.sm,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  badge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.medium,
  },
  statusBadge: {
    // Styles spécifiques au badge de statut
  },
  categoryBadge: {
    // Styles spécifiques au badge de catégorie
  },
  badgeText: {
    fontSize: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  timeText: {
    fontSize: 10,
    color: colors.textLight,
  },
});

export default BillCard;
