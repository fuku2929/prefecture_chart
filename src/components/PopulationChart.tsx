import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import styles from '@/components/PopulationChart.module.css'
import ReactLoading from 'react-loading'
import { ReactNode, useEffect, useState } from 'react'

interface Props {
  jsonDataList: Array<any>
  prefNames: string[]
  popisLoading: boolean
  populationType: number
}

const PopulationChart = ({ jsonDataList, prefNames, popisLoading, populationType }: Props) => {
  // lineItemsをusestateで管理する必要があるのではないか？
  const [lineItems, setLineItems] = useState<ReactNode[]>([])
  useEffect(()=>{
    setLineItems(prefNames.map((prefName) => <Line key={prefName} dataKey={prefName} stroke="#336B87" />))  //これがtoomany renders引き起こして躁

  }, [prefNames])
  // const lineItems = prefNames.map((prefName) => <Line key={prefName} dataKey={prefName} stroke="#336B87" />)
  const resetLineItems = () => {
    setLineItems([]) 
  }
  useEffect(() => {
    resetLineItems()
  }, [populationType])

  return (
    <div style={{ height: '250px' }}>
      {popisLoading ? (
        <ReactLoading type="spin" color="black" height="20px" width="20px" className={styles.mx} />
      ) : (
        <div style={{ width: '100%', height: '250px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart className={styles.populationChart} width={800} height={400} data={jsonDataList}>
              <XAxis
                dataKey="year"
                label={{
                  value: '年',
                  offset: -5,
                  position: 'insideBottomRight'
                }}
              />
              <YAxis
                type="number"
                tick={{
                  fontSize: 12
                }}
              />
              <Tooltip />
              {lineItems}
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  )
}

export default PopulationChart
