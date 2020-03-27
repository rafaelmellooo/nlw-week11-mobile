import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16,
  },

  property: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold',
  },

  value: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: '#737380',
  },

  infoButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  infoButtonText: {
    color: "#E02041",
    fontSize: 15,
    fontWeight: 'bold',
  },
});