import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "./components/headerComponent/Header";
import GlobalStyles from "./components/styles/Global";
import theme from "./components/styles/theme";
import Note from "./pages/note/Note";
import { connect } from "react-redux";
import profile1 from "./assets/images/profile1.jpg";
import Symptoms from "./components/symptomComponent/Symptoms.component";
import PageTitle from "./components/utils/PageTitleComponent/PageTitle.component";
const HeaderMetadata = {
  logoText: "Clinic Note",
  greeting: "Hello",
  userName: "Timi",
  userImg: profile1,
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <Router>
          <Header {...HeaderMetadata}></Header>
          <Routes>
            <Route path="/" element={<Note />}>
              <Route
                path="reviewofsystems"
                element={
                  <>
                    <div>
                      <PageTitle />
                    </div>
                    <div>
                      <Symptoms />
                    </div>
                  </>
                }
              />
              <Route path="*" element={<span>Other Screens</span>} />
            </Route>
            <Route path="*" element={<span>Error Pages</span>} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
