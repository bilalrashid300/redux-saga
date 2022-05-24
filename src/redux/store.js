import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from 'redux-saga';
import reducers from "./reducers";
import rootSaga from "./saga";

// const store = compose(
//     window.devToolsExtension && window.devToolsExtension(),
// )(createStore)(reducers);
const sagaMiddleware = createSagaMiddleware(rootSaga);
const store = createStore(reducers, applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
