import {useQuery} from 'react-query'

import {client} from 'utils/client'
import type {RGB, HSL} from 'pages/api/get-colors'

export default function useColors() {
  const {data = [], ...rest} = useQuery<Array<RGB | HSL>>(
    'get-colors',
    () => client('/api/get-colors').then(data => data.colors),
    {
      refetchOnWindowFocus: false,
    },
  )

  return {data, ...rest}
}
