import React from 'react';
import Loadable from 'react-loadable';

const Loading = props => <div>{'Loading...'}</div>;

const dynamic = loader => Loadable({
  loader,
  loading: Loading
});

export default dynamic;
