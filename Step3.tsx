import { Branch } from 'react-native-branch';

const App = () => {
  useEffect(() => {
    Branch.init('YOUR_BRANCH_KEY', () => {
      // Initialize the Branch SDK
    });

    // Track the INSTALL event
    Branch.subscribe(({ type, data }) => {
      if (type === 'INSTALL') {
        // Handle the installation event
        console.log('Installation tracked:', data);
      }
    });
  }, []);

  return <AppContainer />;
};
