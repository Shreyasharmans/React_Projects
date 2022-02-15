import React, {createContext, lazy, Suspense, useContext} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import counterReducer from "./reducers/CounterReducer";
import SignUpForm from "./components/SignUpForm";
import SumNumbers from "./components/SumNumbers";
import Header from "./components/Header";
import TaskScreen from "./components/TaskScreen";
import higherOrderComponent from './components/Hoc';
import SampleRenderProps from './components/SampleRenderProps';
const I18Component = lazy(() => import("./components/I18Component"));
const ErrorBoundary = lazy(() => import("./components/ErrorBoundary"));
const Photos = lazy(() => import("./components/Photos"));
const CounterComponent = lazy(()=> import("./components/CounterComponent"));//Calling component directly and asynchronous function
const ReduxCounter = lazy(()=> import("./components/ReduxCounter"));
export const AnupamaContext = createContext({ favCharacter: "Anupama" });
export const BreakingBadContext = createContext({
  favCharacter: "Walter White",
});

const myReduxStore = createStore(counterReducer); //Redux store


const App = () => {
  const TestApp=higherOrderComponent(()=>{
    return <div>I am a HOC.</div>
  });
 
  const anupamaContent = useContext(AnupamaContext);
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Suspense fallback={<div>Loading......</div>}>
      {/* <Suspense fallback={<div>{anupamaContent.favCharacter}</div>}> */}
      <Routes>
        <Route path={"/"} element={<h1>This is Home Page</h1>} />
        <Route path={"/contact"} element={<h1>This is Contact Page</h1>} />
        <Route path={"/about"} element={<h1>This is About Us Page</h1>} />
        <Route path={"/signup"}  element={
                <ErrorBoundary>
                  <SignUpForm />
                </ErrorBoundary>
              } />
        <Route path={"/sum"} element={<SumNumbers />} />
        <Route path={"/tasks"} element={<TaskScreen />} />
        <Route path={"/photos"} element={<Photos />} />
          <Route path={"/counter"} element={
            <ErrorBoundary>
          <CounterComponent />
          </ErrorBoundary>} />
          <Route path={"/test"} element={<TestApp />} />
          <Route path={"/sample"} element={<SampleRenderProps />} />
          <Route path={"/international"} element={<I18Component />} />
          <Route path={"/redux-counter"} element={<ReduxCounter />} />
      </Routes>
      </Suspense>
      </BrowserRouter>
    </div>
  );
};
const MyApp = () => (
  // <Provider> //Provider is a react-redux component which helps to pass the store info to all the rest of react tree i.e components where we specify store info
  <Provider store={myReduxStore}>
  <AnupamaContext.Provider
    value={{ favCharacter: "Anupama", favVillain: "Vanraj", loudest: "Kavya" }}
  >
    <BreakingBadContext.Provider
      value={{ favCharacter: "Walter White", mostHatedCharacter: "Jessie" }}
    >
      <App />
    </BreakingBadContext.Provider>
  </AnupamaContext.Provider>
  </Provider>
);
export default MyApp;
