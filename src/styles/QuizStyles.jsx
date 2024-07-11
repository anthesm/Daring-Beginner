import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color:"#222",
  },
  optionButton: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    color: '#333',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  selectedOptionButton: {
    backgroundColor: '#e0e0e0',
  },
  correctOptionButton: {
    backgroundColor: '#a5d6a7',
    color: '#333',
  },
  wrongOptionButton: {
    backgroundColor: '#ef9a9a',
    color: '#333',
  },
});

export default styles;
