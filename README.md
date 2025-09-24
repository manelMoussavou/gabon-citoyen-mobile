# Gabon Citoyen - Application Mobile

Application mobile React Native pour la plateforme Gabon Citoyen, permettant aux citoyens gabonais de suivre l'actualité parlementaire et d'accéder facilement aux services administratifs.

## 🚀 Fonctionnalités

### 🏛️ Parlement
- **Suivi des projets de loi** : Consultez les projets en cours, votés ou rejetés
- **Statistiques parlementaires** : Projets actifs, votes de la semaine, nouvelles lois
- **Détails des projets** : Informations complètes, statut, auteur, catégorie
- **Recherche avancée** : Filtrez par statut, catégorie ou mots-clés

### 👥 Mon Député
- **Profil du député** : Informations personnelles, parti politique, circonscription
- **Activités récentes** : Propositions, votes, interventions
- **Contact direct** : Email, téléphone, demande de rendez-vous
- **Suivi des réponses** : Messages citoyens et réponses du député

### 🤖 Assistant Administratif
- **Chat intelligent** : Assistant IA pour vos démarches administratives
- **Démarches populaires** : Carte d'identité, passeport, acte de naissance
- **Guides étape par étape** : Procédures détaillées avec documents requis
- **Centres de service** : Localisation des services les plus proches

### 🌍 Diaspora Gabonaise
- **Services consulaires** : Ambassades, consulats, démarches à distance
- **Communauté locale** : Événements, associations, restaurants
- **Vote à l'étranger** : Modalités et procédures de vote
- **Actualités du pays** : Informations du Gabon en temps réel

### 🔍 Analyse Législative
- **IA d'analyse** : Résumés simplifiés des textes de loi
- **Types d'analyse** : Impact juridique, citoyen, économique
- **Questions libres** : Posez vos questions sur n'importe quel texte
- **Historique** : Sauvegardez et retrouvez vos analyses

## 📱 Screenshots

> [Insérer ici des captures d'écran de l'application]

## 🏗️ Architecture Technique

- **Framework** : React Native avec Expo
- **Navigation** : React Navigation 6
- **État global** : Redux Toolkit
- **UI Components** : React Native Paper
- **Authentification** : JWT avec Expo SecureStore
- **API** : Axios pour les appels REST
- **Style** : StyleSheet natif avec thème personnalisé

## 📦 Installation

### Prérequis
- Node.js 18+
- npm ou yarn
- Expo CLI
- Android Studio (pour Android) ou Xcode (pour iOS)

### Configuration

1. **Cloner le repository**
```bash
git clone https://github.com/manelMoussavou/gabon-citoyen-mobile.git
cd gabon-citoyen-mobile
```

2. **Installer les dépendances**
```bash
npm install
# ou
yarn install
```

3. **Configuration de l'environnement**
```bash
# Créer le fichier de configuration
cp app.json.example app.json
# Éditer avec vos configurations
```

4. **Lancer l'application**
```bash
# Démarrer Expo
npm start

# Pour Android
npm run android

# Pour iOS
npm run ios

# Pour Web
npm run web
```

## 🔧 Configuration

### Variables d'environnement

L'application se configure via le fichier `app.json` :

```json
{
  "expo": {
    "name": "Gabon Citoyen",
    "slug": "gabon-citoyen",
    "extra": {
      "apiUrl": "https://api.gaboncitoyen.com",
      "openaiApiKey": "your-openai-key"
    }
  }
}
```

### API Backend

L'application communique avec l'API Django REST :
- **Base URL** : `https://api.gaboncitoyen.com/api/v1`
- **Authentification** : Token-based
- **Format** : JSON

## 📂 Structure du Projet

```
src/
├── components/          # Composants réutilisables
│   ├── common/         # Composants communs
│   ├── parliament/     # Composants parlement
│   ├── deputy/         # Composants député
│   └── ...
├── screens/            # Écrans de l'application
│   ├── auth/          # Authentification
│   ├── parliament/    # Parlement
│   ├── deputy/        # Député
│   └── ...
├── navigation/         # Configuration navigation
├── services/          # Services API
├── store/             # Redux store & slices
├── styles/            # Thèmes et styles
├── types/             # Types TypeScript
└── utils/             # Utilitaires
```

## 🎨 Design System

### Couleurs
- **Primary** : #0066cc (Bleu gabonais)
- **Secondary** : #2d7d32 (Vert)
- **Accent** : #ffa726 (Orange)
- **Success** : #4caf50
- **Warning** : #ffa726
- **Error** : #ff4444

### Typography
- **Headers** : 24px, 20px, 18px, 16px
- **Body** : 16px, 14px
- **Caption** : 12px, 10px

## 🧪 Tests

```bash
# Lancer les tests
npm test

# Tests avec couverture
npm run test:coverage

# Tests en mode watch
npm run test:watch
```

## 📱 Build & Déploiement

### Build de développement
```bash
# Android
expo build:android

# iOS
expo build:ios
```

### Build de production
```bash
# Configuration EAS
eas build --platform android
eas build --platform ios

# Publication sur les stores
eas submit --platform android
eas submit --platform ios
```

### Variables d'environnement de production
- API_URL : URL de production de l'API
- SENTRY_DSN : Pour le monitoring des erreurs
- ANALYTICS_KEY : Pour l'analyse d'usage

## 🔐 Sécurité

- **Authentification** : Tokens JWT stockés de façon sécurisée
- **Communications** : HTTPS uniquement
- **Données sensibles** : Chiffrement avec Expo SecureStore
- **API** : Rate limiting et validation côté serveur

## 📊 Analytics & Monitoring

- **Crashes** : Sentry pour le suivi des erreurs
- **Usage** : Analytics des écrans et actions utilisateur
- **Performance** : Monitoring des temps de chargement

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commit les changements (`git commit -am 'Ajouter nouvelle fonctionnalité'`)
4. Push vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrir une Pull Request

### Standards de code
- **Linting** : ESLint + Prettier
- **Types** : TypeScript strict
- **Commits** : Convention Conventional Commits
- **Tests** : Jest + React Native Testing Library

## 📚 Documentation

- [Guide d'utilisation](./docs/USER_GUIDE.md)
- [Documentation développeur](./docs/DEVELOPER.md)
- [Architecture](./docs/ARCHITECTURE.md)
- [API Reference](./docs/API.md)

## 🆘 Support

- **Issues** : [GitHub Issues](https://github.com/manelMoussavou/gabon-citoyen-mobile/issues)
- **Discussions** : [GitHub Discussions](https://github.com/manelMoussavou/gabon-citoyen-mobile/discussions)
- **Email** : support@gaboncitoyen.com

## 📱 Télécharger l'app

- [Google Play Store](https://play.google.com/store/apps/details?id=com.gaboncitoyen.mobile)
- [Apple App Store](https://apps.apple.com/app/gabon-citoyen/id123456789)

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 👥 Équipe

- **Développement Mobile** : [Manel Moussavou](https://github.com/manelMoussavou)
- **Design UI/UX** : [Nom Designer]
- **Product Owner** : [Nom PO]

## 🔗 Liens utiles

- [Backend API](https://github.com/manelMoussavou/gabon-citoyen-backend)
- [Site Web](https://gaboncitoyen.com)
- [Documentation API](https://api.gaboncitoyen.com/docs/)

---

**Gabon Citoyen** - *Votre voix compte dans la démocratie gabonaise* 🇬🇦
