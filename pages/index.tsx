import useColors from '../hooks/use-colors'

import {getColor} from 'utils/converter'

function Home() {
  const {data: colors, refetch, isLoading, isError} = useColors()

  if (isLoading) {
    return <div className="text-center text-4xl py-20">Loading...</div>
  }

  if (isError) {
    return (
      <div className="text-center py-16">
        <div className="text-3xl text-red-400 mb-8">
          Somethin went wrong, Please try agian
        </div>
        <div>
          <button
            className="py-2 px-4 rounded bg-red-400 text-white"
            onClick={() => refetch()}
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="container mx-auto py-12 px-4 md:px-10">
        <h1 className="text-5xl text-sky-400 text-center font-semibold mb-16">
          <span className="text-black">Color</span> Swatches
        </h1>
        <div className="text-center mb-8">
          <button
            className="py-2 px-4 bg-sky-500 text-white rounded"
            onClick={() => refetch()}
            disabled={isLoading}
          >
            Random
          </button>
        </div>
        <div className="grid grid-cols-12 gap-8">
          {colors.map(c => (
            <div
              key={c.id}
              className="col-span-6 md:col-span-3"
              style={{
                backgroundColor: getColor(c),
                height: 150,
                width: '100%',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
