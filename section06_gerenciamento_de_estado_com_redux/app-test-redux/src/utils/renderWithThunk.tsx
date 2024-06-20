
// import { legacy_createStore as createStore } from 'redux';
// import userEvent from '@testing-library/user-event';
// import { render } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
// import { reducer } from 'caminho/do/seu/reducer';
// import { ReduxState } from '../types.ts';

// export function renderWithRedux(
//   component: JSX.Element,
//   state: ReduxState | undefined = undefined,
//   store = createStore(reducer, state, applyMiddleware(thunk)),
// ) {
//   const user = userEvent.setup();
//   return ({
//     ...render(
//       <Provider store={store}>
//         {component}
//       </Provider>,
//     ),
//     store,
//     user,
//   }
//   );
// }