import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  RefreshControl,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootState, AppDispatch } from '../../store/store';
import { fetchActiveBills, fetchRecentBills } from '../../store/slices/parliamentSlice';
import { ParliamentStackParamList } from '../../types';
import { colors, spacing, typography, borderRadius, shadows } from '../../styles/theme';
import BillCard from '../../components/parliament/BillCard';
import StatsCard from '../../components/common/StatsCard';
import HeaderWithNotification from '../../components/common/HeaderWithNotification';

type ParliamentHomeNavigationProp = StackNavigationProp<
  ParliamentStackParamList,
  'ParliamentHome'
>;

interface Props {
  navigation: ParliamentHomeNavigationProp;
}

const ParliamentHomeScreen: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { activeBills, recentBills, isLoading } = useSelector(
    (state: RootState) => state.parliament
  );
  const { user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    dispatch(fetchActiveBills());
    dispatch(fetchRecentBills());
  };

  const handleBillPress = (billId: number) => {
    navigation.navigate('BillDetail', { billId });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={loadData} />
        }
      >
        {/* Header */}
        <HeaderWithNotification
          title={`Bonjour, ${user?.first_name || 'Citoyen'}`}
          subtitle="Restez informé(e) de l'actualité parlementaire"
          notificationCount={3}
        />

        {/* Stats Row */}
        <View style={styles.statsContainer}>
          <StatsCard
            value="12"
            label="Projets actifs"
            color={colors.success}
            flex={1}
          />
          <StatsCard
            value="3"
            label="Votes semaine"
            color={colors.warning}
            flex={1}
          />
          <StatsCard
            value="2"
            label="Nouvelles lois"
            color={colors.primary}
            flex={1}
          />
        </View>

        {/* Active Bills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projets de loi actifs</Text>
          {activeBills.map((bill) => (
            <BillCard
              key={bill.id}
              bill={bill}
              onPress={() => handleBillPress(bill.id)}
              showStatus
            />
          ))}
          {activeBills.length === 0 && (
            <View style={styles.emptyState}>
              <Text style={styles.emptyStateText}>
                Aucun projet de loi actif pour le moment
              </Text>
            </View>
          )}
        </View>

        {/* Recent Bills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projets récents</Text>
          {recentBills.slice(0, 3).map((bill) => (
            <BillCard
              key={bill.id}
              bill={bill}
              onPress={() => handleBillPress(bill.id)}
              showCategory
            />
          ))}
          
          <TouchableOpacity
            style={styles.viewAllButton}
            onPress={() => navigation.navigate('BillSearch')}
          >
            <Text style={styles.viewAllText}>Voir tous les projets</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    gap: spacing.sm,
    backgroundColor: colors.surface,
  },
  section: {
    paddingVertical: spacing.md,
  },
  sectionTitle: {
    fontSize: typography.h4,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.md,
    paddingHorizontal: spacing.md,
  },
  emptyState: {
    padding: spacing.xl,
    alignItems: 'center',
  },
  emptyStateText: {
    fontSize: typography.body2,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  viewAllButton: {
    margin: spacing.md,
    padding: spacing.md,
    backgroundColor: colors.surface,
    borderRadius: borderRadius.small,
    borderWidth: 1,
    borderColor: colors.primary,
    alignItems: 'center',
    ...shadows.small,
  },
  viewAllText: {
    color: colors.primary,
    fontSize: typography.body1,
    fontWeight: 'bold',
  },
});

export default ParliamentHomeScreen;