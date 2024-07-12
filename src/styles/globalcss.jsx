import {StyleSheet} from 'react-native';

export const CommonStyles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: '#333',
  },
  button: {
    backgroundColor: '#4cc75c',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#222',
  },
  subHeader: {
    fontSize: 18,
    color: '#666',
    marginVertical: 5,
  },
});

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  column: {
    flexDirection: 'column',
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 10,
  },
});
