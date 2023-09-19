import React from 'react';
// import StudyChart from '../components/StudyChart';
import { ImportsNotUsedAsValues } from 'typescript';
import PrefectureData from '../components/PrefectureData';
import {useQuery} from 'react-query';
import { QueryClient, QueryClientProvider} from 'react-query';
import Prefecture from '../components/PrefectureData';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import studyDataList from '@/components/studyData';
// import studyData from '@/components/studyData';

const queryClient = new QueryClient();

function App(){
  return(
    <QueryClientProvider client={queryClient}>
    <div className="App">

    <LineChart width={500} height={300} data={studyDataList}>
      <XAxis dataKey="name"/>
      <YAxis/>
      <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
    </LineChart>
    
    <PrefectureData />
    </div>
    </QueryClientProvider>
  );
}

export default App;