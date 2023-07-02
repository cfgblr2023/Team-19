import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import useFetch from "../../hooks/useFetch";

// const data = [
//   { name: "January", Total: 1200 },
//   { name: "February", Total: 2100 },
//   { name: "March", Total: 800 },
//   { name: "April", Total: 1600 },
//   { name: "May", Total: 900 },
//   { name: "June", Total: 1700 },
// ];

const Chart = ({ aspect, title }) => {
  const {data,loading,error,reFetch}=useFetch('/ward')
  console.log(data.len)
  const len=data.len
  
  const dt=data.w
  const occurrenceMap = new Map();

  for(let i=0;i<len;i++){
    if (occurrenceMap.has(dt[i].name)) {
      occurrenceMap.set(dt[i].name, occurrenceMap.get(dt[i].name) + 1);
    } else {
      occurrenceMap.set(dt[i].name, 1);
    }
  }
  //  console.log(occurrenceMap)

   const list = [];
occurrenceMap.forEach((value, key) => {
  list.push({ name: key, Total: value });
});

  
  let data1=[
    {name:"Ward-1",Total:100},
    {name:"Ward-2",Total:200},
    {name:"Ward-3",Total:400}
  ]
  console.log(list)
  return (
     
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={list}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;