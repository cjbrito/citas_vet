import ReactDOM from "react-dom";
import { App } from "./App";
import NewApp from "./NewApp";
import './index.css'

import {

  useQuery,

  useMutation,

  useQueryClient,

  QueryClient,

  QueryClientProvider,

} from 'react-query'

const queryClient = new QueryClient()

const container = document.getElementById('root');

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    {/* <NewApp /> */}
    <App />
  </QueryClientProvider>
  , container)