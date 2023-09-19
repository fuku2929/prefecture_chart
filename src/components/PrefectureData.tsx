import { useQuery } from 'react-query';

console.log(process.env.NEXT_PUBLIC_URL)
const apikey=process.env.NEXT_PUBLIC_URL

const fetchPrefectures = async () => {
  if(!apikey)return
  const res = await fetch("https://opendata.resas-portal.go.jp/api/v1/prefectures", {headers:{"X-API-KEY": apikey}});
  return res.json();
};

function Prefecture() {
  const {data, isLoading} = useQuery('prefectures', fetchPrefectures);
  // console.log(data)
  if(isLoading){
    return <span>Loading...</span>;
  }
  return (
    <div>
      <h2>都道府県一覧</h2>
      <div>
        {data.result.map((item:{prefcode: number, prefName: string}) => {
          return(<> <div key={item.prefcode}>{item.prefName} </div>
          <input id='prefecture_checkbox' type='checkbox' /></>)
})}
      </div>
    </div>
  );
}

export default Prefecture;