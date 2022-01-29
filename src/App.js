import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Notes from './pages/Notes';
import Create from './pages/Create';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import Layout from './components/Layout';

function App() {

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#f50057'
      },
      secondary: blue
    },
    typography: {
      fontFamily: 'Georama',
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 400,
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Notes />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
