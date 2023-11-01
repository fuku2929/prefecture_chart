import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import styles from '@/components/PopulationChart.module.css'

interface Props {
  jsonDataList: Array<any>
  prefNames: string[]
}

const PopulationChart = ({ jsonDataList, prefNames }: Props) => {
  const lineItems = prefNames.map((prefName) => <Line key={prefName} dataKey={prefName} stroke="#336B87" />)

  return (
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
  )
}

export default PopulationChart
